"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderType = exports.OrderSide = exports.OrderEnv = exports.WorkingEnv = exports.TimeFrame = exports.IndicatorType = exports.CandleActionStatus = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["trace"] = "trace";
    LogLevel["debug"] = "debug";
    LogLevel["info"] = "info";
    LogLevel["warn"] = "warn";
    LogLevel["error"] = "error";
    LogLevel["fatal"] = "fatal";
    LogLevel["silent"] = "silent";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
var CandleActionStatus;
(function (CandleActionStatus) {
    CandleActionStatus["create"] = "create";
    CandleActionStatus["update"] = "update";
    CandleActionStatus["skipp"] = "skipp";
})(CandleActionStatus || (exports.CandleActionStatus = CandleActionStatus = {}));
var IndicatorType;
(function (IndicatorType) {
    IndicatorType["line"] = "line";
    IndicatorType["circle"] = "circle";
    IndicatorType["lineSet"] = "lineSet";
    IndicatorType["volumeprofile"] = "volumeprofile";
})(IndicatorType || (exports.IndicatorType = IndicatorType = {}));
var TimeFrame;
(function (TimeFrame) {
    TimeFrame["min1"] = "min1";
    TimeFrame["min3"] = "min3";
    TimeFrame["min5"] = "min5";
    TimeFrame["min15"] = "min15";
    TimeFrame["min30"] = "min30";
    TimeFrame["h1"] = "h1";
    TimeFrame["h2"] = "h2";
    TimeFrame["h4"] = "h4";
    TimeFrame["day"] = "day";
    TimeFrame["week"] = "week";
    TimeFrame["month"] = "month";
})(TimeFrame || (exports.TimeFrame = TimeFrame = {}));
var WorkingEnv;
(function (WorkingEnv) {
    WorkingEnv["genetic"] = "genetic";
    WorkingEnv["tester"] = "tester";
    WorkingEnv["production"] = "production";
})(WorkingEnv || (exports.WorkingEnv = WorkingEnv = {}));
var OrderEnv;
(function (OrderEnv) {
    OrderEnv["Prod"] = "Prod";
    OrderEnv["Test"] = "Test";
})(OrderEnv || (exports.OrderEnv = OrderEnv = {}));
var OrderSide;
(function (OrderSide) {
    OrderSide["BUY"] = "BUY";
    OrderSide["SELL"] = "SELL";
})(OrderSide || (exports.OrderSide = OrderSide = {}));
var OrderType;
(function (OrderType) {
    OrderType["LIMIT"] = "LIMIT";
    OrderType["LIMIT_MAKER"] = "LIMIT_MAKER";
    OrderType["MARKET"] = "MARKET";
    OrderType["STOP"] = "STOP";
    OrderType["STOP_MARKET"] = "STOP_MARKET";
    OrderType["STOP_LOSS_LIMIT"] = "STOP_LOSS_LIMIT";
    OrderType["TAKE_PROFIT_LIMIT"] = "TAKE_PROFIT_LIMIT";
    OrderType["TAKE_PROFIT_MARKET"] = "TAKE_PROFIT_MARKET";
    OrderType["TRAILING_STOP_MARKET"] = "TRAILING_STOP_MARKET";
    OrderType["TAKE_PROFIT"] = "TAKE_PROFIT";
})(OrderType || (exports.OrderType = OrderType = {}));
//# sourceMappingURL=common.interface.js.map