import { Candle } from './candle.interface';
import { Detector, DetectorPlugin } from './detector.interface';
import { Order } from './order.interface';
import { OrderBook } from './orderbook.interface';
import { Account } from './account.interface';
import { Trade } from './trade.interface';
import { InspectorRegulation } from './inspector-regulation.interface';
import { Symbol } from ".";
export interface PluginDriverInterface {
    register(plugins: PluginInterface[]): void;
    getPublicAPI(): DetectorPlugin[];
    asyncReduce<T extends AsyncHooks>(hookName: T, ...arg: Parameters<AsyncHookArgumentsMap[T]>): Promise<void>;
    reduce<T extends SyncHooks>(hookName: T, ...arg: Parameters<SyncHookArgumentsMap[T]>): void;
    getSnapshot(): Record<string, Record<string, unknown>>;
    hydrateSnapshot(pluginsData: Record<string, Record<string, unknown>>): void;
}
export type Plugin = (api: PluginDriverInterface) => void;
export declare enum PluginHook {
    onTrade = "onTrade",
    onAfterTrade = "onAfterTrade",
    onAccountUpdate = "onAccountUpdate",
    onAfterAccountUpdate = "onAfterAccountUpdate",
    onCandleUpdate = "onCandleUpdate",
    onAfterCandleUpdate = "onAfterCandleUpdate",
    onCandleOpen = "onCandleOpen",
    onAfterCandleOpen = "onAfterCandleOpen",
    onCandleClose = "onCandleClose",
    onAfterCandleClose = "onAfterCandleClose",
    onInit = "onInit",
    onStart = "onStart",
    onDispose = "onDispose",
    onOrderBookUpdate = "onOrderBookUpdate",
    onAfterOrderBookUpdate = "onAfterOrderBookUpdate",
    onOrderOpen = "onOrderOpen",
    onAfterOrderOpen = "onAfterOrderOpen",
    onOrderClose = "onOrderClose",
    onAfterOrderClose = "onAfterOrderClose",
    onInspectorRegulation = "onInspectorRegulation",
    onAfterInspectorRegulation = "onAfterInspectorRegulation"
}
export type SyncHooks = PluginHook.onInit;
export type AsyncHooks = PluginHook.onInit | PluginHook.onTrade | PluginHook.onAfterTrade | PluginHook.onAccountUpdate | PluginHook.onAfterAccountUpdate | PluginHook.onStart | PluginHook.onDispose | PluginHook.onCandleUpdate | PluginHook.onAfterCandleUpdate | PluginHook.onCandleOpen | PluginHook.onAfterCandleOpen | PluginHook.onCandleClose | PluginHook.onAfterCandleClose | PluginHook.onOrderBookUpdate | PluginHook.onAfterOrderBookUpdate | PluginHook.onOrderOpen | PluginHook.onAfterOrderOpen | PluginHook.onOrderClose | PluginHook.onAfterOrderClose | PluginHook.onInspectorRegulation | PluginHook.onAfterInspectorRegulation;
export type SyncHookArgumentsMap = {
    [PluginHook.onInit]: (arg: PluginContext) => void;
};
export type AsyncHookArgumentsMap = {
    [PluginHook.onInit]: (arg: PluginContext) => Promise<void>;
    [PluginHook.onTrade]: (arg: PluginContext, trade: Trade) => Promise<void>;
    [PluginHook.onAfterTrade]: (arg: PluginContext, trade: Trade) => Promise<void>;
    [PluginHook.onAccountUpdate]: (arg: PluginContext, account: Account) => Promise<void>;
    [PluginHook.onAfterAccountUpdate]: (arg: PluginContext, account: Account) => Promise<void>;
    [PluginHook.onStart]: (arg: PluginContext) => Promise<void>;
    [PluginHook.onDispose]: (arg: PluginContext) => Promise<void>;
    [PluginHook.onCandleUpdate]: (arg: PluginContext, candle: Candle) => Promise<void>;
    [PluginHook.onAfterCandleUpdate]: (arg: PluginContext, candle: Candle) => Promise<void>;
    [PluginHook.onCandleOpen]: (arg: PluginContext, candle: Candle) => Promise<void>;
    [PluginHook.onAfterCandleOpen]: (arg: PluginContext, candle: Candle) => Promise<void>;
    [PluginHook.onCandleClose]: (arg: PluginContext, candle: Candle) => Promise<void>;
    [PluginHook.onAfterCandleClose]: (arg: PluginContext, candle: Candle) => Promise<void>;
    [PluginHook.onOrderBookUpdate]: (arg: PluginContext, orderBook: OrderBook) => Promise<void>;
    [PluginHook.onAfterOrderBookUpdate]: (arg: PluginContext, orderBook: OrderBook) => Promise<void>;
    [PluginHook.onOrderOpen]: (arg: PluginContext, order: Order) => Promise<void>;
    [PluginHook.onAfterOrderOpen]: (arg: PluginContext, order: Order) => Promise<void>;
    [PluginHook.onOrderClose]: (arg: PluginContext, order: Order) => Promise<void>;
    [PluginHook.onAfterOrderClose]: (arg: PluginContext, order: Order) => Promise<void>;
    [PluginHook.onInspectorRegulation]: (arg: PluginContext, inspectorRegulation: InspectorRegulation) => Promise<void>;
    [PluginHook.onAfterInspectorRegulation]: (arg: PluginContext, inspectorRegulation: InspectorRegulation) => Promise<void>;
};
export interface PluginInterface {
    name: string;
    api: unknown;
    [PluginHook.onInit]: SyncHookArgumentsMap[PluginHook.onInit];
    [PluginHook.onStart]: AsyncHookArgumentsMap[PluginHook.onStart];
    [PluginHook.onDispose]: AsyncHookArgumentsMap[PluginHook.onDispose];
    [PluginHook.onCandleUpdate]: AsyncHookArgumentsMap[PluginHook.onCandleUpdate];
    [PluginHook.onAfterCandleUpdate]: AsyncHookArgumentsMap[PluginHook.onAfterCandleUpdate];
    [PluginHook.onCandleOpen]: AsyncHookArgumentsMap[PluginHook.onCandleOpen];
    [PluginHook.onAfterCandleOpen]: AsyncHookArgumentsMap[PluginHook.onAfterCandleOpen];
    [PluginHook.onCandleClose]: AsyncHookArgumentsMap[PluginHook.onCandleClose];
    [PluginHook.onAfterCandleClose]: AsyncHookArgumentsMap[PluginHook.onAfterCandleClose];
    [PluginHook.onAccountUpdate]: AsyncHookArgumentsMap[PluginHook.onAccountUpdate];
    [PluginHook.onAfterAccountUpdate]: AsyncHookArgumentsMap[PluginHook.onAfterAccountUpdate];
    [PluginHook.onOrderBookUpdate]: AsyncHookArgumentsMap[PluginHook.onOrderBookUpdate];
    [PluginHook.onAfterOrderBookUpdate]: AsyncHookArgumentsMap[PluginHook.onAfterOrderBookUpdate];
    [PluginHook.onTrade]: AsyncHookArgumentsMap[PluginHook.onTrade];
    [PluginHook.onAfterTrade]: AsyncHookArgumentsMap[PluginHook.onAfterTrade];
    [PluginHook.onOrderOpen]: AsyncHookArgumentsMap[PluginHook.onOrderOpen];
    [PluginHook.onAfterOrderOpen]: AsyncHookArgumentsMap[PluginHook.onAfterOrderOpen];
    [PluginHook.onOrderClose]: AsyncHookArgumentsMap[PluginHook.onOrderClose];
    [PluginHook.onAfterOrderClose]: AsyncHookArgumentsMap[PluginHook.onAfterOrderClose];
}
export interface PluginContext {
    findPlugin<T extends PluginInterface>(name: string): T;
    detectorContext: {
        name: string;
        options: Detector;
        account: Account;
        candles: any;
        orders: Array<Order>;
    };
    tradingOperation: {
        closeAll(symbol: Symbol): Promise<Order[]>;
    };
}
//# sourceMappingURL=plugin.interface.d.ts.map