import { MarketType, Order, Position, ConnectorType, Symbol } from ".";

/**
 * Interface representing an individual asset within an account.
 */
export interface Asset {
    /**
     * The type of connector associated with the asset (e.g., `binance`, `tinkoff`).
     */
    connectorType: ConnectorType;



    /**
     * The market type of the asset (e.g., `spot`, `futures`).
     */
    marketType: MarketType;

    /**
     * The symbol for the asset (e.g., `BTC/USD`, `AAPL`).
     */
    symbol: Symbol;

    /**
     * The total wallet balance for this asset.
     */
    walletBalance: number;

    /**
     * The available balance that can be used for trading.
     */
    availableBalance: number;

    /**
     * Optional price information for the asset, in different currencies.
     */
    price?: [
        {
            /**
             * The currency in which the price is represented.
             */
            currency: string;

            /**
             * The value of the asset in the specified currency.
             */
            value?: number;
        }
    ];
}

/**
 * Interface representing a trading account.
 */
export interface Account {
    /**
     * The type of connector associated with the account.
     */
    connectorType: ConnectorType;

    /**
     * The market type of the account.
     */
    marketType: MarketType;

    /**
     * The list of assets within this account.
     */
    assets: Asset[];

    /**
     * The list of positions currently held in the account.
     */
    positions: Position[];

    /**
     * The list of orders associated with this account.
     */
    orders: Order[];

    /**
     * Indicates whether the account is active for trading.
     */
    isActive: boolean;

    /**
     * The list of tradable symbols in this account, along with their leverage.
     */
    symbols: Symbol[];

    /**
     * Optional daily profit information for the account.
     */
    dailyProfit?: {
        /**
         * Total profit value for the day.
         */
        value: number;

        /**
         * Start time for the daily profit calculation (Unix timestamp).
         */
        startTime: number;

        /**
         * End time for the daily profit calculation (Unix timestamp).
         */
        endTime: number;

        /**
         * Detailed breakdown of daily profits for individual trades or symbols.
         */
        details: AccountDailyProfitDetail[];
    };

    // /**
    //  * Default leverage applied to this account.
    //  */
    // leverage: number;
}

export interface AccountDailyProfitDetail {
    /**
     * The trading symbol associated with the income.
     */
    symbol: Symbol;

    /**
     * The type of income (e.g., `realized`, `unrealized`).
     */
    incomeType: string;

    /**
     * The income amount.
     */
    income: string;

    /**
     * The asset associated with the income.
     */
    asset: string;

    /**
     * Additional information about the income event.
     */
    info: string;

    /**
     * The time of the income event (Unix timestamp).
     */
    time: number;
}



/**
 * Interface representing commission details for an account.
 */
export interface AccountCommision {
    /**
     * The type of connector for the account.
     */
    connectorType: ConnectorType;

    /**
     * The market type for the account.
     */
    marketType: MarketType;

    /**
     * The maker commission rate (as a percentage).
     */
    maker: number;

    /**
     * The taker commission rate (as a percentage).
     */
    taker: number;
}

/**
 * Interface representing an event that occurred in an account.
 */
export interface AccountEvent {
    /**
     * The type of the event (e.g., `orderCreated`, `positionClosed`).
     */
    eventType: string;

    /**
     * The time the event occurred (Unix timestamp).
     */
    eventTime: number;

    /**
     * Additional options or metadata associated with the event.
     */
    options: any;
}

/**
 * Type representing a handler function for processing accounts.
 * Accepts an `Account` object and performs an action.
 */
export type AccountHandler = (account: Account) => void;

/**
 * Type representing a handler function for processing account events.
 * Accepts a `MarketType` and an `AccountEvent`, then performs an action.
 */
export type AccountEventHandler = (marketType: MarketType, accountEvent: AccountEvent) => void;
