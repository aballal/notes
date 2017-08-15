(function(exports) {
  function report(test, passed) {
    try {
      if (passed) console.log("%c" + test + ": Passed", "color:Green");
      else throw new Error(test);
    }
    catch (error) {
      console.log("%c" + test + ": Failed", "color:Red");
      console.log(error);
    }
  }

  function isTrue(assertionToCheck) {
    report(arguments.callee.caller.name, assertionToCheck);
  }

  function isEqual(leftHandSide, rightHandSide) {
    var passed = leftHandSide === rightHandSide;
    if (!passed) console.log("%c" + leftHandSide + " is not equal to " + rightHandSide, "color:Red");
    report(arguments.callee.caller.name, passed);
  }

  exports.assert = {
    isTrue: isTrue,
    isEqual: isEqual
  }
})(this);
