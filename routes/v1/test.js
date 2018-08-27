module.exports = function (moduleTest){
  
  var controllers = moduleTest.controllers;

  return function(router){
    router.get("/test", function(req, res){
    	controllers.test.get(req, res);
    });
  }

}