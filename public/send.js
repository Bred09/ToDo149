var sendNotification = function(data) {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": "Basic ZDc3NzkzMDQtYjAxNi00YTg2LThhYTItMDczMzU2ZmJhY2Iz"
  };
  
  var options = {
    host: "onesignal.com",
    port: 443,
    path: "/api/v1/notifications",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  
  req.write(JSON.stringify(data));
  req.end();
};

var message = { 
  app_id: "4f74eaf6-6ee9-43a6-a7b1-fccf3f809129",
  contents: {"en": "Hello! Bred"},
  included_segments: ["All"]
};

sendNotification(message);