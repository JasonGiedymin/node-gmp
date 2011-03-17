
var gmp = require('../build/default/gmp');
var assert = require("assert");

console.log("gmp version: %s", gmp.version);

// args

; [ "fail"
  , {}
  , []
  , /regx/
  , function(){}
  , NaN
  ].forEach(function(bad){
      var err = {};
      try {
        new gmp.Int(bad);
      } catch (er) {
        err = er;
      }
      assert.equal("bad argument", err.message);

      err = {};
      var thirtyThree = new gmp.Int(33);
      try {
        thirtyThree.add(bad);
      } catch (er) {
        err = er;
      }
      assert.equal("bad argument", err.message);
  })
;



assert.equal(0, new gmp.Int().toString());
assert.equal(0, new gmp.Int(0).toString());
assert.equal("0", new gmp.Int().toString());
assert.equal("0", new gmp.Int(0).toString());
assert.equal("10", new gmp.Int(10.9).toString());

assert.equal("1001", new gmp.Int(1).add(1000).toString());
assert.equal("1001", new gmp.Int("1").add(1000).toString());
assert.equal("1001", new gmp.Int(1).add("1000").toString());
assert.equal("1001", new gmp.Int("1").add("1000").toString());

assert.equal( "2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250"
, new gmp.Int("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243.2").add("7.9").toString()
);

assert.equal( "2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250"
, new gmp.Int("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243").add("7").toString()
);

assert.equal( "2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243"
, new gmp.Int("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250").add("-7").toString()
)


assert.equal("999", new gmp.Int(1000).sub(1).toString());
assert.equal("999", new gmp.Int("1000").sub(1).toString());
assert.equal("999", new gmp.Int(1000).sub("1").toString());
assert.equal("999", new gmp.Int("1000").sub("1").toString());

assert.equal( "2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243"
, new gmp.Int("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250.2").sub("7.9").toString()
);

assert.equal( "2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243"
, new gmp.Int("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250").sub("7").toString()
);

assert.equal( "2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250"
, new gmp.Int("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243").sub("-7").toString()
)


assert.equal("2000", new gmp.Int(1000).mul(2).toString());
assert.equal("2000", new gmp.Int("1000").mul(2).toString());
assert.equal("2000", new gmp.Int(1000).mul("2").toString());
assert.equal("2000", new gmp.Int("1000").mul("2").toString());
assert.equal("-2000", new gmp.Int("1000").mul("-2").toString());

assert.equal(
  "4988279242644679568358482349780376342381505236483823308304138937175623446711021105749656677665591512663283652481872888680545374798179271192933757587530771115005695450663727766851482198240329025000750"
, new gmp.Int("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243")
       .mul("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250").toString()
);


assert.equal("1000", new gmp.Int(2000).div(2).toString());
assert.equal("1000", new gmp.Int("2000").div(2).toString());
assert.equal("1000", new gmp.Int(2000).div("2").toString());
assert.equal("1000", new gmp.Int("2000").div("2").toString());
assert.equal("-1000", new gmp.Int("2000").div("-2").toString());

assert.equal(
  "2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580243"
, new gmp.Int("4988279242644679568358482349780376342381505236483823308304138937175623446711021105749656677665591512663283652481872888680545374798179271192933757587530771115005695450663727766851482198240329025000750")
         .div("2233445598765432112345678909876543212345728034872035834572034572803457802435728034578023457023580250")
         .toString()
);

assert.equal(100000000000000000001, new gmp.Int(100).pow(10).add("1"));

try {
  new gmp.Int(10).pow(1000000000000000); //--> gmp: overflow in mpz type Aborted
} catch(e) {
  assert.equal(e+"", "Error: gmp abort");
}


// chaining
assert.equal("25", new gmp.Int("101").add(-1).sub(90.1).mul(5).div(10).pow(2).toString());

assert.equal("2.5", new gmp.Float("2.5").toString());
assert.equal("0.333333333333333333333", new gmp.Float(1).div(3).toString());
assert.equal("0.0333333333333333333333", new gmp.Float(1).div(30).toString());
assert.equal("-123000", new gmp.Float(123).mul(-1000).toString());

assert.equal("5/2", new gmp.Rational(2.5).toString());
assert.equal("3/2", new gmp.Rational("6/4").toString());
assert.equal("2.5", new gmp.Rational(2.5).toValue());
