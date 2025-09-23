import { MarketType } from "./connector.interface";
import { Symbol } from "."

/**
 * Enum representing the type of trade (buy or sell).
 */
export enum TradeSide {
    /** Long position (buy). */
    LONG = "LONG",

    /** Short position (sell). */
    SHORT = "SHORT",
}

/**
 * Interface representing a single trade.
 */
export interface Trade {
    /**
     * Timestamp of the trade (Unix time).
     */
    time: number;
    /**
     * Symbol or trading pair for the trade (e.g., BTC/USD).
     */
    symbol: Symbol;
    /**
     * Price at which the trade occurred.
     */
    price: number;
    /**
     * Volume of the asset traded.
     */
    volume: number;
    /**
     * Type of the trade (buy or sell).
     */
    side: TradeSide;
}

/**
 * Type representing a handler function for processing a trade.
 *
 * @param marketType - Type of the market (e.g., spot, futures).
 * @param trade - The trade data to process.
 */
export type TradeHandler = (marketType: MarketType, trade: Trade) => void;
