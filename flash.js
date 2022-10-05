
// Copyright Jining Liu. MIT License. More on GitHub.

var flashjs = (function () {

  var config

  function init(configuration) {
    const aspectRatio = configuration.aspectRatio;
    aspectRatio = aspectRatio.split(':');
    if (aspectRatio.length != 2) {
      console.error('flashjs: variable aspectRatio must be a valid ratio. (Example: 1:1)');
      return;
    }
    const aspectRatioInt = [];
    aspectRatio.forEach((val) => {
      aspectRatioInt.push(val.parseInt());
    });
    aspectRatio = aspectRatioInt;
    alert(aspectRatio);
  }
  
  return {
    init: init
  }
  
})();