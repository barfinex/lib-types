import { Detector, DetectorEventType } from "./detector.interface";
import { Connector } from "./connector.interface";
import { AccountEvent } from "./account.interface";
import { ConnectorType, MarketType } from "./connector.interface";
import { Order } from "./order.interface";
import { OrderBook } from "./orderbook.interface";
import { SymbolPrice, Symbol } from "./symbol.interface";
import { Trade } from "./trade.interface";
export declare enum SubscriptionType {
    PROVIDER_MARKETDATA_TRADE = "PROVIDER_MARKETDATA_TRADE",
    PROVIDER_MARKETDATA_ORDERBOOK = "PROVIDER_MARKETDATA_ORDERBOOK",
    PROVIDER_MARKETDATA_CANDLE = "PROVIDER_MARKETDATA_CANDLE",
    PROVIDER_ACCOUNT_EVENT = "PROVIDER_ACCOUNT_EVENT",
    PROVIDER_ORDER_CREATE = "PROVIDER_ORDER_CREATE",
    PROVIDER_ORDER_CLOSE = "PROVIDER_ORDER_CLOSE",
    PROVIDER_SYMBOLS = "PROVIDER_SYMBOLS",
    PROVIDER_SYMBOL_PRICES = "PROVIDER_SYMBOL_PRICES",
    INSPECTOR_EVENT = "INSPECTOR_EVENT",
    DETECTOR_EVENT = "DETECTOR_EVENT",
    ADVISOR_EVENT = "ADVISOR_EVENT"
}
export interface SubscriptionValue {
    value: AccountEvent | Order | OrderBook | Trade | Symbol[] | SymbolPrice[] | {
        eventType: DetectorEventType;
        payload: any;
    };
    options: {
        key?: string;
        connectorType?: ConnectorType;
        marketType?: MarketType;
    };
}
export interface Subscription {
    type: SubscriptionType;
    symbols?: Symbol[];
    connector?: Connector;
    detector?: Detector;
    updateMoment?: number;
    active: boolean;
}
//# sourceMappingURL=subscription.interface.d.ts.map