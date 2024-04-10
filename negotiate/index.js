module.exports = function (context, req, connection) {
  console.log(req)
    context.res = { body: connection };
    context.done();
  };