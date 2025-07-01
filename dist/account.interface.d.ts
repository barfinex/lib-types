import { MarketType, Order, Position, ConnectorType, Symbol } from ".";
export interface Asset {
    connectorType: ConnectorType;
    marketType: MarketType;
    symbol: Symbol;
    walletBalance: number;
    availableBalance: number;
    price?: [
        {
            currency: string;
            value?: number;
        }
    ];
}
export interface Account {
    connectorType: ConnectorType;
    marketType: MarketType;
    assets: Asset[];
    positions: Position[];
    orders: Order[];
    isActive: boolean;
    symbols: Symbol[];
    dailyProfit?: {
        value: number;
        startTime: number;
        endTime: number;
        details: AccountDailyProfitDetail[];
    };
}
export interface AccountDailyProfitDetail {
    symbol: Symbol;
    incomeType: string;
    income: string;
    asset: string;
    info: string;
    time: number;
}
export interface AccountCommision {
    connectorType: ConnectorType;
    marketType: MarketType;
    maker: number;
    taker: number;
}
export interface AccountEvent {
    eventType: string;
    eventTime: number;
    options: any;
}
export type AccountHandler = (account: Account) => void;
export type AccountEventHandler = (marketType: MarketType, accountEvent: AccountEvent) => void;
//# sourceMappingURL=account.interface.d.ts.map