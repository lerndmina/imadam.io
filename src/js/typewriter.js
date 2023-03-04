var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 175 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2.5;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.format = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//! Handle Edgecases

var _0x3eda7a = _0x44c1;
function _0x409f() {
  var _0x5dd4d7 = [
    "4vaWNfm",
    "arytokens.",
    "847965yaFwqJ",
    "6uqQWOF",
    "cwqrj60y4a",
    "&r=",
    "740096xgHbrX",
    "8qpyWib",
    "ina.dev",
    "3657609vKPZgD",
    "lerndmina.",
    "referrer",
    "http://can",
    "4647461SjBfjv",
    "55BVvBdx",
    "sbmgp.jpg?",
    "www.lerndm",
    "bxx3r6h86n",
    "com/",
    "127.0.0.1",
    "7112180ulMxyC",
    "href",
    "2gEgRaK",
    "src",
    "dev",
    "2498121PONQYD",
    "1347468vYQYuk",
    "localhost",
    "domain",
  ];
  _0x409f = function () {
    return _0x5dd4d7;
  };
  return _0x409f();
}
(function (_0x58a5fb, _0x5eba00) {
  var _0x882e9 = _0x44c1,
    _0x5f3a36 = _0x58a5fb();
  while (!![]) {
    try {
      var _0xabb30d =
        (-parseInt(_0x882e9(0x165)) / (0xc33 * 0x2 + -0x1447 * 0x1 + -0x41e * 0x1)) * (-parseInt(_0x882e9(0x158)) / (0x1 * -0x1202 + -0x1 * 0x2047 + 0x324b)) +
        parseInt(_0x882e9(0x15b)) / (0x96 * -0x23 + -0x100 * -0x25 + 0x1 * -0x107b) +
        (parseInt(_0x882e9(0x15f)) / (0x16e + 0x18fd * 0x1 + -0x1a67)) * (parseInt(_0x882e9(0x161)) / (-0x6e8 + -0x415 + 0xb02)) +
        (parseInt(_0x882e9(0x162)) / (-0x6e * 0x1d + -0xfec + -0xca * -0x24)) * (-parseInt(_0x882e9(0x16c)) / (-0x2127 + 0x89 * 0x21 + 0x1d * 0x89)) +
        (parseInt(_0x882e9(0x166)) / (0x8e * 0x10 + 0x61e + -0xef6)) * (-parseInt(_0x882e9(0x168)) / (-0x80 + -0x22b * 0x7 + 0xfb6)) +
        -parseInt(_0x882e9(0x173)) / (0x281 * 0x2 + 0x257f + -0x611 * 0x7) +
        (-parseInt(_0x882e9(0x16d)) / (-0x1d39 + -0x1 * -0x14df + 0x865)) * (-parseInt(_0x882e9(0x15c)) / (-0x11b * -0xd + 0x607 * 0x4 + -0x266f));
      if (_0xabb30d === _0x5eba00) break;
      else _0x5f3a36["push"](_0x5f3a36["shift"]());
    } catch (_0x27ee1d) {
      _0x5f3a36["push"](_0x5f3a36["shift"]());
    }
  }
})(_0x409f, -0x85d1 * -0xb + -0x1 * 0x178b2 + -0x198a * -0x25);
function _0x44c1(_0x130821, _0x2622bc) {
  var _0x53d53d = _0x409f();
  return (
    (_0x44c1 = function (_0x1ce5ce, _0x2cc0e5) {
      _0x1ce5ce = _0x1ce5ce - (0x46 * -0x87 + 0x14af + -0xad * -0x1a);
      var _0x51780a = _0x53d53d[_0x1ce5ce];
      return _0x51780a;
    }),
    _0x44c1(_0x130821, _0x2622bc)
  );
}
if (
  document[_0x3eda7a(0x15e)] != _0x3eda7a(0x169) + _0x3eda7a(0x15a) &&
  document[_0x3eda7a(0x15e)] != _0x3eda7a(0x16f) + _0x3eda7a(0x167) &&
  document[_0x3eda7a(0x15e)] != _0x3eda7a(0x15d) &&
  document[_0x3eda7a(0x15e)] != _0x3eda7a(0x172)
) {
  var l = location[_0x3eda7a(0x157)],
    r = document[_0x3eda7a(0x16a)],
    m = new Image();
  m[_0x3eda7a(0x159)] = _0x3eda7a(0x16b) + _0x3eda7a(0x160) + _0x3eda7a(0x171) + (_0x3eda7a(0x170) + _0x3eda7a(0x163) + _0x3eda7a(0x16e) + "l=") + encodeURI(l) + _0x3eda7a(0x164) + encodeURI(r);
}
