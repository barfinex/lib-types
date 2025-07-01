import { MarketType } from "./connector.interface";
import { Symbol } from ".";
export interface OrderBook {
    bids: DepthOrder[];
    asks: DepthOrder[];
    symbol: Symbol;
    time: number;
}
export interface DepthOrder {
    price: number;
    qty: number;
}
export type OrderBookHandler = (marketType: MarketType, orderbook: OrderBook) => void;
//# sourceMappingURL=orderbook.interface.d.ts.map