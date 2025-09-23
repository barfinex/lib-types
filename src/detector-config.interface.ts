import type {
    Detector,
    Provider,
    Symbol,
    TimeFrame,
    Indicator,
    Subscription,
    //DetectorPlugin,
    PluginMeta,
} from './index';

/**
 * Унифицированная форма конфигурации детектора
 * (все поля опциональные, удобно для локальных конфигов).
 */
export interface DetectorConfigInput extends Partial<Detector> {
    key?: string;
    sysname?: string;
    logLevel?: string;
    currency?: string;

    restApiUrl?: string;
    providers?: Provider[];
    symbols?: Symbol[];
    orders?: Detector['orders'];
    intervals?: TimeFrame[];

    indicators?: Indicator[];
    subscriptions?: Subscription[];

    useSandbox?: boolean;
    useScratch?: boolean;
    isBlocked?: boolean;
    isActive?: boolean;

    useNotifications?: Detector['useNotifications'];
    advisor?: Detector['advisor'];
    plugins?: {
        modules: any[]
        metas: PluginMeta[]
    };
}
