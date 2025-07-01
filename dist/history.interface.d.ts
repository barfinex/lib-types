import { Candle, MarketType, TimeFrame, ConnectorType, Symbol } from './';
export interface History {
    connectorType: ConnectorType;
    marketType: MarketType;
    symbols: Symbol[];
    days: number;
    interval: TimeFrame;
    gapDays: number;
    noProgress?: boolean;
}
export type HistoryRequest = (from: number, to: number, ticker: string, interval: TimeFrame) => Promise<Candle[]>;
//# sourceMappingURL=history.interface.d.ts.map