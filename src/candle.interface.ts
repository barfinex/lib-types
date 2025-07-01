import { TimeFrame } from "./common.interface";

/**
 * Interface representing a single candle in a financial chart.
 */
export interface Candle {
    /**
     * `o`: The opening price of the candle.
     */
    o: number;

    /**
     * `c`: The closing price of the candle.
     */
    c: number;

    /**
     * `h`: The highest price of the candle.
     */
    h: number;

    /**
     * `l`: The lowest price of the candle.
     */
    l: number;

    /**
     * `v`: The trading volume during the candle's time frame.
     */
    v: number;

    /**
     * `time`: The timestamp of the candle (e.g., Unix time).
     */
    time: number;

    /**
     * `interval`: The time frame or interval for the candle (e.g., 1m, 1h, 1d).
     * Optional, since it might not always be provided with the candle data.
     */
    interval?: TimeFrame;

    /**
     * `symbol`: The trading pair or instrument this candle represents (e.g., BTC/USD, AAPL).
     */
    symbol: string;
}

/**
 * Type representing a handler for processing candles.
 * A function that accepts a `Candle` object and returns a Promise.
 */
export type CandleHandler = (candle: Candle) => Promise<void>;
