import { MarketType } from "./connector.interface";
import { Symbol } from "."

/**
 * Interface representing an order book for a trading pair.
 */
export interface OrderBook {
    /**
     * List of bid orders (buy orders) with their price and quantity.
     */
    bids: DepthOrder[];
    /**
     * List of ask orders (sell orders) with their price and quantity.
     */
    asks: DepthOrder[];
    /**
     * Symbol or ticker of the trading pair (e.g., BTC/USD).
     */
    symbol: Symbol;
    /**
     * Timestamp when the order book snapshot was captured (Unix time).
     */
    time: number;
}


/**
 * Interface representing a single depth order in the order book.
 */
export interface DepthOrder {
    /**
     * Price level for the order.
     */
    price: number;
    /**
     * Quantity available at the price level.
     */
    volume: number;
}

/**
 * Type representing a handler function for processing an order book update.
 *
 * @param marketType - The type of market (e.g., spot, futures).
 * @param orderbook - The order book data to process.
 */
export type OrderBookHandler = (marketType: MarketType, orderbook: OrderBook) => void;
