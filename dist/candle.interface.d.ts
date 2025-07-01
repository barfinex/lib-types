import { TimeFrame } from "./common.interface";
export interface Candle {
    o: number;
    c: number;
    h: number;
    l: number;
    v: number;
    time: number;
    interval?: TimeFrame;
    symbol: string;
}
export type CandleHandler = (candle: Candle) => Promise<void>;
//# sourceMappingURL=candle.interface.d.ts.map