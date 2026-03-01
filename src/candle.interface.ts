import { MarketType } from ".";
import { TimeFrame } from "./common.interface";
import { Symbol } from "./symbol.interface";

/**
 * Domain-модель свечи (для стратегий).
 */
export interface Candle {
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    time: number;
    interval?: TimeFrame;
    symbol: Symbol;
    /** Optional raw payload from exchange (e.g. CCXT OHLCV tuple). */
    raw?: unknown;
}

/**
 * Handler для обработки domain-свечей.
 */
export type CandleHandler = (marketType: MarketType, candle: Candle) => Promise<void>;
