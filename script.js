const _0x262a46 = _0x253a;
(function (_0x3aa166, _0x3ec6d7) {
  const _0x37b9af = _0x253a,
    _0x48ffee = _0x3aa166();
  while (!![]) {
    try {
      const _0x434d14 =
        parseInt(_0x37b9af(0x8f)) / 0x1 +
        (parseInt(_0x37b9af(0xec)) / 0x2) * (-parseInt(_0x37b9af(0xe9)) / 0x3) +
        parseInt(_0x37b9af(0xf4)) / 0x4 +
        (-parseInt(_0x37b9af(0xdb)) / 0x5) *
          (-parseInt(_0x37b9af(0x10b)) / 0x6) +
        -parseInt(_0x37b9af(0xfd)) / 0x7 +
        parseInt(_0x37b9af(0xfa)) / 0x8 +
        (-parseInt(_0x37b9af(0x106)) / 0x9) * (parseInt(_0x37b9af(0x99)) / 0xa);
      if (_0x434d14 === _0x3ec6d7) break;
      else _0x48ffee["push"](_0x48ffee["shift"]());
    } catch (_0x315223) {
      _0x48ffee["push"](_0x48ffee["shift"]());
    }
  }
})(_0x3d6a, 0xd4ea8),
  document[_0x262a46(0xe8)](_0x262a46(0xce), function () {
    const _0x16d0b5 = _0x262a46;
    document[_0x16d0b5(0xb8)]("addItemButton")[_0x16d0b5(0xe8)](
      _0x16d0b5(0x10c),
      addItem
    ),
      document[_0x16d0b5(0xb8)](_0x16d0b5(0xbe))[_0x16d0b5(0xe8)](
        "change",
        function () {
          const _0xd8e72e = _0x16d0b5,
            _0x34887a = document[_0xd8e72e(0xb8)](_0xd8e72e(0xbe)),
            _0x20ebdd = document[_0xd8e72e(0xb8)](_0xd8e72e(0xf5));
          _0x34887a[_0xd8e72e(0xab)] === _0xd8e72e(0xb4)
            ? (_0x20ebdd["style"]["display"] = _0xd8e72e(0xb6))
            : (_0x20ebdd[_0xd8e72e(0xa2)][_0xd8e72e(0x92)] = _0xd8e72e(0x90));
        }
      );
  });
