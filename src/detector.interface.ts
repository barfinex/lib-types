import { Candle } from './candle.interface';
import { TimeFrame, WorkingEnv } from './common.interface';
import { GeneticSchema, ConfigValidator, StatsValidator } from './genetic.interface';
import { Order } from './order.interface';
import { PluginInterface } from './plugin.interface';
import { Connector } from './connector.interface';
import { InspectorTradeSettingsConfig } from './inspector.interface';
import { Subscription, Symbol, Provider, Advisor, PluginMeta } from '.';


export type DetectorConfig = {
    apiPort: number;
    sysName: string;
    path: string;
    logLevel: string;
};

export type DetectorPluginConfig = {
    modules: any[];
    metas: PluginMeta[];
};

export type DetectorModuleConfig = DetectorConfig & {
    plugins?: DetectorPluginConfig;
};

// /**
//  * Interface representing a trading detector, responsible for executing strategies.
//  */
// export interface Detector {
//     /**
//      * Unique identifier of the detector.
//      */
//     id: string;



//     /**
//      * Method to dispose of the detector and clean up resources.
//      * @returns A Promise that resolves when the detector is disposed.
//      */
//     dispose: () => Promise<void>;

//     /**
//      * Configuration options for the detector.
//      */
//     options: Detector;

//     /**
//      * Retrieves the name of the detector.
//      * @returns The name of the detector.
//      */
//     getName(): string;
// }

/**
 * Interface representing the configuration options for a detector.
 */
export interface Detector {
    /**
     * A unique key for the detector.
     */
    key: string;
    sysname: string;               // Name of the system instance
    logLevel: string;              // Logging level (e.g., 'debug', 'info', 'warn', 'error')
    currency: string;

    useNotifications: {               // Notification settings
        telegram: {
            token: string;              // Token for the Telegram bot used for sending notifications
            chatId: string;                // Chat ID where notifications will be sent
            messageFormat: string;         // Format of the notification messages
            isActive: boolean
        }
    }

    advisor: Advisor; // Advisor integration settings

    /**
     * The base API URL used by the detector.
     */
    restApiUrl: string;
    /**
     * List of connector configurations.
     */
    providers: Provider[];
    /**
     * Port number used for the inspector API.
     */
    // apiPort: number;
    /**
     * Optional system name for the detector.
     */
    detectorSysname?: string;
    /**
     * Array of symbols the detector will operate on.
     */
    symbols: Symbol[];

    /**
    * Array of active orders associated with the detector.
    */
    orders: Order[];

    // /**
    //  * Quantity configuration for each symbol.
    //  */
    // quantity: { symbol: Symbol; value: number }[];

    // /**
    //  * Leverage configuration for each symbol.
    //  */
    // leverage: { symbol: Symbol; value: number }[];



    /**
     * Array of time frames the detector will use.
     */
    intervals: TimeFrame[];

    /**
     * Configuration for indicators used by the detector.
     */
    indicators: Indicator[];

    /**
     * Optional plugins configuration for the detector.
     */
    plugins?: {
        modules: any[]
        metas: PluginMeta[]
    };

    /**
     * Indicates if the detector operates in sandbox mode.
     */
    useSandbox: boolean;

    /**
 * Indicates if the detector should start from scratch.
 */
    useScratch: boolean;

    /**
     * Indicates if the detector is blocked.
     */
    isBlocked?: boolean;

    /**
     * Indicates if the detector is currently active.
     */
    isActive?: boolean;


    subscriptions: Subscription[]; // Subscription settings

    tradeSettings?: InspectorTradeSettingsConfig
    customConfig?: Record<string, any>;
    preloadHistory?: boolean;
}


// Plugin configuration for the detector
// export interface DetectorPlugin {
//     name: string;                  // Name of the plugin
//     path: string;                  // File path to the plugin
//     enabled: boolean;              // Whether the plugin is enabled
//     options?: Record<string, unknown>; // Optional plugin-specific options
// }



// General configuration for the detector
// export interface DetectorGeneralConfig {
//     // apiPort: number;               // Port on which the API will run


// }

