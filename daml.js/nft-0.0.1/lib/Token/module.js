"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Payment = require('../Payment/module');


exports.AcceptToken = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.TokenOffer = {
  templateId: '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:Token:TokenOffer',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, damlTypes.Party, damlTypes.Text).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, damlTypes.Party, damlTypes.Text).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, description: damlTypes.Text.decoder, userAdmin: damlTypes.Party.decoder, issued: damlTypes.Time.decoder, newOwner: damlTypes.Party.decoder, price: damlTypes.Numeric(10).decoder, lastPrice: damlTypes.Numeric(10).decoder, currency: damlTypes.Text.decoder, royaltyRate: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    owner: damlTypes.Party.encode(__typed__.owner),
    description: damlTypes.Text.encode(__typed__.description),
    userAdmin: damlTypes.Party.encode(__typed__.userAdmin),
    issued: damlTypes.Time.encode(__typed__.issued),
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
    price: damlTypes.Numeric(10).encode(__typed__.price),
    lastPrice: damlTypes.Numeric(10).encode(__typed__.lastPrice),
    currency: damlTypes.Text.encode(__typed__.currency),
    royaltyRate: damlTypes.Numeric(10).encode(__typed__.royaltyRate),
  };
}
,
  AcceptToken: {
    template: function () { return exports.TokenOffer; },
    choiceName: 'AcceptToken',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptToken.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptToken.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(exports.Token), damlTypes.ContractId(Payment.Payable), damlTypes.Optional(damlTypes.ContractId(Payment.Payable))).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(exports.Token), damlTypes.ContractId(Payment.Payable), damlTypes.Optional(damlTypes.ContractId(Payment.Payable))).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.TokenOffer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.TokenOffer);



exports.Offer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newOwner: damlTypes.Party.decoder, price: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    newOwner: damlTypes.Party.encode(__typed__.newOwner),
    price: damlTypes.Numeric(10).encode(__typed__.price),
  };
}
,
};



exports.Token = {
  templateId: '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:Token:Token',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, description: damlTypes.Text.decoder, userAdmin: damlTypes.Party.decoder, issued: damlTypes.Time.decoder, lastPrice: damlTypes.Numeric(10).decoder, currency: damlTypes.Text.decoder, royaltyRate: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    owner: damlTypes.Party.encode(__typed__.owner),
    description: damlTypes.Text.encode(__typed__.description),
    userAdmin: damlTypes.Party.encode(__typed__.userAdmin),
    issued: damlTypes.Time.encode(__typed__.issued),
    lastPrice: damlTypes.Numeric(10).encode(__typed__.lastPrice),
    currency: damlTypes.Text.encode(__typed__.currency),
    royaltyRate: damlTypes.Numeric(10).encode(__typed__.royaltyRate),
  };
}
,
  Offer: {
    template: function () { return exports.Token; },
    choiceName: 'Offer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Offer.decoder; }),
    argumentEncode: function (__typed__) { return exports.Offer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.TokenOffer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.TokenOffer).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Token; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Token);

