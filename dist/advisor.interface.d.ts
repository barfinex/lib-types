import { MarketType, ConnectorType } from './connector.interface';
import { AccountCommision } from './account.interface';
export interface Advisor {
    key: string;
    restApiUrl: string;
    providerApi: string;
    connectorTypes: ConnectorType[];
    marketTypes: MarketType[];
    takeProfitPercent: number;
    stopLossPercent: number;
    commisions: AccountCommision[];
    aiIntegration: {
        apiKey: string;
        defaultModel: string;
        responseTemperature: number;
        maxTokens: number;
        supportedFeatures: string[];
    };
    cacheSettings: {
        cacheHost: string;
        cachePort: number;
        defaultTTL: number;
    };
    scenarioAnalysis: {
        enabled: boolean;
        predefinedScenarios: string[];
        maxAnalysisDepth: number;
        customScenarios: string[];
    };
    logging: {
        verbose: boolean;
        logFilePath: string;
        externalMonitoring: boolean;
    };
    portfolioOptimization: {
        enabled: boolean;
        riskTolerance: 'low' | 'medium' | 'high';
        strategies: string[];
    };
}
//# sourceMappingURL=advisor.interface.d.ts.map