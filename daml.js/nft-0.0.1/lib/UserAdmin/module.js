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
var Token = require('../Token/module');


exports.RejectOwnerRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GrantOwnerRights = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.OwnerRequest = {
  templateId: '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:OwnerRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({userAdmin: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    userAdmin: damlTypes.Party.encode(__typed__.userAdmin),
    owner: damlTypes.Party.encode(__typed__.owner),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  GrantOwnerRights: {
    template: function () { return exports.OwnerRequest; },
    choiceName: 'GrantOwnerRights',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GrantOwnerRights.decoder; }),
    argumentEncode: function (__typed__) { return exports.GrantOwnerRights.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Owner).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Owner).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.OwnerRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RejectOwnerRequest: {
    template: function () { return exports.OwnerRequest; },
    choiceName: 'RejectOwnerRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectOwnerRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectOwnerRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.OwnerRequest);



exports.RevokeOwner = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.AcceptTokenByKey = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({issuer: damlTypes.Party.decoder, currentOwner: damlTypes.Party.decoder, description: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    issuer: damlTypes.Party.encode(__typed__.issuer),
    currentOwner: damlTypes.Party.encode(__typed__.currentOwner),
    description: damlTypes.Text.encode(__typed__.description),
  };
}
,
};



exports.AcceptTokenAsNewOwner = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({offerId: damlTypes.ContractId(Token.TokenOffer).decoder, }); }),
  encode: function (__typed__) {
  return {
    offerId: damlTypes.ContractId(Token.TokenOffer).encode(__typed__.offerId),
  };
}
,
};



exports.Owner = {
  templateId: '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:Owner',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({userAdmin: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    userAdmin: damlTypes.Party.encode(__typed__.userAdmin),
    owner: damlTypes.Party.encode(__typed__.owner),
  };
}
,
  AcceptTokenAsNewOwner: {
    template: function () { return exports.Owner; },
    choiceName: 'AcceptTokenAsNewOwner',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptTokenAsNewOwner.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptTokenAsNewOwner.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Token.Token), damlTypes.ContractId(Payment.Payable), damlTypes.Optional(damlTypes.ContractId(Payment.Payable))).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Token.Token), damlTypes.ContractId(Payment.Payable), damlTypes.Optional(damlTypes.ContractId(Payment.Payable))).encode(__typed__); },
  },
  AcceptTokenByKey: {
    template: function () { return exports.Owner; },
    choiceName: 'AcceptTokenByKey',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptTokenByKey.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptTokenByKey.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Token.Token), damlTypes.ContractId(Payment.Payable), damlTypes.Optional(damlTypes.ContractId(Payment.Payable))).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.ContractId(Token.Token), damlTypes.ContractId(Payment.Payable), damlTypes.Optional(damlTypes.ContractId(Payment.Payable))).encode(__typed__); },
  },
  RevokeOwner: {
    template: function () { return exports.Owner; },
    choiceName: 'RevokeOwner',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RevokeOwner.decoder; }),
    argumentEncode: function (__typed__) { return exports.RevokeOwner.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Owner; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Owner);



exports.RejectIssuerRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.GrantIssuerRights = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.IssuerRequest = {
  templateId: '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:IssuerRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({userAdmin: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    userAdmin: damlTypes.Party.encode(__typed__.userAdmin),
    issuer: damlTypes.Party.encode(__typed__.issuer),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  GrantIssuerRights: {
    template: function () { return exports.IssuerRequest; },
    choiceName: 'GrantIssuerRights',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.GrantIssuerRights.decoder; }),
    argumentEncode: function (__typed__) { return exports.GrantIssuerRights.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Issuer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Issuer).encode(__typed__); },
  },
  RejectIssuerRequest: {
    template: function () { return exports.IssuerRequest; },
    choiceName: 'RejectIssuerRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectIssuerRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectIssuerRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.IssuerRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.IssuerRequest);



exports.RevokeIssuer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.MintToken = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({description: damlTypes.Text.decoder, initialPrice: damlTypes.Numeric(10).decoder, currency: damlTypes.Text.decoder, royaltyRate: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    description: damlTypes.Text.encode(__typed__.description),
    initialPrice: damlTypes.Numeric(10).encode(__typed__.initialPrice),
    currency: damlTypes.Text.encode(__typed__.currency),
    royaltyRate: damlTypes.Numeric(10).encode(__typed__.royaltyRate),
  };
}
,
};



exports.Issuer = {
  templateId: '0cd55546ada74bbd775bf4eae903046e3bac8f8d2a12f6d32d8d088d4288adca:UserAdmin:Issuer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({userAdmin: damlTypes.Party.decoder, issuer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    userAdmin: damlTypes.Party.encode(__typed__.userAdmin),
    issuer: damlTypes.Party.encode(__typed__.issuer),
  };
}
,
  MintToken: {
    template: function () { return exports.Issuer; },
    choiceName: 'MintToken',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.MintToken.decoder; }),
    argumentEncode: function (__typed__) { return exports.MintToken.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Token.Token).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Token.Token).encode(__typed__); },
  },
  RevokeIssuer: {
    template: function () { return exports.Issuer; },
    choiceName: 'RevokeIssuer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RevokeIssuer.decoder; }),
    argumentEncode: function (__typed__) { return exports.RevokeIssuer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Issuer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Issuer);

