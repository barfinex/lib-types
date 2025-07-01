import { MarketType } from "./connector.interface";
import { Symbol } from ".";
export declare enum TradeType {
    'BUY' = "BUY",
    'SELL' = "SELL"
}
export interface Trade {
    time: number;
    symbol: Symbol;
    price: number;
    volume: number;
    type: TradeType;
}
export type TradeHandler = (marketType: MarketType, trade: Trade) => void;
//# sourceMappingURL=trade.interface.d.ts.map