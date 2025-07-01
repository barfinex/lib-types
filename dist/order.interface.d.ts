import { OrderSide, OrderType } from "./common.interface";
import { ConnectorType, MarketType } from "./connector.interface";
import { Symbol } from ".";
export interface Order {
    symbol?: Symbol;
    id?: string;
    externalId?: string;
    side?: OrderSide;
    type?: OrderType;
    price?: number;
    time?: number;
    updateTime?: number;
    quantity?: number;
    quantityExecuted?: number;
    useSandbox: boolean;
    priceClose?: number;
    connectorType: ConnectorType;
    marketType: MarketType;
    source: OrderSource;
    leverage?: number;
}
export interface OrderSource {
    type: OrderSourceType;
    key: string;
    restApiUrl: string;
}
export declare enum OrderSourceType {
    detector = "detector",
    inspector = "inspector",
    provider = "provider",
    advisor = "advisor"
}
export interface RiskManagementOrders {
    takeProfit: Order;
    stopLoss: Order;
}
export interface OrderPermissibleQuantity {
    acceptable: boolean;
    acceptableQuantityMin: number;
    acceptableQuantityMax: number;
    entryQuantityDefaultPercent: number;
    entryBalanceDefault: number;
    entryBalanceMax: number;
    permissibleQuantityDefaultPercent: number;
}
//# sourceMappingURL=order.interface.d.ts.map