function addItem() {
  const _0x3bc3cf = _0x262a46,
    _0x3f50d1 = document["getElementById"]("itemsContainer"),
    _0x3e5caa = document["createElement"](_0x3bc3cf(0x101));
  (_0x3e5caa[_0x3bc3cf(0xd8)] = "item"),
    (_0x3e5caa[_0x3bc3cf(0x8b)] = _0x3bc3cf(0x103)),
    _0x3f50d1[_0x3bc3cf(0xd7)](_0x3e5caa),
    _0x3e5caa[_0x3bc3cf(0xea)](_0x3bc3cf(0xb9))[_0x3bc3cf(0xe8)](
      _0x3bc3cf(0x10c),
      deleteItem
    ),
    _0x3e5caa[_0x3bc3cf(0xea)](_0x3bc3cf(0xb1))[_0x3bc3cf(0xe8)](
      _0x3bc3cf(0x10c),
      duplicateItem
    ),
    _0x3e5caa[_0x3bc3cf(0xea)](".quantityInput")[_0x3bc3cf(0xe8)](
      _0x3bc3cf(0xf2),
      () => calculateSum(_0x3e5caa)
    ),
    _0x3e5caa[_0x3bc3cf(0xea)](_0x3bc3cf(0xeb))[_0x3bc3cf(0xe8)](
      _0x3bc3cf(0xf2),
      () => calculateSum(_0x3e5caa)
    ),
    updateTotalSum();
  let _0x370f76 = document[_0x3bc3cf(0xea)](_0x3bc3cf(0xa4))[_0x3bc3cf(0xab)];
  translatePage(_0x370f76);
}
function calculateSum(_0x34889b) {
  const _0x4a65b7 = _0x262a46,
    _0x2b6e19 = _0x34889b[_0x4a65b7(0xea)](_0x4a65b7(0x104)),
    _0x3aa351 = _0x34889b[_0x4a65b7(0xea)](".priceInput"),
    _0x4030dc = _0x34889b[_0x4a65b7(0xea)](_0x4a65b7(0xee)),
    _0x16bc22 = parseFloat(_0x2b6e19[_0x4a65b7(0xab)]) || 0x0,
    _0x53cb23 = parseFloat(_0x3aa351[_0x4a65b7(0xab)]) || 0x0,
    _0x59d2ad = _0x16bc22 * _0x53cb23;
  (_0x4030dc[_0x4a65b7(0xab)] = _0x59d2ad[_0x4a65b7(0xca)](0x2)),
    updateTotalSum();
}
function toggleCustomItemInput(_0x3060b4) {
  const _0x3ae89d = _0x262a46,
    _0x2cb453 = _0x3060b4[_0x3ae89d(0xac)](".item"),
    _0x4883af = _0x2cb453["querySelector"](_0x3ae89d(0xbb)),
    _0x4f2480 = _0x3060b4[_0x3ae89d(0xab)];
  _0x4f2480 === _0x3ae89d(0xb4)
    ? ((_0x4883af[_0x3ae89d(0xa2)]["display"] = _0x3ae89d(0xf9)),
      (_0x4883af[_0x3ae89d(0xdc)] = !![]))
    : ((_0x4883af[_0x3ae89d(0xa2)][_0x3ae89d(0x92)] = "none"),
      (_0x4883af["required"] = ![]),
      (_0x4883af[_0x3ae89d(0xab)] = "")),
    _0x4f2480 === _0x3ae89d(0xb4) && _0x4883af["value"]["trim"]() === ""
      ? _0x4883af[_0x3ae89d(0xd1)](_0x3ae89d(0x96))
      : _0x4883af[_0x3ae89d(0xd1)]("");
}
function deleteItem(_0xf9a7e9) {
  const _0x28ed03 = _0x262a46;
  confirm(_0x28ed03(0xcf)) &&
    (_0xf9a7e9[_0x28ed03(0xcc)][_0x28ed03(0xb5)][_0x28ed03(0x98)](),
    updateTotalSum());
}
function filterEmployeeIds() {
  const _0x35a1d6 = _0x262a46,
    _0x44d6e5 = document[_0x35a1d6(0xea)]("#employeeIdSearch"),
    _0x3892ba = _0x44d6e5["value"][_0x35a1d6(0x108)]()[_0x35a1d6(0x8d)](),
    _0x45f9b1 = document[_0x35a1d6(0xea)](_0x35a1d6(0xc1)),
    _0x376530 = _0x45f9b1[_0x35a1d6(0xd6)](_0x35a1d6(0xaa)),
    _0x4a3d60 = document[_0x35a1d6(0xea)](_0x35a1d6(0xe4));
  let _0x2fc3f2 = 0x0;
  for (let _0x16303a = 0x0; _0x16303a < _0x376530["length"]; _0x16303a++) {
    const _0x2e60db =
      _0x376530[_0x16303a][_0x35a1d6(0x8c)] ||
      _0x376530[_0x16303a]["innerText"];
    _0x3892ba === "" ||
    _0x2e60db[_0x35a1d6(0x8d)]()[_0x35a1d6(0xc4)](_0x3892ba) > -0x1
      ? ((_0x376530[_0x16303a][_0x35a1d6(0xa2)][_0x35a1d6(0x92)] = ""),
        _0x2fc3f2++)
      : (_0x376530[_0x16303a][_0x35a1d6(0xa2)][_0x35a1d6(0x92)] =
          _0x35a1d6(0x90));
  }
  if (_0x2fc3f2 === 0x0)
    (_0x4a3d60[_0x35a1d6(0xc9)] = _0x35a1d6(0xdd)),
      (_0x45f9b1[_0x35a1d6(0x8a)] = _0x2fc3f2);
  else {
    if (_0x2fc3f2 === 0x1) {
      const _0x3df29a = Array["from"](_0x376530)["findIndex"](
        (_0xb5497f) =>
          _0xb5497f[_0x35a1d6(0xa2)][_0x35a1d6(0x92)] !== _0x35a1d6(0x90)
      );
      (_0x45f9b1[_0x35a1d6(0xa6)] = _0x3df29a),
        (_0x45f9b1[_0x35a1d6(0x8a)] = 0x0);
    } else {
      const _0x125d59 = 0x5;
      _0x45f9b1[_0x35a1d6(0x8a)] =
        _0x2fc3f2 > _0x125d59 ? _0x125d59 : _0x2fc3f2;
    }
  }
  _0x2fc3f2 === 0x0 && (_0x45f9b1["selectedIndex"] = 0x0);
}
document["addEventListener"](_0x262a46(0xce), function () {
  const _0x5873e6 = _0x262a46,
    _0x1cac48 = document[_0x5873e6(0xea)]("#employeeId");
  _0x1cac48["addEventListener"](_0x5873e6(0xa0), function () {
    const _0x26e353 = _0x5873e6,
      _0x55d825 = _0x1cac48[_0x26e353(0x91)][_0x1cac48[_0x26e353(0xa6)]];
    _0x55d825 &&
      (document["querySelector"](_0x26e353(0xe6))[_0x26e353(0xab)] =
        _0x55d825[_0x26e353(0xc9)]);
  });
}),
  document[_0x262a46(0xe8)](_0x262a46(0xce), function () {
    const _0x810955 = _0x262a46,
      _0x20ddb0 = document[_0x810955(0xea)](_0x810955(0xc1));
    _0x20ddb0[_0x810955(0xe8)]("change", function () {
      const _0x1a9db7 = _0x810955,
        _0x37ecd1 = _0x20ddb0["options"][_0x20ddb0[_0x1a9db7(0xa6)]];
      _0x37ecd1 &&
        (document["querySelector"](_0x1a9db7(0xe6))[_0x1a9db7(0xab)] =
          _0x37ecd1["text"]);
    });
  }),
  document[_0x262a46(0xe8)]("DOMContentLoaded", function () {
    const _0x16b455 = _0x262a46,
      _0x2d9a8e = document[_0x16b455(0xb8)](_0x16b455(0x9d));
    _0x2d9a8e["addEventListener"]("input", filterEmployeeIds);
  });