// Telegram notification settings for the detector
// export interface DetectorTelegramNotifications 

// All indicators used in the detector
// export interface DetectorIndicators {
//     general: Record<string, unknown>; // General settings for indicators
//     baseIndicators: Indicator[]; // List of base indicators
//     customIndicators: DetectorCustomIndicator[]; // List of custom indicators
// }


// Base indicator configuration
export interface Indicator {
    name: string;                  // Name of the indicator
    parameters: IndicatorParameters; // Parameters for the indicator
    visual: IndicatorVisual;         // Visualization settings
}

// // Configuration for custom indicators
// export interface DetectorCustomIndicator extends DetectorBaseIndicator {
//     path: string;                  // File path to the custom indicator script
// }


// Parameters for indicators used in the detector
export interface IndicatorParameters {
    period: number;                // Time period for the indicator
    source: string | {             // Source of the indicator values
        peak: string;                // Source for peak values (if applicable)
        trough: string;              // Source for trough values (if applicable)
    };
    overboughtLevel?: number;      // Level indicating overbought conditions (optional)
    oversoldLevel?: number;        // Level indicating oversold conditions (optional)
}

// Visualization settings for indicators
export interface IndicatorVisual {
    group?: string;                // Optional grouping for visualization
    paneSysName: string;           // System name of the visualization pane
}


/**
 * Interface for metadata used in genetic algorithms and strategy creation.
 */
export interface Meta {
    /**
     * Parameters for the genetic algorithm.
     */
    parameters: GeneticSchema;

    /**
     * Function to calculate a score for the detector.
     * @param detector - The detector to score.
     * @returns The calculated score.
     */
    score: (detector: Detector) => number;

    /**
     * Function to retrieve statistics for the detector.
     * @param detector - The detector to analyze.
     * @returns The statistics for the detector.
     */
    stats: (detector: Detector) => unknown;

    /**
     * Function to create a new detector instance.
     * @param provider - The connector provider for the detector.
     * @param cfg - The configuration options for the detector.
     * @param env - The working environment for the detector.
     * @returns A Promise resolving to the created detector.
     */
    create: (provider: Connector, cfg: Detector, env: WorkingEnv) => Promise<Detector>;

    /**
     * Optional function to validate the detector configuration.
     */
    validate?: ConfigValidator;

    /**
     * Optional function to validate the detector's statistics.
     */
    validateStats?: StatsValidator;

    /**
     * Optional filter function for ticks.
     * @param solution - The detector options to filter.
     * @returns A function that filters ticks.
     */
    ticksFilter?: (solution: Detector) => (tick: Candle) => boolean;

    /**
     * Function to retrieve plugins for testing purposes.
     * @param cfg - The detector configuration.
     * @returns An array of test plugins.
     */
    testPlugins?: (cfg: Detector) => PluginInterface[];

    /**
     * Function to retrieve plugins for genetic algorithms.
     * @param cfg - The detector configuration.
     * @returns An array of genetic plugins.
     */
    geneticPlugins?: (cfg: Detector) => PluginInterface[];
}

/**
 * Interface representing a snapshot of the detector's state.
 */
export interface SnapshotData {
    /**
     * Array of orders in the detector's state.
     */
    orders: Array<Order>;

    /**
     * The detector's options at the time of the snapshot.
     */
    options: Detector;

    /**
     * Plugin-specific data for the snapshot.
     */
    pluginsData: Record<string, Record<string, unknown>>;
}




export enum DetectorEventType {
    // system
    SERVICE_STARTED = 'SERVICE_STARTED',
    SERVICE_STOPPED = 'SERVICE_STOPPED',
    DETECTOR_INITIALIZED = 'DETECTOR_INITIALIZED',
    DETECTOR_STARTED = 'DETECTOR_STARTED',
    DETECTOR_STOPPED = 'DETECTOR_STOPPED',
    ERROR_OCCURRED = 'ERROR_OCCURRED',
    RESTART_ATTEMPT = 'RESTART_ATTEMPT',

