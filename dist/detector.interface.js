"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetectorEventGroups = exports.DetectorEventType = void 0;
var DetectorEventType;
(function (DetectorEventType) {
    DetectorEventType["SERVICE_STARTED"] = "SERVICE_STARTED";
    DetectorEventType["SERVICE_STOPPED"] = "SERVICE_STOPPED";
    DetectorEventType["DETECTOR_INITIALIZED"] = "DETECTOR_INITIALIZED";
    DetectorEventType["DETECTOR_STARTED"] = "DETECTOR_STARTED";
    DetectorEventType["DETECTOR_STOPPED"] = "DETECTOR_STOPPED";
    DetectorEventType["ERROR_OCCURRED"] = "ERROR_OCCURRED";
    DetectorEventType["RESTART_ATTEMPT"] = "RESTART_ATTEMPT";
    DetectorEventType["TICK_RECEIVED"] = "TICK_RECEIVED";
    DetectorEventType["CANDLE_UPDATED"] = "CANDLE_UPDATED";
    DetectorEventType["ORDERBOOK_UPDATED"] = "ORDERBOOK_UPDATED";
    DetectorEventType["MARKET_SNAPSHOT"] = "MARKET_SNAPSHOT";
    DetectorEventType["CONNECTION_LOST"] = "CONNECTION_LOST";
    DetectorEventType["CONNECTION_RESTORED"] = "CONNECTION_RESTORED";
    DetectorEventType["ENTRY_SIGNAL"] = "ENTRY_SIGNAL";
    DetectorEventType["EXIT_SIGNAL"] = "EXIT_SIGNAL";
    DetectorEventType["NO_ACTION"] = "NO_ACTION";
    DetectorEventType["CONDITION_EVALUATED"] = "CONDITION_EVALUATED";
    DetectorEventType["ORDER_PLACED"] = "ORDER_PLACED";
    DetectorEventType["ORDER_FILLED"] = "ORDER_FILLED";
    DetectorEventType["ORDER_PARTIALLY_FILLED"] = "ORDER_PARTIALLY_FILLED";
    DetectorEventType["ORDER_CANCELED"] = "ORDER_CANCELED";
    DetectorEventType["ORDER_REJECTED"] = "ORDER_REJECTED";
    DetectorEventType["POSITION_OPENED"] = "POSITION_OPENED";
    DetectorEventType["POSITION_CLOSED"] = "POSITION_CLOSED";
    DetectorEventType["RISK_TRIGGERED"] = "RISK_TRIGGERED";
    DetectorEventType["PNL_UPDATED"] = "PNL_UPDATED";
    DetectorEventType["BALANCE_UPDATED"] = "BALANCE_UPDATED";
    DetectorEventType["LEVERAGE_SET"] = "LEVERAGE_SET";
    DetectorEventType["RISK_ADJUSTED"] = "RISK_ADJUSTED";
    DetectorEventType["HEALTH_CHECK_FAILED"] = "HEALTH_CHECK_FAILED";
    DetectorEventType["WEBHOOK_RECEIVED"] = "WEBHOOK_RECEIVED";
    DetectorEventType["CONFIG_UPDATED"] = "CONFIG_UPDATED";
    DetectorEventType["MOCK_EVENT"] = "MOCK_EVENT";
})(DetectorEventType || (exports.DetectorEventType = DetectorEventType = {}));
exports.DetectorEventGroups = {
    system: [
        DetectorEventType.SERVICE_STARTED,
        DetectorEventType.SERVICE_STOPPED,
        DetectorEventType.DETECTOR_INITIALIZED,
        DetectorEventType.DETECTOR_STARTED,
        DetectorEventType.DETECTOR_STOPPED,
        DetectorEventType.ERROR_OCCURRED,
        DetectorEventType.RESTART_ATTEMPT
    ],
    market_data: [
        DetectorEventType.TICK_RECEIVED,
        DetectorEventType.CANDLE_UPDATED,
        DetectorEventType.ORDERBOOK_UPDATED,
        DetectorEventType.MARKET_SNAPSHOT,
        DetectorEventType.CONNECTION_LOST,
        DetectorEventType.CONNECTION_RESTORED
    ],
    signals: [
        DetectorEventType.ENTRY_SIGNAL,
        DetectorEventType.EXIT_SIGNAL,
        DetectorEventType.NO_ACTION,
        DetectorEventType.CONDITION_EVALUATED
    ],
    orders: [
        DetectorEventType.ORDER_PLACED,
        DetectorEventType.ORDER_FILLED,
        DetectorEventType.ORDER_PARTIALLY_FILLED,
        DetectorEventType.ORDER_CANCELED,
        DetectorEventType.ORDER_REJECTED,
        DetectorEventType.POSITION_OPENED,
        DetectorEventType.POSITION_CLOSED,
        DetectorEventType.RISK_TRIGGERED
    ],
    metrics: [
        DetectorEventType.PNL_UPDATED,
        DetectorEventType.BALANCE_UPDATED,
        DetectorEventType.LEVERAGE_SET,
        DetectorEventType.RISK_ADJUSTED
    ],
    infrastructure: [
        DetectorEventType.HEALTH_CHECK_FAILED,
        DetectorEventType.WEBHOOK_RECEIVED,
        DetectorEventType.CONFIG_UPDATED,
        DetectorEventType.MOCK_EVENT
    ]
};
//# sourceMappingURL=detector.interface.js.map