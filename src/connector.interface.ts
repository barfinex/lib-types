import {
    Asset,
    CandleHandler,
    OrderBookHandler,
    Order,
    Subscription,
    TimeFrame,
    TradeHandler,
    AccountEventHandler,
    Position,
    Account,
    Symbol,
    SymbolPrice
} from '.';


/**
 * Interface representing a trading connector that provides methods for interaction with a trading platform.
 */
export interface DataSource {
    /**
     * Subscribes to candle updates for a specific time frame.
     * @param options - Object containing the market type, symbols to subscribe to, and time frame.
     * @param handler - Callback function to handle incoming candle data.
     * @returns A Promise resolving to an unsubscribe function.
     */
    subscribeToСandles(
        options: { marketType: MarketType, symbols: Symbol[], interval: TimeFrame },
        handler: CandleHandler
    ): Promise<() => void>

    /**
     * Subscribes to the order book for specific symbols.
     * @param options - Object containing the market type and symbols to subscribe to.
     * @param handler - Callback function to handle incoming order book data.
     * @returns A Promise resolving to an unsubscribe function.
     */
    subscribeToOrderBook(
        options: { marketType: MarketType, symbols: Symbol[] },
        handler: OrderBookHandler
    ): Promise<() => void>

    /**
     * Subscribes to account-related events.
     * @param options - Object containing the market type.
     * @param handler - Callback function to handle incoming account events.
     * @returns A Promise resolving to an unsubscribe function.
     */
    subscribeToAccount(
        options: { marketType: MarketType },
        handler: AccountEventHandler
    ): Promise<() => void>

    /**
     * Subscribes to trade data for specific symbols.
     * @param options - Object containing the market type and symbols to subscribe to.
     * @param handler - Callback function to handle incoming trade data.
     * @returns A Promise resolving to an unsubscribe function.
     */
    subscribeToTrade(
        options: { marketType: MarketType, symbols: Symbol[] },
        handler: TradeHandler
    ): Promise<() => void>

    /**
     * Subscribes to updates for available symbols in a specific market type.
     * @param options - Object containing the market type.
     * @param handler - Callback function that receives the market type and an array of symbols.
     * @returns A Promise resolving to an unsubscribe function.
     */
    subscribeToSymbols(
        options: { marketType: MarketType },
        handler: (marketType: MarketType, symbols: Symbol[]) => Promise<void>
    ): Promise<() => void>;

    /**
     * Subscribes to real-time price updates for symbols in a specific market type.
     * @param options - Object containing the market type.
     * @param handler - Callback function that receives the market type and an array of symbol prices.
     * @returns A Promise resolving to an unsubscribe function.
     */
    subscribeToSymbolPrices(
        options: { marketType: MarketType },
        handler: (marketType: MarketType, symbolPrices: SymbolPrice[]) => void
    ): Promise<() => void>;

    /**
     * Subscribes to multiple data streams for specified symbols and time frames.
     * @param marketType - The market type (e.g., spot, futures).
     * @param symbols - Array of symbols to subscribe to.
     * @param intervals - Array of time frames for the subscription.
     * @returns A Promise that resolves when the subscription is active.
     */
    subscribe(
        marketType: MarketType,
        symbols: Symbol[],
        intervals: TimeFrame[]
    ): Promise<void>;

    /**
     * Unsubscribes from all active subscriptions.
     * @returns A Promise that resolves when all subscriptions are successfully unsubscribed.
     */
    unsubscribe(): Promise<void>;

    /**
     * Updates the subscription collection by adding or removing symbols and intervals.
     * @param marketType - The market type (e.g., spot, futures).
     * @param symbols - Array of symbols to update in the subscription.
     * @param intervals - Array of time frames to update in the subscription.
     * @returns A Promise that resolves when the subscription collection is updated.
     */
    updateSubscribeCollection(
        marketType: MarketType,
        symbols: Symbol[],
        intervals: TimeFrame[]
    ): Promise<void>;

    /**
     * Places a new order.
     * @param order - The order details, such as symbol, side, type, and quantity.
     * @returns A Promise resolving to the placed order with updated details.
     */
    openOrder(order: Order): Promise<Order>;

    /**
     * Closes an existing order by its ID.
     * @param options - Object containing the order ID, symbol, and market type.
     * @returns A Promise resolving to the closed order.
     */
    closeOrder(
        options: { id: string, symbol: Symbol, marketType: MarketType }
    ): Promise<Order>;

    /**
     * Closes all open orders for a specific symbol and market type.
     * @param options - Object containing the symbol and market type.
     * @returns A Promise that resolves when all orders are closed.
     */
    closeAllOrders(
        options: { symbol: Symbol, marketType: MarketType }
    ): Promise<void>;

    /**
     * Retrieves a list of open orders for a specific symbol and market type.
     * @param options - Object containing the optional symbol and market type.
     * @returns A Promise resolving to an array of open orders.
     */
    getOpenOrders(
        options: { symbol?: Symbol, marketType: MarketType }
    ): Promise<Order[]>;

    /**
     * Retrieves the current prices for specific symbols in a market type.
     * @param marketType - The market type (e.g., spot, futures).
     * @param symbols - Array of symbols to retrieve prices for.
     * @returns A Promise resolving to an object mapping symbols to their price and timestamp.
     */
    getPrices(
        marketType: MarketType,
        symbols: Symbol[]
    ): Promise<{ [index: string]: { value: number, moment: number } }>;

