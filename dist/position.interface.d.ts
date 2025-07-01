import { OrderSide } from "./common.interface";
import { MarketType, ConnectorType } from "./connector.interface";
import { Symbol } from ".";
export interface Position {
    connectorType: ConnectorType;
    marketType: MarketType;
    symbol: Symbol;
    quantity: number;
    entryPrice: number;
    lastPrice?: number;
    initialMargin: number;
    leverage: number;
    side: OrderSide;
    isBreakeven?: boolean;
}
//# sourceMappingURL=position.interface.d.ts.map