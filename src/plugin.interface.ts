import { Candle } from './candle.interface';
import { Detector, DetectorPlugin } from './detector.interface';
import { Order } from './order.interface';
import { OrderBook } from './orderbook.interface';
import { Account } from './account.interface';
import { Trade } from './trade.interface';
import { InspectorRegulation } from './inspector-regulation.interface';
import { Symbol } from "."

/**
 * Interface for the plugin driver, managing plugin lifecycle and hooks.
 * This serves as the main entry point for integrating various plugins.
 */
export interface PluginDriverInterface {
    /**
     * Registers an array of plugins with the driver.
     *
     * @param plugins - Array of plugins to register.
     * This ensures that all plugins are initialized and available for execution.
     */
    register(plugins: PluginInterface[]): void;

    /**
     * Retrieves the public API exposed by plugins.
     *
     * @returns A record containing public APIs.
     * Useful for external modules that need access to plugin functionalities.
     */
    getPublicAPI(): DetectorPlugin[];

    /**
     * Executes an asynchronous hook with the provided arguments.
     *
     * @param hookName - Name of the hook to execute.
     * @param arg - Arguments for the hook function.
     * This allows plugins to perform async operations like network requests or data processing.
     */
    asyncReduce<T extends AsyncHooks>(
        hookName: T,
        ...arg: Parameters<AsyncHookArgumentsMap[T]>
    ): Promise<void>;

    /**
     * Executes a synchronous hook with the provided arguments.
     *
     * @param hookName - Name of the hook to execute.
     * @param arg - Arguments for the hook function.
     * This ensures immediate execution of critical plugin functionalities.
     */
    reduce<T extends SyncHooks>(
        hookName: T,
        ...arg: Parameters<SyncHookArgumentsMap[T]>
    ): void;

    /**
     * Gets a snapshot of the current state of all plugins.
     *
     * @returns A record containing plugin data snapshots.
     * Can be used to restore the plugin states at a later time.
     */
    getSnapshot(): Record<string, Record<string, unknown>>;

    /**
     * Restores plugin states from a snapshot.
     *
     * @param pluginsData - Snapshot data to hydrate plugins.
     */
    hydrateSnapshot(pluginsData: Record<string, Record<string, unknown>>): void;
}

/**
 * Type for defining a plugin with access to the plugin API.
 */
export type Plugin = (api: PluginDriverInterface) => void;

/**
 * Enum representing various plugin hook events.
 */
export enum PluginHook {
    onTrade = 'onTrade',
    onAfterTrade = 'onAfterTrade',
    onAccountUpdate = 'onAccountUpdate',
    onAfterAccountUpdate = 'onAfterAccountUpdate',
    onCandleUpdate = 'onCandleUpdate',
    onAfterCandleUpdate = 'onAfterCandleUpdate',
    onCandleOpen = 'onCandleOpen',
    onAfterCandleOpen = 'onAfterCandleOpen',
    onCandleClose = 'onCandleClose',
    onAfterCandleClose = 'onAfterCandleClose',
    onInit = 'onInit',
    onStart = 'onStart',
    onDispose = 'onDispose',
    onOrderBookUpdate = 'onOrderBookUpdate',
    onAfterOrderBookUpdate = 'onAfterOrderBookUpdate',
    onOrderOpen = 'onOrderOpen',
    onAfterOrderOpen = 'onAfterOrderOpen',
    onOrderClose = 'onOrderClose',
    onAfterOrderClose = 'onAfterOrderClose',
    onInspectorRegulation = 'onInspectorRegulation',
    onAfterInspectorRegulation = 'onAfterInspectorRegulation',
}

/**
 * Type defining synchronous hooks.
 */
export type SyncHooks = PluginHook.onInit;

/**
 * Type defining asynchronous hooks.
 */
export type AsyncHooks =
    | PluginHook.onInit
    | PluginHook.onTrade
    | PluginHook.onAfterTrade
    | PluginHook.onAccountUpdate
    | PluginHook.onAfterAccountUpdate
    | PluginHook.onStart
    | PluginHook.onDispose
    | PluginHook.onCandleUpdate
    | PluginHook.onAfterCandleUpdate
    | PluginHook.onCandleOpen
    | PluginHook.onAfterCandleOpen
    | PluginHook.onCandleClose
    | PluginHook.onAfterCandleClose
    | PluginHook.onOrderBookUpdate
    | PluginHook.onAfterOrderBookUpdate
    | PluginHook.onOrderOpen
    | PluginHook.onAfterOrderOpen
    | PluginHook.onOrderClose
    | PluginHook.onAfterOrderClose
    | PluginHook.onInspectorRegulation
    | PluginHook.onAfterInspectorRegulation;

/**
 * Map of arguments for synchronous hooks.
 */
export type SyncHookArgumentsMap = {
    [PluginHook.onInit]: (arg: PluginContext) => void;
};

/**
 * Map of arguments for asynchronous hooks.
 */
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

/**
 * Interface representing a plugin with defined hooks and API.
 */
export interface PluginInterface {
    /**
     * Name of the plugin.
     */
    name: string;
    /**
     * Public API exposed by the plugin.
     */
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

/**
 * Context object available to plugins during execution.
 */
export interface PluginContext {
    /**
     * Finds a plugin by name and returns its interface.
     *
     * @param name - Name of the plugin to find.
     * @returns The plugin interface if found.
     */
    findPlugin<T extends PluginInterface>(name: string): T;
    /**
     * Detector-specific context information.
     */
    detectorContext: {
        name: string;
        options: Detector;
        account: Account;
        candles: any;
        orders: Array<Order>;
    };
    /**
     * Operations for managing trading activities.
     */
    tradingOperation: {
        /**
         * Closes all open orders for the specified symbol.
         *
         * @param symbol - Symbol of the orders to close.
         * @returns A promise resolving to the closed orders.
         */
        closeAll(symbol: Symbol): Promise<Order[]>;
    };
}