function updateSearchField() {
  const _0x409a12 = _0x262a46,
    _0x9ccaca = document[_0x409a12(0xea)](_0x409a12(0xc1)),
    _0x169519 = document[_0x409a12(0xea)](_0x409a12(0xe4));
  var _0x1101ce = document["getElementById"](_0x409a12(0xbe))["value"];
  (document[_0x409a12(0xb8)](_0x409a12(0x9d))["value"] = _0x1101ce),
    (_0x169519[_0x409a12(0xc9)] = _0x1101ce),
    (_0x9ccaca[_0x409a12(0x8a)] = 0x0);
}
function _0x3d6a() {
  const _0x535b68 = [
    "Toggle\x20Dark\x20Mode",
    "Please\x20specify\x20the\x20item\x20name.",
    "button",
    "remove",
    "230ZUKMYZ",
    "classList",
    "Partner\x20Name",
    "Are\x20you\x20sure\x20you\x20want\x20to\x20submit\x20the\x20data?",
    "employeeIdSearch",
    "To\x20add\x20more\x20users,\x20update\x20the\x20\x27users\x27\x20object\x20in\x20the\x20script\x20with\x20new\x20username-password\x20pairs\x20in\x20the\x20format\x20\x27USERNAME\x27:\x20\x27PASSWORD\x27.",
    "Please\x20add\x20at\x20least\x20one\x20item\x20before\x20submitting\x20the\x20data.",
    "change",
    "toLowerCase",
    "style",
    "#partnerName",
    "input[name=\x22language\x22]:checked",
    "Total_Price",
    "selectedIndex",
    "bold",
    ".itemSelect",
    "instructions-button",
    "option",
    "value",
    "closest",
    "length",
    "#dataForm\x20[required]",
    "ItemsData.xlsx",
    "username",
    ".duplicateItem",
    "createElement",
    ".container",
    "other",
    "parentNode",
    "block",
    "map",
    "getElementById",
    ".deleteItem",
    "from",
    ".itemInput",
    "Clinic\x20Code",
    "totalSumDisplay",
    "employeeId",
    "partnerNameSearch",
    "addItemButton",
    "#employeeId",
    "Please\x20fill\x20in\x20all\x20required\x20fields.",
    "fontWeight",
    "indexOf",
    "An\x20error\x20occurred\x20while\x20processing\x20the\x20data.\x20Please\x20try\x20again.",
    "instructionsButton",
    "#partnerNameSearch",
    "error",
    "text",
    "toFixed",
    "password",
    "target",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "DOMContentLoaded",
    "Are\x20you\x20sure\x20you\x20want\x20to\x20delete\x20this\x20item?",
    "dark-mode",
    "setCustomValidity",
    "instructionsModal",
    ".clinicCodeInput",
    "body",
    "preventDefault",
    "getElementsByTagName",
    "appendChild",
    "className",
    "querySelectorAll",
    "dataForm",
    "6798235KEhQiD",
    "required",
    "Other",
    "includes",
    "array",
    "#empID\x20option",
    "\x0a\x20\x20<div\x20class=\x22login-container\x22>\x0a\x20\x20\x20\x20\x20\x20<h2>Login</h2>\x0a\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22username\x22\x20placeholder=\x22Username\x22\x20required>\x0a\x20\x20\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22password\x22\x20placeholder=\x22Password\x22\x20required>\x0a\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20<button\x20type=\x22submit\x22>Login</button>\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22loginError\x22\x20style=\x22color:\x20red;\x20display:\x20none;\x22>Incorrect\x20username\x20or\x20password</div>\x0a\x20\x20</div>\x0a\x20\x20",
    "Please\x20fill\x20in\x20all\x20fields\x20for\x20each\x20item,\x20including\x20the\x20Clinic\x20Code.",
    "cloneNode",
    "#placeholderOption",
    "loginError",
    "#employeeIdSearch",
    "innerText",
    "addEventListener",
    "142929dzrMwh",
    "querySelector",
    ".priceInput",
    "2BtWrjC",
    "clearFormButton",
    ".sumInput",
    "loginForm",
    "add",
    "form",
    "input",
    "Total\x20Sum:\x20₹",
    "1824068MyOaJL",
    "empIDInput",
    "utils",
    "files",
    "123456",
    "inline-block",
    "6266832CfMqmb",
    "toggle-button",
    "emp\x20ID",
    "7330253pODstN",
    "Instructions",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22modal-content\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22close-button\x22>&times;</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20id=\x22instruction\x22\x20style=\x22background-color:\x20#e5e5e5;\x20margin-top:40px;color:\x20black;\x20padding:\x205px;\x20text-align:\x20center;\x20font-size:15px;\x22>INSTRUCTIONS</h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<ul>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20id=\x22a\x22>Click\x20on\x20\x22Add\x20Another\x20Item\x22\x20to\x20add\x20items.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20id=\x22b\x22>Click\x20on\x20\x22Any\x20type\x20of\x20file\x20can\x20be\x20uploaded\x20here\x20but\x20make\x20sure\x201\x20file\x20is\x20selected</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20id=\x22c\x22>In\x20\x22Price\x22,\x20enter\x20the\x20per\x20quantity,\x20per\x20unit\x20price.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20id=\x22d\x22>Click\x20on\x20\x22For\x20any\x20Doubt\x20Pin\x20me\x20on\x20the\x20group\x20or\x20connect\x20with\x20your\x20manager</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20id=\x22e\x22>Click\x20on\x20\x22If\x20your\x20EMP_ID\x20is\x20missing\x20you\x20can\x20select\x20the\x20other\x20option\x20there\x20it\x20will\x20auto\x20add\x20the\x20new\x20one\x20for\x20you/</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20id=\x22f\x22\x20>In\x20\x22Item\x22,\x20specify\x20the\x20quantity\x20purchased\x20it\x20will\x20auto\x20capture\x20the\x20sum\x20amount.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<li\x20id=\x22g\x22>In\x20\x22EMP\x20ID\x22,\x20select\x20from\x20the\x20available\x20IDs.\x20If\x20not\x20available,\x20it\x20will\x20automatically\x20select\x20\x22Other\x22.</li>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</ul>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20",
    "20px",
    "div",
    "fileInput",
    "\x0a<input\x20type=\x22text\x22\x20placeholder=\x22Clinic\x20Code\x22\x20class=\x22clinicCodeInput\x22\x20required\x20maxlength=\x2210\x22\x20id=\x22clinic\x22/>\x20\x0a<select\x20class=\x22itemSelect\x22\x20onchange=\x22toggleCustomItemInput(this)\x22\x20id=\x22cell\x22>\x0a\x20<option\x20value=\x22cells\x22>Cells</option>\x0a\x20<option\x20value=\x22shelf\x22>Shelf</option>\x0a\x20<option\x20value=\x22chair\x22>Chair</option>\x0a\x20<option\x20value=\x22tablet\x20charger\x22>Tablet\x20Charger</option>\x0a\x20<option\x20value=\x22bm\x20machine\x20charger\x20cable\x22>BM\x20Machine\x20Charger\x20Cable</option>\x0a\x20<option\x20value=\x22tablet\x20charging\x20cable\x22>Tablet\x20Charging\x20Cable</option>\x0a\x20<option\x20value=\x22stationary\x20item\x22>Stationary\x20Item</option>\x0a\x20<option\x20value=\x22first-aid\x20kit\x20item\x22>First-Aid\x20Kit\x20Item</option>\x0a\x20<option\x20value=\x22bp\x20kit\x22>BP\x20Kit</option>\x0a\x20<option\x20value=\x22power\x20bank\x22>Power\x20Bank</option>\x0a\x20<option\x20value=\x22earphone\x22>Earphone</option>\x0a\x20<option\x20value=\x22stand\x22>Stand</option>\x0a\x20<option\x20value=\x22certificate\x22>Certificate</option>\x0a\x20<option\x20value=\x22first-aid\x20kit\x22>First-Aid\x20KIT</option>\x0a\x20<option\x20value=\x22bags\x22>Bags</option>\x0a\x20<option\x20value=\x22tube\x20light\x22>Tube\x20Light</option>\x0a\x20<option\x20value=\x22extension\x22>Extension</option>\x0a\x20<option\x20value=\x22sanitizer\x22>Sanitizer</option>\x0a\x20<option\x20value=\x22doctor\x20certificate\x22>Doctor\x20Certificate</option>\x0a\x20<option\x20value=\x22fan\x22>Fan</option>\x0a\x20<option\x20value=\x22curtain\x22>Curtain</option>\x0a\x20<option\x20value=\x22other\x22>Other</option>\x0a</select>\x0a<input\x20type=\x22text\x22\x20placeholder=\x22If\x20other,\x20specify\x22\x20class=\x22itemInput\x22\x20style=\x22display:\x20none;\x22\x20/>\x0a<input\x20type=\x22number\x22\x20placeholder=\x22Quantity\x22\x20class=\x22quantityInput\x22\x20id=\x22quant\x22\x20\x20required\x20/>\x0a<input\x20type=\x22number\x22\x20step=\x220.01\x22\x20placeholder=\x22Price\x22\x20class=\x22priceInput\x22\x20\x20id=\x22price\x22\x20required\x20/>\x0a<input\x20type=\x22text\x22\x20class=\x22sumInput\x22\x20placeholder=\x22Sum\x22\x20readonly\x20/>\x0a\x0a<button\x20class=\x22deleteItem\x22>Delete\x20Item</button>\x0a<button\x20class=\x22duplicateItem\x20submitBtn\x22\x20>Duplicate</button>\x0a",
    ".quantityInput",
    "itemsContainer",
    "335484EnsnwS",
    ".item",
    "trim",
    "dcName",
    "insertBefore",
    "6kSGETS",
    "click",
    "highlight",
    "nextSibling",
    "dark-mode-button",
    "size",
    "innerHTML",
    "textContent",
    "toUpperCase",
    "Item",
    "225256Utyhow",
    "none",
    "options",
    "display",
    "marginTop",
    "forEach",
  ];
  _0x3d6a = function () {
    return _0x535b68;
  };
  return _0x3d6a();
}
function filterPartnerNames() {
  const _0x3f1e0c = _0x262a46,
    _0x2b140b = document["querySelector"](_0x3f1e0c(0xc7)),
    _0x12c61f = _0x2b140b["value"][_0x3f1e0c(0x108)]()[_0x3f1e0c(0xa1)](),
    _0x59295a = document[_0x3f1e0c(0xea)](_0x3f1e0c(0xa3)),
    _0x4420ce = _0x59295a[_0x3f1e0c(0xd6)](_0x3f1e0c(0xaa)),
    _0x3ff0be = document[_0x3f1e0c(0xea)]("#partnerPlaceholderOption");
  let _0x1d486f = 0x0;
  for (let _0x2ec296 = 0x0; _0x2ec296 < _0x4420ce["length"]; _0x2ec296++) {
    const _0x61f8b0 = (_0x4420ce[_0x2ec296][_0x3f1e0c(0x8c)] ||
      _0x4420ce[_0x2ec296][_0x3f1e0c(0xe7)])[_0x3f1e0c(0xa1)]();
    _0x12c61f === "" || _0x61f8b0["indexOf"](_0x12c61f) > -0x1
      ? ((_0x4420ce[_0x2ec296][_0x3f1e0c(0xa2)][_0x3f1e0c(0x92)] = ""),
        _0x1d486f++)
      : (_0x4420ce[_0x2ec296]["style"]["display"] = _0x3f1e0c(0x90));
  }
  if (_0x1d486f === 0x0)
    (_0x3ff0be["text"] = "Other"),
      (_0x59295a["size"] = 0x0),
      (_0x59295a["selectedIndex"] = 0x0);
  else {
    _0x3ff0be["text"] = "Select\x20Partner\x20Name";
    const _0x4454a2 = 0x5;
    (_0x59295a[_0x3f1e0c(0x8a)] =
      _0x1d486f > _0x4454a2 ? _0x4454a2 : _0x1d486f),
      _0x1d486f === 0x1 && (_0x59295a[_0x3f1e0c(0x8a)] = 0x2);
  }
}
document[_0x262a46(0xe8)](_0x262a46(0xce), function () {
  const _0x152432 = _0x262a46,
    _0x47f214 = document[_0x152432(0xea)](_0x152432(0xa3));
  _0x47f214[_0x152432(0xe8)](_0x152432(0xa0), function () {
    const _0x12657c = _0x152432,
      _0x33cdb8 = _0x47f214[_0x12657c(0x91)][_0x47f214["selectedIndex"]];
    _0x33cdb8 &&
      ((document[_0x12657c(0xea)]("#partnerNameSearch")[_0x12657c(0xab)] =
        _0x33cdb8[_0x12657c(0xc9)]),
      (_0x47f214[_0x12657c(0x8a)] = 0x0));
  });
}),
  document[_0x262a46(0xe8)](_0x262a46(0xce), function () {
    const _0x25e6c = _0x262a46,
      _0x2f0d18 = document[_0x25e6c(0xb8)]("partnerNameSearch");
    _0x2f0d18["addEventListener"](_0x25e6c(0xf2), filterPartnerNames);
  });
