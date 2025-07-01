import { ConnectorType, MarketType } from ".";




export interface Symbol {
    name: string
    leverage?: number
    quantity?: number
    /**
     * Base currency in the trading pair (e.g., BTC in BTCUSDT).
     */
    baseAsset?: string;
    /**
     * Quote currency in the trading pair (e.g., USDT in BTCUSDT).
     */
    quoteAsset?: string;
    /**
     * Status of the symbol (e.g., TRADING, INACTIVE).
     */
    status?: string;
    /**
     * Minimum allowable price for the symbol (optional).
     */
    minPrice?: string;
    /**
     * Maximum allowable price for the symbol (optional).
     */
    maxPrice?: string;
    /**
     * Minimum quantity allowed for trading this symbol (optional).
     */
    minQuantity?: string;
    /**
     * Step size for quantity changes (optional).
     */
    stepSize?: string;
    /**
     * Step size for price changes (optional).
     */
    tickSize?: string;
    /**
     * Indicates if spot trading is allowed for this symbol (optional).
     */
    isSpotTradingAllowed?: boolean;
    /**
     * Indicates if margin trading is allowed for this symbol (optional).
     */
    isMarginTradingAllowed?: boolean;
    /**
     * Type of connector used for this symbol (e.g., Binance, Tinkoff).
     */
    connectorType?: ConnectorType;
    /**
     * Type of market for this symbol (e.g., Spot, Futures).
     */
    marketType?: MarketType;
}


// /**
//  * Interface representing a trading symbol and its properties.
//  */
// export interface Symbol {
//     /**
//      * Base currency in the trading pair (e.g., BTC in BTCUSDT).
//      */
//     baseAsset: string;
//     /**
//      * Quote currency in the trading pair (e.g., USDT in BTCUSDT).
//      */
//     quoteAsset: string;
//     /**
//      * Full symbol of the trading pair (e.g., BTCUSDT).
//      */
//     symbol: Symbol;
//     /**
//      * Status of the symbol (e.g., TRADING, INACTIVE).
//      */
//     status: string;
//     /**
//      * Minimum allowable price for the symbol (optional).
//      */
//     minPrice?: string;
//     /**
//      * Maximum allowable price for the symbol (optional).
//      */
//     maxPrice?: string;
//     /**
//      * Minimum quantity allowed for trading this symbol (optional).
//      */
//     minQuantity?: string;
//     /**
//      * Step size for quantity changes (optional).
//      */
//     stepSize?: string;
//     /**
//      * Step size for price changes (optional).
//      */
//     tickSize?: string;
//     /**
//      * Indicates if spot trading is allowed for this symbol (optional).
//      */
//     isSpotTradingAllowed?: boolean;
//     /**
//      * Indicates if margin trading is allowed for this symbol (optional).
//      */
//     isMarginTradingAllowed?: boolean;
//     /**
//      * Type of connector used for this symbol (e.g., Binance, Tinkoff).
//      */
//     connectorType: ConnectorType;
//     /**
//      * Type of market for this symbol (e.g., Spot, Futures).
//      */
//     marketType: MarketType;
// }

/**
 * Interface representing price statistics for a symbol.
 */
export interface SymbolPrice {
    /**
     * Event type (e.g., "24hrTicker").
     */
    e: string;
    /**
     * Event time as a Unix timestamp.
     */
    E: number;
    /**
     * Symbol of the trading pair (e.g., BTCUSDT).
     */
    s: string;
    /**
     * Price change in the period.
     */
    p: string;
    /**
     * Percentage price change in the period.
     */
    P: string;
    /**
     * Opening price of the symbol.
     */
    o: string;
    /**
     * Highest price during the period.
     */
    h: string;
    /**
     * Lowest price during the period.
     */
    l: string;
    /**
     * Last price during the period.
     */
    c: string;
    /**
     * Weighted average price during the period.
     */
    w: string;
    /**
     * Total traded volume of the base asset.
     */
    v: string;
    /**
     * Total traded volume of the quote asset.
     */
    q: string;
    /**
     * Statistics open time as a Unix timestamp.
     */
    O: number;
    /**
     * Statistics close time as a Unix timestamp.
     */
    C: number;
    /**
     * First trade ID in the period.
     */
    F: number;
    /**
     * Last trade ID in the period.
     */
    L: number;
    /**
     * Total number of trades during the period.
     */
    n: number;
}
