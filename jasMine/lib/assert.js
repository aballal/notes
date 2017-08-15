(function(exports) {
  function report(test, passed) {
    if (passed) console.log(test + ": Passed");
    else throw new Error(test + ": Failed");
  }

  function isTrue(assertionToCheck) {
    report(arguments.callee.caller.name, assertionToCheck);
  }

  function isEqual(leftHandSide, rightHandSide) {
    report(arguments.callee.caller.name, leftHandSide === rightHandSide);
  }

  exports.assert = {
    isTrue: isTrue,
    isEqual: isEqual
  }
})(this);
