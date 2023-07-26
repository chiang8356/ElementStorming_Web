const express = require("express");
const app = express();
const uuid = require('uuid');
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // 解析 JSON 格式的請求主體
app.use(bodyParser.urlencoded({ extended: true })); // 解析 URL 編碼格式的請求主體

// 一切就緒，開始接受用戶端連線
app.listen(8000, () => {
  console.log("Web伺服器就緒，開始接受用戶端連線.");
  console.log("鍵盤「Ctrl + C」可結束伺服器程式.");
});

app.get("/ecpayCheckout", function (request, response) {
  // 生成一個唯一識別碼作為 MerchantTradeNo
  const merchantTradeNo = uuid.v4().replace(/-/g, '').substr(0, 20);

  
  const ecpay_payment = require('../test/node_modules/ecpay_aio_nodejs/lib/ecpay_payment')
  
  let base_param = {
    MerchantTradeNo: merchantTradeNo, 
    MerchantTradeDate: '2023/07/13 15:45:30', //ex: 2017/02/13 15:45:30
    TotalAmount: '500',
    TradeDesc: '測試交易描述',
    ItemName: '遊戲幣',
    ReturnURL: ' https://2134-114-38-15-156.ngrok-free.app/ecpayReturn',
    // ChooseSubPayment: '',
    //OrderResultURL: 'https://www.fooish.com/jquery/events.html', //跳轉到自製網頁
    // NeedExtraPaidInfo: '1',
    // ClientBackURL: 'https://www.google.com',
    // ItemURL: 'http://item.test.tw',
    // Remark: '交易備註',
    // HoldTradeAMT: '1',
    // StoreID: '',
    // CustomField1: '',
    // CustomField2: '',
    // CustomField3: '',
    // CustomField4: ''
  }
  let inv_params = {
  }
  const options = require('../test/node_modules/ecpay_aio_nodejs/conf/config-example'),
    create = new ecpay_payment(options),
    htm = create.payment_client.aio_check_out_credit_onetime(parameters = base_param, invoice = inv_params)
  //console.log(htm)


const htmlContent = htm;

// 設定回傳檔案的標頭
response.setHeader('Content-Type', 'text/html');
response.setHeader('Content-Disposition', 'inline; filename="output.html"');

// 回傳字串內容作為 HTML 檔案
response.send(htmlContent);

});


app.post("/ecpayReturn",function(request,response){
  const merchantTradeNo = request.body.MerchantTradeNo;
  const RtnCode = request.body.RtnCode;
  console.log("接收到的MerchantTradeNo:", merchantTradeNo);
  console.log('接收成功',RtnCode);
  response.send("OK")
})


