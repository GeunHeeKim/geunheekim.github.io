var express = require('express');
var app = express();

var indexRouter = require("./routes/main")(app);
app.use("/public", express.static(__dirname + "/public"));
app.set("port", process.env.PORT || 8080);
// app.set("view engines", "ejs");
app.engine("html", require("ejs").renderFile);

app.listen(app.get("port"), function(){
  console.log("express server is running at localhost" +
  app.get("port")
);
})

// router.get('/', function(req, res, next) {
//   res.render('index', {title: 'Express'});
// });
//
// module.exports = router;

//
//search code
// app.get('/', function(req, res){
//   res.send('Hello World!');
// });

// app.listen(3000, function(){
//   console.log('3000 Server is running!');
// })

// 백엔드수업소스
// var indexRouter = require("index")(app);

// app.set("port", process.env.PORT || 3030);
// app.set("view engines", "ejs");
// app.engine("html", require("ejs").renderFile);
