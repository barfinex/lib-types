import { ConnectorType, MarketType } from ".";
export interface Symbol {
    name: string;
    leverage?: number;
    quantity?: number;
    baseAsset?: string;
    quoteAsset?: string;
    status?: string;
    minPrice?: string;
    maxPrice?: string;
    minQuantity?: string;
    stepSize?: string;
    tickSize?: string;
    isSpotTradingAllowed?: boolean;
    isMarginTradingAllowed?: boolean;
    connectorType?: ConnectorType;
    marketType?: MarketType;
}
export interface SymbolPrice {
    e: string;
    E: number;
    s: string;
    p: string;
    P: string;
    o: string;
    h: string;
    l: string;
    c: string;
    w: string;
    v: string;
    q: string;
    O: number;
    C: number;
    F: number;
    L: number;
    n: number;
}
//# sourceMappingURL=symbol.interface.d.ts.map