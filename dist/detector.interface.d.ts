import { Candle } from './candle.interface';
import { TimeFrame, WorkingEnv } from './common.interface';
import { GeneticSchema, ConfigValidator, StatsValidator } from './genetic.interface';
import { Order } from './order.interface';
import { PluginInterface } from './plugin.interface';
import { Connector } from './connector.interface';
import { InspectorTradeSettingsConfig } from './inspector.interface';
import { Subscription, Symbol, Provider, Advisor } from '.';
export interface Detector {
    key: string;
    sysname: string;
    logLevel: string;
    currency: string;
    useNotifications: {
        telegram: {
            token: string;
            chatId: string;
            messageFormat: string;
            isActive: boolean;
        };
    };
    advisor: Advisor;
    restApiUrl: string;
    providers: Provider[];
    detectorSysname?: string;
    symbols: Symbol[];
    orders: Order[];
    intervals: TimeFrame[];
    indicators: Indicator[];
    plugins?: DetectorPlugin[];
    useSandbox: boolean;
    useScratch: boolean;
    isBlocked?: boolean;
    isActive?: boolean;
    subscriptions: Subscription[];
    tradeSettings?: InspectorTradeSettingsConfig;
}
export interface DetectorPlugin {
    name: string;
    path: string;
    enabled: boolean;
    options?: Record<string, unknown>;
}
export interface Indicator {
    name: string;
    parameters: IndicatorParameters;
    visual: IndicatorVisual;
}
export interface IndicatorParameters {
    period: number;
    source: string | {
        peak: string;
        trough: string;
    };
    overboughtLevel?: number;
    oversoldLevel?: number;
}
export interface IndicatorVisual {
    group?: string;
    paneSysName: string;
}
export interface Meta {
    parameters: GeneticSchema;
    score: (detector: Detector) => number;
    stats: (detector: Detector) => unknown;
    create: (provider: Connector, cfg: Detector, env: WorkingEnv) => Promise<Detector>;
    validate?: ConfigValidator;
    validateStats?: StatsValidator;
    ticksFilter?: (solution: Detector) => (tick: Candle) => boolean;
    testPlugins?: (cfg: Detector) => PluginInterface[];
    geneticPlugins?: (cfg: Detector) => PluginInterface[];
}
export interface SnapshotData {
    orders: Array<Order>;
    options: Detector;
    pluginsData: Record<string, Record<string, unknown>>;
}
export declare enum DetectorEventType {
    SERVICE_STARTED = "SERVICE_STARTED",
    SERVICE_STOPPED = "SERVICE_STOPPED",
    DETECTOR_INITIALIZED = "DETECTOR_INITIALIZED",
    DETECTOR_STARTED = "DETECTOR_STARTED",
    DETECTOR_STOPPED = "DETECTOR_STOPPED",
    ERROR_OCCURRED = "ERROR_OCCURRED",
    RESTART_ATTEMPT = "RESTART_ATTEMPT",
    TICK_RECEIVED = "TICK_RECEIVED",
    CANDLE_UPDATED = "CANDLE_UPDATED",
    ORDERBOOK_UPDATED = "ORDERBOOK_UPDATED",
    MARKET_SNAPSHOT = "MARKET_SNAPSHOT",
    CONNECTION_LOST = "CONNECTION_LOST",
    CONNECTION_RESTORED = "CONNECTION_RESTORED",
    ENTRY_SIGNAL = "ENTRY_SIGNAL",
    EXIT_SIGNAL = "EXIT_SIGNAL",
    NO_ACTION = "NO_ACTION",
    CONDITION_EVALUATED = "CONDITION_EVALUATED",
    ORDER_PLACED = "ORDER_PLACED",
    ORDER_FILLED = "ORDER_FILLED",
    ORDER_PARTIALLY_FILLED = "ORDER_PARTIALLY_FILLED",
    ORDER_CANCELED = "ORDER_CANCELED",
    ORDER_REJECTED = "ORDER_REJECTED",
    POSITION_OPENED = "POSITION_OPENED",
    POSITION_CLOSED = "POSITION_CLOSED",
    RISK_TRIGGERED = "RISK_TRIGGERED",
    PNL_UPDATED = "PNL_UPDATED",
    BALANCE_UPDATED = "BALANCE_UPDATED",
    LEVERAGE_SET = "LEVERAGE_SET",
    RISK_ADJUSTED = "RISK_ADJUSTED",
    HEALTH_CHECK_FAILED = "HEALTH_CHECK_FAILED",
    WEBHOOK_RECEIVED = "WEBHOOK_RECEIVED",
    CONFIG_UPDATED = "CONFIG_UPDATED",
    MOCK_EVENT = "MOCK_EVENT"
}
export type DetectorEventCategory = 'system' | 'market_data' | 'signals' | 'orders' | 'metrics' | 'infrastructure';
export declare const DetectorEventGroups: Record<DetectorEventCategory, DetectorEventType[]>;
//# sourceMappingURL=detector.interface.d.ts.map