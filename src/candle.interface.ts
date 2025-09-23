import { MarketType } from ".";
import { TimeFrame } from "./common.interface";
import { Symbol } from "./symbol.interface";

/**
 * Raw-структура свечи (для хранения и REST).
 */
export interface CandleRaw {
    o: number;
    c: number;
    h: number;
    l: number;
    v: number;
    time: number;
    interval?: TimeFrame;
    symbol: Symbol;
}

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
    raw: CandleRaw;
}

/**
 * Handler для обработки domain-свечей.
 */
export type CandleHandler = (marketType: MarketType, candle: Candle) => Promise<void>;
