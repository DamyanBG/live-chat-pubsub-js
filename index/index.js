var fs = require("fs");
var path = require("path");

module.exports = function (context, req) {
  var index =
    context.executionContext.functionDirectory + "/../index.html";
  context.log("index.html path: " + index);
  fs.readFile(index, "utf8", function (err, data) {
    if (err) {
      console.log(err);
      context.done(err);
    }
    context.res = {
      status: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: data,
    };
    context.done();
  });
};