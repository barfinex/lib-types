import type { Detector } from './detector.interface';
import type { DetectorConfigInput } from './detector-config.interface';
import { Advisor } from './advisor.interface';

const DEFAULT_ADVISOR: Advisor = {
    key: '',
    restApiUrl: '',
    providerApi: '',
    connectorTypes: [],
    marketTypes: [],
    takeProfitPercent: 0,
    stopLossPercent: 0,
    commisions: [],
    aiIntegration: {
        apiKey: '',
        defaultModel: 'gpt-4',
        responseTemperature: 0.7,
        maxTokens: 2000,
        supportedFeatures: [],
    },
    cacheSettings: {
        cacheHost: 'localhost',
        cachePort: 6379,
        defaultTTL: 60,
    },
    scenarioAnalysis: {
        enabled: false,
        predefinedScenarios: [],
        maxAnalysisDepth: 1,
        customScenarios: [],
    },
    logging: {
        verbose: false,
        logFilePath: './logs/advisor.log',
        externalMonitoring: false,
    },
    portfolioOptimization: {
        enabled: false,
        riskTolerance: 'medium',
        strategies: [],
    },
};

/**
 * Унифицированный билдер конфигурации детектора.
 * Гарантирует, что все обязательные поля Detector будут заполнены.
 */
export function buildDetectorConfig(config: DetectorConfigInput): Detector {
    return {
        key: config.key ?? '',
        sysname: config.sysname ?? 'DefaultDetector',
        logLevel: config.logLevel ?? 'info',
        currency: config.currency ?? 'USDT',

        restApiUrl: config.restApiUrl ?? '',
        providers: config.providers ?? [],
        symbols: config.symbols ?? [],
        orders: config.orders ?? [],
        intervals: config.intervals ?? [],

        indicators: config.indicators ?? [],
        subscriptions: config.subscriptions ?? [],

        useSandbox: config.useSandbox ?? false,
        useScratch: config.useScratch ?? false,
        isBlocked: config.isBlocked ?? false,
        isActive: config.isActive ?? true,

        useNotifications: config.useNotifications ?? {
            telegram: {
                token: '',
                chatId: '',
                messageFormat: '',
                isActive: false,
            },
        },

        advisor: config.advisor ?? DEFAULT_ADVISOR,
        plugins: config.plugins ?? { modules: [], metas: [] },
    };
}