function updatePartnerSearchField() {
  const _0x4d5549 = _0x262a46,
    _0x4b1dc0 = document[_0x4d5549(0xea)]("#partnerName"),
    _0x8edbbf = _0x4b1dc0[_0x4d5549(0xab)];
  (document[_0x4d5549(0xb8)](_0x4d5549(0xbf))["value"] = _0x8edbbf),
    (_0x4b1dc0[_0x4d5549(0x8a)] = 0x0);
}
function validateFormData() {
  const _0x375e9b = _0x262a46,
    _0x376211 = document[_0x375e9b(0xb8)](_0x375e9b(0x109))[_0x375e9b(0xab)][
      _0x375e9b(0x108)
    ](),
    _0x295819 = document["getElementById"](_0x375e9b(0xbf))[_0x375e9b(0xab)][
      "trim"
    ](),
    _0x1d6cf2 = document[_0x375e9b(0xb8)](_0x375e9b(0x102)),
    _0x2a10ff =
      document["getElementById"]("employeeIdSearch")[_0x375e9b(0xab)][
        _0x375e9b(0x108)
      ]();
  if (_0x1d6cf2[_0x375e9b(0xf7)][_0x375e9b(0xad)] === 0x0)
    return alert("Please\x20add\x20a\x20file."), ![];
  if (_0x376211 === "" || _0x2a10ff === "" || _0x295819 === "") {
    alert(
      "Please\x20fill\x20the\x20required\x20fields(DC\x20Name,\x20Employee\x20ID,\x20and\x20Partner\x20Name)."
    );
    return ![];
    return ![];
  }
  const _0x461ac8 = Array["from"](
    document["querySelectorAll"](_0x375e9b(0x107))
  );
  for (const _0x172903 of _0x461ac8) {
    const _0x33fc3d = _0x172903[_0x375e9b(0xea)](_0x375e9b(0xd3))[
        _0x375e9b(0xab)
      ][_0x375e9b(0x108)](),
      _0x1431d2 = _0x172903["querySelector"](_0x375e9b(0xa8))[_0x375e9b(0xab)],
      _0xe52b96 =
        _0x172903[_0x375e9b(0xea)](_0x375e9b(0xbb))["style"]["display"] !==
        _0x375e9b(0x90)
          ? _0x172903[_0x375e9b(0xea)](_0x375e9b(0xbb))["value"][
              _0x375e9b(0x108)
            ]()
          : null,
      _0x270aa5 = _0x1431d2 !== _0x375e9b(0xb4) ? _0x1431d2 : _0xe52b96,
      _0x14006c =
        _0x172903["querySelector"](".quantityInput")["value"]["trim"](),
      _0x9a6da4 = _0x172903[_0x375e9b(0xea)](_0x375e9b(0xeb))[_0x375e9b(0xab)][
        _0x375e9b(0x108)
      ]();
    if (
      _0x33fc3d === "" ||
      _0x270aa5 === "" ||
      _0x270aa5 === null ||
      _0x14006c === "" ||
      _0x9a6da4 === ""
    )
      return alert(_0x375e9b(0xe2)), ![];
  }
  return !![];
}
function submitData() {
  const _0x4827a9 = _0x262a46,
    _0xf0f269 = document[_0x4827a9(0xd9)](_0x4827a9(0x107));
  if (_0xf0f269[_0x4827a9(0xad)] === 0x0) {
    alert(_0x4827a9(0x9f));
    return;
  }
  if (!validateFormData()) return;
  if (!confirm(_0x4827a9(0x9c))) return;
  try {
    const _0x122f01 = document[_0x4827a9(0xb8)](_0x4827a9(0x109))["value"];
    let _0x571a9e = document["getElementById"](_0x4827a9(0x9d))[
      _0x4827a9(0xab)
    ];
    const _0x260ee7 = document["getElementById"](_0x4827a9(0x9d))[
      _0x4827a9(0xab)
    ];
    _0x571a9e === _0x4827a9(0xdd) && (_0x571a9e = _0x260ee7);
    let _0x42f157 = document[_0x4827a9(0xb8)](_0x4827a9(0xbf))["value"];
    const _0x1b6f86 = document["getElementById"](_0x4827a9(0xbf))[
      _0x4827a9(0xab)
    ];
    _0x42f157 === _0x4827a9(0xdd) && (_0x42f157 = _0x1b6f86);
    const _0x29db7a = Array[_0x4827a9(0xba)](_0xf0f269)[_0x4827a9(0xb7)](
        (_0x3d4b68) => {
          const _0x13331e = _0x4827a9,
            _0xebbcea = _0x3d4b68[_0x13331e(0xea)](_0x13331e(0xd3))[
              _0x13331e(0xab)
            ]["trim"](),
            _0xec7a69 =
              _0x3d4b68[_0x13331e(0xea)](".itemSelect")[_0x13331e(0xab)],
            _0x21f7dd =
              _0x3d4b68[_0x13331e(0xea)](_0x13331e(0xbb))[_0x13331e(0xa2)][
                "display"
              ] !== _0x13331e(0x90)
                ? _0x3d4b68[_0x13331e(0xea)](_0x13331e(0xbb))[_0x13331e(0xab)]
                : null,
            _0x704122 = _0xec7a69 !== _0x13331e(0xb4) ? _0xec7a69 : _0x21f7dd;
          return {
            "DC\x20Name": _0x122f01,
            "emp\x20ID": _0x571a9e,
            "Clinic\x20Code": _0xebbcea,
            "Partner\x20Name": _0x1b6f86,
            Item: _0x704122,
            Quantity: _0x3d4b68[_0x13331e(0xea)](_0x13331e(0x104))[
              _0x13331e(0xab)
            ],
            Total_Price: _0x3d4b68[_0x13331e(0xea)](_0x13331e(0xeb))[
              _0x13331e(0xab)
            ],
            Sum: _0x3d4b68[_0x13331e(0xea)](".sumInput")[_0x13331e(0xab)],
          };
        }
      ),
      _0x443d39 = [
        "DC\x20Name",
        _0x4827a9(0xfc),
        _0x4827a9(0xbc),
        _0x4827a9(0x9b),
        _0x4827a9(0x8e),
        "Quantity",
        _0x4827a9(0xa5),
        "Sum",
      ],
      _0x537b2f = XLSX[_0x4827a9(0xf6)]["book_new"](),
      _0x149850 = "ItemsData",
      _0x2d230e = XLSX[_0x4827a9(0xf6)]["json_to_sheet"](_0x29db7a, {
        header: _0x443d39,
      });
    XLSX[_0x4827a9(0xf6)]["book_append_sheet"](_0x537b2f, _0x2d230e, _0x149850);
    const _0x213084 = XLSX["write"](_0x537b2f, {
        bookType: "xlsx",
        type: _0x4827a9(0xdf),
      }),
      _0x482d97 = new Blob([_0x213084], { type: _0x4827a9(0xcd) });
    saveAs(_0x482d97, _0x4827a9(0xaf));
  } catch (_0x2a16d1) {
    console[_0x4827a9(0xc8)]("Error:", _0x2a16d1), alert(_0x4827a9(0xc5));
  }
}
function duplicateItem(_0x54f14b) {
  const _0x5024fd = _0x262a46,
    _0x41c841 = _0x54f14b[_0x5024fd(0xcc)][_0x5024fd(0xb5)],
    _0x371df4 = _0x41c841[_0x5024fd(0xe3)](!![]);
  _0x371df4["querySelector"](_0x5024fd(0xd3))[_0x5024fd(0xab)] = "";
  const _0x425812 = _0x371df4[_0x5024fd(0xea)](_0x5024fd(0xa8)),
    _0xc76031 = _0x371df4["querySelector"](_0x5024fd(0xbb));
  _0x425812[_0x5024fd(0xab)] === _0x5024fd(0xb4) &&
    ((_0xc76031["style"][_0x5024fd(0x92)] = "none"),
    (_0xc76031[_0x5024fd(0xab)] = "")),
    _0x41c841[_0x5024fd(0xb5)][_0x5024fd(0x10a)](
      _0x371df4,
      _0x41c841[_0x5024fd(0x88)]
    ),
    _0x371df4[_0x5024fd(0xea)](_0x5024fd(0xb9))["addEventListener"](
      _0x5024fd(0x10c),
      deleteItem
    ),
    _0x371df4[_0x5024fd(0xea)](".duplicateItem")["addEventListener"](
      _0x5024fd(0x10c),
      duplicateItem
    ),
    updateTotalSum();
}
document[_0x262a46(0xe8)](_0x262a46(0xce), function () {
  const _0xbb0e99 = _0x262a46;
  document[_0xbb0e99(0xb8)](_0xbb0e99(0xc0))["addEventListener"](
    "click",
    addItem
  ),
    document["getElementById"](_0xbb0e99(0xbe))[_0xbb0e99(0xe8)](
      _0xbb0e99(0xa0),
      function () {
        const _0x45823f = _0xbb0e99,
          _0xc0c06e = document["getElementById"](_0x45823f(0xbe)),
          _0x5a8a8b = document["getElementById"](_0x45823f(0xf5));
        _0xc0c06e[_0x45823f(0xab)] === _0x45823f(0xb4)
          ? (_0x5a8a8b[_0x45823f(0xa2)][_0x45823f(0x92)] = "block")
          : (_0x5a8a8b[_0x45823f(0xa2)][_0x45823f(0x92)] = "none");
      }
    );
  function _0x59b24b() {
    const _0x5ba8d1 = _0xbb0e99,
      _0x1745b4 =
        document[_0x5ba8d1(0xb8)]("employeeIdSearch")[_0x5ba8d1(0xab)][
          _0x5ba8d1(0xa1)
        ](),
      _0x15ec58 = document[_0x5ba8d1(0xd9)](_0x5ba8d1(0xe0));
    _0x15ec58[_0x5ba8d1(0x94)]((_0x18f1e2) => {
      const _0x252e1f = _0x5ba8d1,
        _0x31d1fd = _0x18f1e2[_0x252e1f(0xc9)][_0x252e1f(0xa1)]();
      _0x18f1e2[_0x252e1f(0xa2)][_0x252e1f(0x92)] = _0x31d1fd[_0x252e1f(0xde)](
        _0x1745b4
      )
        ? _0x252e1f(0xb6)
        : _0x252e1f(0x90);
    });
  }
  document["getElementById"](_0xbb0e99(0x9d))[_0xbb0e99(0xe8)](
    _0xbb0e99(0xf2),
    _0x59b24b
  );
}),
  document["addEventListener"](_0x262a46(0xce), function () {
    const _0xc1ef3c = _0x262a46,
      _0x3bc0f7 = () => {
        const _0x297282 = _0x253a;
        document[_0x297282(0xd4)][_0x297282(0x9a)]["toggle"](_0x297282(0xd0));
      },
      _0x4859cf = document[_0xc1ef3c(0xb2)](_0xc1ef3c(0x97));
    (_0x4859cf[_0xc1ef3c(0xe7)] = _0xc1ef3c(0x95)),
      (_0x4859cf["className"] = _0xc1ef3c(0x89)),
      (_0x4859cf["id"] = _0xc1ef3c(0xfb)),
      _0x4859cf[_0xc1ef3c(0xe8)]("click", _0x3bc0f7),
      document[_0xc1ef3c(0xd4)][_0xc1ef3c(0xd7)](_0x4859cf);
  }),
  document[_0x262a46(0xe8)](_0x262a46(0xce), function () {
    const _0x5bd9a5 = _0x262a46,
      _0x585241 = {
        v: "1",
        ADMIN: "123456",
        SATVICK: "123456",
        SIDDHARTH: "123456",
        PRAKASH: _0x5bd9a5(0xf8),
        HIMANSHU: _0x5bd9a5(0xf8),
        RAVI: _0x5bd9a5(0xf8),
        DEBAL: "123456",
        AMBIKA: _0x5bd9a5(0xf8),
        NAVNEET: "123456",
        SAURAB: "123456",
        ABHISHEK: _0x5bd9a5(0xf8),
        SHAIRA: _0x5bd9a5(0xf8),
        Gauranga: "123456",
        suryakant: _0x5bd9a5(0xf8),
      },
      _0x45635e = document[_0x5bd9a5(0xb2)](_0x5bd9a5(0xf1));
    (_0x45635e["id"] = _0x5bd9a5(0xef)),
      (_0x45635e[_0x5bd9a5(0x8b)] = _0x5bd9a5(0xe1)),
      document[_0x5bd9a5(0xd4)][_0x5bd9a5(0xd7)](_0x45635e),
      _0x45635e[_0x5bd9a5(0xe8)]("submit", function (_0x212623) {
        const _0x2dbf61 = _0x5bd9a5;
        _0x212623[_0x2dbf61(0xd5)]();
        const _0x4c9079 = document[_0x2dbf61(0xb8)](_0x2dbf61(0xb0))[
            _0x2dbf61(0xab)
          ],
          _0x48d062 = document[_0x2dbf61(0xb8)](_0x2dbf61(0xcb))[
            _0x2dbf61(0xab)
          ];
        _0x585241[_0x4c9079] && _0x585241[_0x4c9079] === _0x48d062
          ? ((document[_0x2dbf61(0xb8)](_0x2dbf61(0xef))[_0x2dbf61(0xa2)][
              _0x2dbf61(0x92)
            ] = _0x2dbf61(0x90)),
            (document[_0x2dbf61(0xea)](".container")["style"]["display"] =
              "block"))
          : (document[_0x2dbf61(0xb8)](_0x2dbf61(0xe5))[_0x2dbf61(0xa2)][
              "display"
            ] = "block");
      }),
      (document[_0x5bd9a5(0xea)](_0x5bd9a5(0xb3))[_0x5bd9a5(0xa2)][
        _0x5bd9a5(0x92)
      ] = _0x5bd9a5(0x90)),
      console["log"](_0x5bd9a5(0x9e));
  }),
  document["addEventListener"](_0x262a46(0xce), function () {
    const _0x54c7ab = _0x262a46,
      _0x2e4efb = document["createElement"]("button");
    (_0x2e4efb[_0x54c7ab(0xe7)] = _0x54c7ab(0xfe)),
      (_0x2e4efb[_0x54c7ab(0xd8)] = _0x54c7ab(0xa9)),
      (_0x2e4efb["id"] = _0x54c7ab(0xc6)),
      _0x2e4efb[_0x54c7ab(0xe8)](_0x54c7ab(0x10c), _0x26515f),
      document[_0x54c7ab(0xd4)][_0x54c7ab(0xd7)](_0x2e4efb);
    const _0xc1ff4b = document[_0x54c7ab(0xb2)](_0x54c7ab(0x101));
    (_0xc1ff4b["id"] = _0x54c7ab(0xd2)),
      (_0xc1ff4b[_0x54c7ab(0xd8)] = "modal"),
      (_0xc1ff4b[_0x54c7ab(0x8b)] = _0x54c7ab(0xff)),
      document["body"][_0x54c7ab(0xd7)](_0xc1ff4b);
    function _0x26515f() {
      const _0x991627 = _0x54c7ab;
      _0xc1ff4b[_0x991627(0xa2)][_0x991627(0x92)] = "block";
    }
    function _0x5a71ec() {
      const _0x17bb5f = _0x54c7ab;
      _0xc1ff4b[_0x17bb5f(0xa2)]["display"] = _0x17bb5f(0x90);
    }
    _0xc1ff4b[_0x54c7ab(0xea)](".close-button")[_0x54c7ab(0xe8)](
      _0x54c7ab(0x10c),
      _0x5a71ec
    ),
      window["addEventListener"](_0x54c7ab(0x10c), function (_0x211976) {
        _0x211976["target"] === _0xc1ff4b && _0x5a71ec();
      });
  });
