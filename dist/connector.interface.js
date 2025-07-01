"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectorType = exports.MarketType = void 0;
var MarketType;
(function (MarketType) {
    MarketType["spot"] = "spot";
    MarketType["futures"] = "futures";
    MarketType["margin"] = "margin";
})(MarketType || (exports.MarketType = MarketType = {}));
var ConnectorType;
(function (ConnectorType) {
    ConnectorType["dex"] = "dex";
    ConnectorType["alpaca"] = "alpaca";
    ConnectorType["binance"] = "binance";
    ConnectorType["tinkoff"] = "tinkoff";
    ConnectorType["testnetBinanceFutures"] = "testnetBinanceFutures";
})(ConnectorType || (exports.ConnectorType = ConnectorType = {}));
//# sourceMappingURL=connector.interface.js.map