    // market_data
    TICK_RECEIVED = 'TICK_RECEIVED',
    CANDLE_UPDATED = 'CANDLE_UPDATED',
    ORDERBOOK_UPDATED = 'ORDERBOOK_UPDATED',
    MARKET_SNAPSHOT = 'MARKET_SNAPSHOT',
    CONNECTION_LOST = 'CONNECTION_LOST',
    CONNECTION_RESTORED = 'CONNECTION_RESTORED',

    // signals
    ENTRY_SIGNAL = 'ENTRY_SIGNAL',
    EXIT_SIGNAL = 'EXIT_SIGNAL',
    NO_ACTION = 'NO_ACTION',
    CONDITION_EVALUATED = 'CONDITION_EVALUATED',

    // orders
    ORDER_PLACED = 'ORDER_PLACED',
    ORDER_FILLED = 'ORDER_FILLED',
    ORDER_PARTIALLY_FILLED = 'ORDER_PARTIALLY_FILLED',
    ORDER_CANCELED = 'ORDER_CANCELED',
    ORDER_REJECTED = 'ORDER_REJECTED',
    POSITION_OPENED = 'POSITION_OPENED',
    POSITION_CLOSED = 'POSITION_CLOSED',
    RISK_TRIGGERED = 'RISK_TRIGGERED',

    // metrics
    PNL_UPDATED = 'PNL_UPDATED',
    BALANCE_UPDATED = 'BALANCE_UPDATED',
    LEVERAGE_SET = 'LEVERAGE_SET',
    RISK_ADJUSTED = 'RISK_ADJUSTED',

    // infrastructure
    HEALTH_CHECK_FAILED = 'HEALTH_CHECK_FAILED',
    WEBHOOK_RECEIVED = 'WEBHOOK_RECEIVED',
    CONFIG_UPDATED = 'CONFIG_UPDATED',
    MOCK_EVENT = 'MOCK_EVENT'
}

export type DetectorEventCategory =
    | 'system'
    | 'market_data'
    | 'signals'
    | 'orders'
    | 'metrics'
    | 'infrastructure';

export const DetectorEventGroups: Record<DetectorEventCategory, DetectorEventType[]> = {
    system: [
        DetectorEventType.SERVICE_STARTED,
        DetectorEventType.SERVICE_STOPPED,
        DetectorEventType.DETECTOR_INITIALIZED,
        DetectorEventType.DETECTOR_STARTED,
        DetectorEventType.DETECTOR_STOPPED,
        DetectorEventType.ERROR_OCCURRED,
        DetectorEventType.RESTART_ATTEMPT
    ],
    market_data: [
        DetectorEventType.TICK_RECEIVED,
        DetectorEventType.CANDLE_UPDATED,
        DetectorEventType.ORDERBOOK_UPDATED,
        DetectorEventType.MARKET_SNAPSHOT,
        DetectorEventType.CONNECTION_LOST,
        DetectorEventType.CONNECTION_RESTORED
    ],
    signals: [
        DetectorEventType.ENTRY_SIGNAL,
        DetectorEventType.EXIT_SIGNAL,
        DetectorEventType.NO_ACTION,
        DetectorEventType.CONDITION_EVALUATED
    ],
    orders: [
        DetectorEventType.ORDER_PLACED,
        DetectorEventType.ORDER_FILLED,
        DetectorEventType.ORDER_PARTIALLY_FILLED,
        DetectorEventType.ORDER_CANCELED,
        DetectorEventType.ORDER_REJECTED,
        DetectorEventType.POSITION_OPENED,
        DetectorEventType.POSITION_CLOSED,
        DetectorEventType.RISK_TRIGGERED
    ],
    metrics: [
        DetectorEventType.PNL_UPDATED,
        DetectorEventType.BALANCE_UPDATED,
        DetectorEventType.LEVERAGE_SET,
        DetectorEventType.RISK_ADJUSTED
    ],
    infrastructure: [
        DetectorEventType.HEALTH_CHECK_FAILED,
        DetectorEventType.WEBHOOK_RECEIVED,
        DetectorEventType.CONFIG_UPDATED,
        DetectorEventType.MOCK_EVENT
    ]
};