function clearForm() {
  const _0x4aa023 = _0x262a46;
  document[_0x4aa023(0xb8)](_0x4aa023(0xda))["reset"](),
    (document[_0x4aa023(0xb8)](_0x4aa023(0x105))[_0x4aa023(0x8b)] = "");
}
document["getElementById"](_0x262a46(0xed))["addEventListener"](
  "click",
  clearForm
);
function highlightEmptyFields() {
  const _0x2d95db = _0x262a46,
    _0x1a0a53 = document[_0x2d95db(0xd9)](_0x2d95db(0xae));
  let _0x344be6 = !![];
  return (
    _0x1a0a53[_0x2d95db(0x94)]((_0x3b112d) => {
      const _0xdddac = _0x2d95db;
      !_0x3b112d[_0xdddac(0xab)][_0xdddac(0x108)]()
        ? (_0x3b112d["classList"][_0xdddac(0xf0)](_0xdddac(0x10d)),
          (_0x344be6 = ![]))
        : _0x3b112d[_0xdddac(0x9a)]["remove"](_0xdddac(0x10d));
    }),
    _0x344be6
  );
}
function _0x253a(_0x79b230, _0xdfe98) {
  const _0x3d6a57 = _0x3d6a();
  return (
    (_0x253a = function (_0x253af4, _0x5895ad) {
      _0x253af4 = _0x253af4 - 0x88;
      let _0x2eed98 = _0x3d6a57[_0x253af4];
      return _0x2eed98;
    }),
    _0x253a(_0x79b230, _0xdfe98)
  );
}
document["getElementById"]("submit1")["addEventListener"](
  _0x262a46(0x10c),
  function (_0x3b9e1e) {
    const _0x37b08d = _0x262a46;
    !highlightEmptyFields() &&
      (_0x3b9e1e["preventDefault"](), alert(_0x37b08d(0xc2)));
  }
);
function calculateTotalSum() {
  const _0x438b1b = _0x262a46,
    _0xb868bb = document[_0x438b1b(0xd9)](_0x438b1b(0xee));
  let _0x568fc8 = 0x0;
  return (
    _0xb868bb[_0x438b1b(0x94)]((_0x2cd29d) => {
      const _0x22ee53 = _0x438b1b;
      _0x568fc8 += parseFloat(_0x2cd29d[_0x22ee53(0xab)]) || 0x0;
    }),
    _0x568fc8[_0x438b1b(0xca)](0x2)
  );
}
function updateTotalSum() {
  const _0x1d4d37 = _0x262a46,
    _0x2164b3 = calculateTotalSum();
  let _0x58dbb7 = document["getElementById"](_0x1d4d37(0xbd));
  !_0x58dbb7 &&
    ((_0x58dbb7 = document[_0x1d4d37(0xb2)](_0x1d4d37(0x101))),
    (_0x58dbb7["id"] = "totalSumDisplay"),
    (_0x58dbb7[_0x1d4d37(0xa2)][_0x1d4d37(0xc3)] = _0x1d4d37(0xa7)),
    (_0x58dbb7[_0x1d4d37(0xa2)][_0x1d4d37(0x93)] = _0x1d4d37(0x100)),
    document[_0x1d4d37(0xea)](_0x1d4d37(0xb3))[_0x1d4d37(0xd7)](_0x58dbb7)),
    (_0x58dbb7[_0x1d4d37(0x8c)] = _0x1d4d37(0xf3) + _0x2164b3);
}