    /**
     * Retrieves information about assets and positions for a specific market type.
     * @param marketType - The market type (e.g., spot, futures).
     * @returns A Promise resolving to an object containing assets and positions.
     */
    getAssetsInfo(
        marketType: MarketType
    ): Promise<{ assets: Asset[], positions: Position[] }>;

    /**
     * Retrieves information about tradable symbols for a specific connector and market type.
     * @param connectorType - The type of the connector (e.g., binance, tinkoff).
     * @param marketType - The market type (e.g., spot, futures).
     * @returns A Promise resolving to an array of symbols.
     */
    getSymbolsInfo(
        connectorType: ConnectorType,
        marketType: MarketType
    ): Promise<Symbol[]>;

    /**
     * Retrieves account information for a specific market type.
     * @param marketType - The market type (e.g., spot, futures).
     * @returns A Promise resolving to the account information.
     */
    getAccountInfo(marketType: MarketType): Promise<Account>;

    /**
     * Changes the leverage for a specific symbol in the futures market.
     * @param symbol - The trading symbol (e.g., BTC/USD).
     * @param leverage - The desired leverage value.
     * @returns A Promise resolving to an object containing the updated symbol and leverage.
     */
    changeLeverage(
        symbol: Symbol,
        leverage: number
    ): Promise<Symbol>;


}





/**
 * Interface representing a trading market and its associated commissions.
 */
export interface ConnectorMarket {
    /**
     * The type of the market (e.g., spot, futures).
     */
    marketType: MarketType;

    /**
     * Array of tradable symbols for the connector.
     */
    symbols: Symbol[]

    /**
     * Commission rates for the market.
     */
    commissions?: MarketCommissions;
}

/**
 * Interface for market commission rates.
 */
export interface MarketCommissions {
    /**
     * Maker commission rate as a percentage.
     */
    makerPercent: number;

    /**
     * Taker commission rate as a percentage.
     */
    takerPercent: number;
}

/**
 * Interface for API configuration of a connector.
 */
// export interface ConnectorApiUrl {
//     /**
//      * The base URL of the provider's API.
//      */
//     providerRestApiUrl: string;

//     /**
//      * The type of the connector (e.g., binance, tinkoff).
//      */
//     connectorType: string;

//     /**
//      * Markets available for the connector.
//      */
//     markets: ConnectorMarket[];
// }




/**
 * Interface representing configuration options for a connector.
 */
export interface Connector {
    /**
     * The type of the connector.
     */
    connectorType: ConnectorType

    key?: string
    secret?: string

    /**
     * Markets available for the connector.
     */
    markets: ConnectorMarket[]

    /**
     * The base currency for the connector.
     */
    currency?: string

    /**
     * Supported time frames for the connector.
     */
    intervals?: TimeFrame[]

    /**
     * Indicator settings for the connector.
     */
    indicators?: any

    /**
     * Subscriptions active for the connector.
     */
    subscriptions?: Subscription[]

    // /**
    //  * Number of orders currently active.
    //  */
    // ordersCount?: number

    // /**
    //  * Number of events processed by the connector.
    //  */
    // eventsCount?: number

    isActive?: boolean

    assets?: Asset[]
    positions?: Position[]
    orders?: Order[]
}

/**
 * Interface for symbol-specific subscriptions.
 */
export interface SymbolSubscription {
    /**
     * Function to unsubscribe from the order book.
     */
    unsubscribeOrderBook?: any;

    /**
     * Function to unsubscribe from trade updates.
     */
    unsubscribeTrade?: any;
}

/**
 * Enum for different market types.
 */
export enum MarketType {
    /**
     * Spot market.
     */
    spot = 'spot',

    /**
     * Futures market.
     */
    futures = 'futures',

    /**
     * Margin trading market.
     */
    margin = 'margin',
}

/**
 * Enum for different connector types.
 */
export enum ConnectorType {
    /**
     * Decentralized exchange (DEX).
     */
    dex = 'dex',

    /**
     * Alpaca trading platform.
     */
    alpaca = 'alpaca',

    /**
     * Binance trading platform.
     */
    binance = 'binance',

    /**
     * Tinkoff trading platform.
     */
    tinkoff = 'tinkoff',

    /**
     * Binance Futures testnet environment.
     */
    testnetBinanceFutures = 'testnetBinanceFutures',
}

/**
 * Interface for provider-specific information.
 */
export interface ProviderInfo {
    /**
     * The type of the connector.
     */
    connectorType: ConnectorType;

    /**
     * Array of assets available for the connector.
     */
    assets?: Asset[];
}

/**
 * Interface for a transaction manager.
 */
export interface TransactionInterface {
    /**
     * Adds an order to the transaction.
     * @param order - Pending order prepared for execution.
     * @returns A Promise resolving to the added order.
     */
    add(order: Order): Promise<Order>;

    /**
     * Executes the transaction.
     * @param executeMethod - Function to execute the transaction.
     * @returns A Promise resolving to an array of executed orders.
     */
    execute(executeMethod: (order: Order) => Promise<Order>): Promise<Order[]>;
}

