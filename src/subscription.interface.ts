import { Detector, DetectorEventType } from "./detector.interface";
import { Connector } from "./connector.interface";
// import { TimeFrame } from "./common.interface";
// import { Symbol } from "."
import { AccountEvent } from "./account.interface";
import { ConnectorType, MarketType } from "./connector.interface";
import { Order } from "./order.interface";
import { OrderBook } from "./orderbook.interface";
import { SymbolPrice, Symbol } from "./symbol.interface";
import { Trade } from "./trade.interface";
import { Candle, TimeFrame } from ".";

/**
 * Enum representing the types of subscriptions available in the system.
 */
export enum SubscriptionType {
    /** Subscription for market trade data. */
    PROVIDER_MARKETDATA_TRADE = 'PROVIDER_MARKETDATA_TRADE',
    /** Subscription for market order book updates. */
    PROVIDER_MARKETDATA_ORDERBOOK = 'PROVIDER_MARKETDATA_ORDERBOOK',
    /** Subscription for market candle data (e.g., OHLC data). */
    PROVIDER_MARKETDATA_CANDLE = 'PROVIDER_MARKETDATA_CANDLE',
    /** Subscription for user account events (e.g., balance updates). */
    PROVIDER_ACCOUNT_EVENT = 'PROVIDER_ACCOUNT_EVENT',
    /** Subscription for order updates. */
    PROVIDER_ORDER_CREATE = 'PROVIDER_ORDER_CREATE',
    /** Subscription for order updates. */
    PROVIDER_ORDER_CLOSE = 'PROVIDER_ORDER_CLOSE',
    /** Subscription for symbol price updates. */
    PROVIDER_SYMBOLS = 'PROVIDER_SYMBOLS',
    PROVIDER_SYMBOL_PRICES = 'PROVIDER_SYMBOL_PRICES',
    INSPECTOR_EVENT = 'INSPECTOR_EVENT',
    DETECTOR_EVENT = "DETECTOR_EVENT",
    ADVISOR_EVENT = "ADVISOR_EVENT",
}

export interface SubscriptionValue {
    value: AccountEvent | Order | OrderBook | Trade | Symbol[] | SymbolPrice | Candle |
    { eventType: DetectorEventType, payload: any, symbols?: Symbol[]; };
    options: {
        key?: string;
        connectorType?: ConnectorType;
        marketType?: MarketType;
        updateMoment: number;
    };
}

/**
 * Interface representing a subscription configuration.
 */
export interface Subscription {
    /**
     * The type of subscription (e.g., market data, account events).
     */
    type: SubscriptionType;
    /**
     * The symbol or trading pair for the subscription (optional).
     * Example: BTC/USD, AAPL.
     */
    symbols?: Symbol[];
    /**
     * Options related to the connector for this subscription (optional).
     */
    connector?: Connector;
    /**
     * Options related to the detector for this subscription (optional).
     */
    detector?: Detector;
    /**
     * The timestamp (Unix time) of the last update for this subscription.
     */
    updateMoment?: number;
    /**
     * Whether the subscription is active.
     */
    active: boolean;
    intervals?: TimeFrame[];
}

// export interface SubscriptionCandles {
//     maxHistoryDepthBars: number; // Maximum historical bars to fetch
//     symbols: Symbol[]; // Symbols to monitor for candlesticks
//     intervals: TimeFrame[];         // Time intervals for candlestick data (e.g., ['1m', '1h'])
// };

// // Subscriptions settings for the detector
// export interface Subscription {
//     accounts: boolean;             // Whether to subscribe to account updates
//     trades: {                      // Subscription settings for trades
//         symbols: Symbol[]; // Symbols to monitor for trades
//     };
//     allSymbols: boolean;           // Subscribe to updates for all symbols
//     allSymbolPrices: boolean;      // Subscribe to price updates for all symbols
//     orderBooks: {                  // Subscription settings for order books
//         symbols: Symbol[]; // Symbols to monitor in order books
//     };
//     inspectorRegulations: boolean; // Subscribe to regulatory updates
//     candles: SubscriptionCandles // Subscription settings for candlestick data
// }


