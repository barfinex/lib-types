import { OrderSide, OrderType } from "./common.interface";
import { ConnectorType, MarketType } from "./connector.interface";
import { Symbol } from "."

/**
 * Interface representing a trading order.
 */
export interface Order {
    /**
     * Symbol or ticker of the trading pair (e.g., BTC/USD).
     */
    symbol?: Symbol;
    /**
     * Internal ID of the order.
     */
    id?: string;
    /**
     * External ID of the order from the trading platform or connector.
     */
    externalId?: string;
    /**
     * Side of the order (e.g., buy or sell).
     */
    side?: OrderSide;
    /**
     * Type of the order (e.g., market, limit).
     */
    type?: OrderType;
    /**
     * Price of the order, if applicable.
     */
    price?: number;
    /**
     * Time when the order was created (Unix timestamp).
     */
    time?: number;
    /**
     * Time when the order was last updated (Unix timestamp).
     */
    updateTime?: number;
    /**
     * Total quantity for the order.
     */
    quantity?: number;
    /**
     * Quantity of the order that has been executed.
     */
    quantityExecuted?: number;
    /**
     * Indicates whether the order is placed in a sandbox (test) environment.
     */
    useSandbox: boolean;
    /**
     * Price at which the order will be closed (e.g., for stop-loss or take-profit orders).
     */
    priceClose?: number;
    /**
     * Type of connector used for the order (e.g., Binance, Tinkoff).
     */
    connectorType: ConnectorType;
    /**
     * Type of market for the order (e.g., spot, futures).
     */
    marketType: MarketType;
    /**
     * Source of the order, detailing its origin.
     */
    source: OrderSource;
    /**
     * Leverage used for the order, if applicable.
     */
    leverage?: number;
}

/**
 * Interface representing the source of an order.
 */
export interface OrderSource {
    /**
     * Type of the source (e.g., detector, inspector, exchange).
     */
    type: OrderSourceType;
    /**
     * Unique key identifying the source.
     */
    key: string;
    /**
     * Base API URL of the source system.
     */
    restApiUrl: string;
}

/**
 * Enum representing the types of order sources.
 */
export enum OrderSourceType {
    /** Orders originating from a detector system. */
    detector = 'detector',
    /** Orders originating from an inspector system. */
    inspector = 'inspector',
    /** Orders originating directly from an provider. */
    provider = 'provider',
    /** Orders originating from an advisor system. */
    advisor = 'advisor'
}

/**
 * Interface representing orders for risk management.
 */
export interface RiskManagementOrders {
    /**
     * Take-profit order to secure profits at a specific price.
     */
    takeProfit: Order;
    /**
     * Stop-loss order to limit potential losses.
     */
    stopLoss: Order;
}

/**
 * Interface representing permissible quantities for orders.
 */
export interface OrderPermissibleQuantity {
    /**
     * Indicates whether the quantity is acceptable.
     */
    acceptable: boolean;
    /**
     * Minimum acceptable quantity for the order.
     */
    acceptableQuantityMin: number;
    /**
     * Maximum acceptable quantity for the order.
     */
    acceptableQuantityMax: number;
    /**
     * Default percentage of the total balance to use for entry quantity.
     */
    entryQuantityDefaultPercent: number;
    /**
     * Default balance to use for entry quantity.
     */
    entryBalanceDefault: number;
    /**
     * Maximum balance allowed for entry quantity.
     */
    entryBalanceMax: number;
    /**
     * Default percentage of permissible quantity for the order.
     */
    permissibleQuantityDefaultPercent: number;
}
