import { Asset, CandleHandler, OrderBookHandler, Order, Subscription, TimeFrame, TradeHandler, AccountEventHandler, Position, Account, Symbol, SymbolPrice } from '.';
export interface DataSource {
    subscribeToСandles(options: {
        marketType: MarketType;
        symbols: Symbol[];
        interval: TimeFrame;
    }, handler: CandleHandler): Promise<() => void>;
    subscribeToOrderBook(options: {
        marketType: MarketType;
        symbols: Symbol[];
    }, handler: OrderBookHandler): Promise<() => void>;
    subscribeToAccount(options: {
        marketType: MarketType;
    }, handler: AccountEventHandler): Promise<() => void>;
    subscribeToTrade(options: {
        marketType: MarketType;
        symbols: Symbol[];
    }, handler: TradeHandler): Promise<() => void>;
    subscribeToSymbols(options: {
        marketType: MarketType;
    }, handler: (marketType: MarketType, symbols: Symbol[]) => Promise<void>): Promise<() => void>;
    subscribeToSymbolPrices(options: {
        marketType: MarketType;
    }, handler: (marketType: MarketType, symbolPrices: SymbolPrice[]) => void): Promise<() => void>;
    subscribe(marketType: MarketType, symbols: Symbol[], intervals: TimeFrame[]): Promise<void>;
    unsubscribe(): Promise<void>;
    updateSubscribeCollection(marketType: MarketType, symbols: Symbol[], intervals: TimeFrame[]): Promise<void>;
    openOrder(order: Order): Promise<Order>;
    closeOrder(options: {
        id: string;
        symbol: Symbol;
        marketType: MarketType;
    }): Promise<Order>;
    closeAllOrders(options: {
        symbol: Symbol;
        marketType: MarketType;
    }): Promise<void>;
    getOpenOrders(options: {
        symbol?: Symbol;
        marketType: MarketType;
    }): Promise<Order[]>;
    getPrices(marketType: MarketType, symbols: Symbol[]): Promise<{
        [index: string]: {
            value: number;
            moment: number;
        };
    }>;
    getAssetsInfo(marketType: MarketType): Promise<{
        assets: Asset[];
        positions: Position[];
    }>;
    getSymbolsInfo(connectorType: ConnectorType, marketType: MarketType): Promise<Symbol[]>;
    getAccountInfo(marketType: MarketType): Promise<Account>;
    changeLeverage(symbol: Symbol, leverage: number): Promise<Symbol>;
}
export interface ConnectorMarket {
    marketType: MarketType;
    symbols: Symbol[];
    commissions?: MarketCommissions;
}
export interface MarketCommissions {
    makerPercent: number;
    takerPercent: number;
}
export interface Connector {
    connectorType: ConnectorType;
    key?: string;
    secret?: string;
    markets: ConnectorMarket[];
    currency?: string;
    intervals?: TimeFrame[];
    indicators?: any;
    subscriptions?: Subscription[];
    isActive?: boolean;
    assets?: Asset[];
    positions?: Position[];
    orders?: Order[];
}
export interface SymbolSubscription {
    unsubscribeOrderBook?: any;
    unsubscribeTrade?: any;
}
export declare enum MarketType {
    spot = "spot",
    futures = "futures",
    margin = "margin"
}
export declare enum ConnectorType {
    dex = "dex",
    alpaca = "alpaca",
    binance = "binance",
    tinkoff = "tinkoff",
    testnetBinanceFutures = "testnetBinanceFutures"
}
export interface ProviderInfo {
    connectorType: ConnectorType;
    assets?: Asset[];
}
export interface TransactionInterface {
    add(order: Order): Promise<Order>;
    execute(executeMethod: (order: Order) => Promise<Order>): Promise<Order[]>;
}
//# sourceMappingURL=connector.interface.d.ts.map