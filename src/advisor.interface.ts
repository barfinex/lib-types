import { MarketType, ConnectorType } from './connector.interface';
import { AccountCommision } from './account.interface';

/**
 * Advisor Interface
 * Defines the configuration options for the Advisor service, enabling
 * advanced customization and functionality based on the provided options.
 */
export interface Advisor {

    key: string

    restApiUrl: string

    /**
     * Base API endpoint for the provider used by the Advisor service.
     */
    providerApi: string;

    /**
     * List of supported connector types for integration.
     */
    connectorTypes: ConnectorType[];

    /**
     * Supported market types for analysis and operations.
     */
    marketTypes: MarketType[];

    /**
     * Percentage for take-profit strategy.
     */
    takeProfitPercent: number;

    /**
     * Percentage for stop-loss strategy.
     */
    stopLossPercent: number;

    /**
     * List of applicable commissions for accounts.
     */
    commisions: AccountCommision[];

    /**
     * Advanced AI integration settings, including GPT configurations.
     */
    aiIntegration: {
        /**
         * API key for GPT or other AI systems.
         */
        apiKey: string;

        /**
         * Default model to be used for AI-based analysis.
         */
        defaultModel: string;

        /**
         * Temperature setting for AI responses.
         */
        responseTemperature: number;

        /**
         * Maximum tokens for AI responses.
         */
        maxTokens: number;

        /**
         * Supported AI features such as trading advice, portfolio optimization, and scenario analysis.
         */
        supportedFeatures: string[];
    };

    /**
     * Configuration for caching operations.
     */
    cacheSettings: {
        /**
         * Host for the caching service (e.g., Redis).
         */
        cacheHost: string;

        /**
         * Port for the caching service.
         */
        cachePort: number;

        /**
         * Default time-to-live (TTL) for cached entries in seconds.
         */
        defaultTTL: number;
    };

    /**
     * Scenario analysis configurations.
     */
    scenarioAnalysis: {
        /**
         * Enable or disable scenario analysis features.
         */
        enabled: boolean;

        /**
         * List of pre-defined scenarios for analysis.
         */
        predefinedScenarios: string[];

        /**
         * Maximum depth of analysis for scenarios.
         */
        maxAnalysisDepth: number;

        /**
         * Custom user-defined scenarios.
         */
        customScenarios: string[];
    };

    /**
     * Logging and monitoring configurations.
     */
    logging: {
        /**
         * Enable verbose logging for debugging.
         */
        verbose: boolean;

        /**
         * Path to store log files.
         */
        logFilePath: string;

        /**
         * Integration with external monitoring services.
         */
        externalMonitoring: boolean;
    };

    /**
     * Portfolio optimization settings.
     */
    portfolioOptimization: {
        /**
         * Enable or disable portfolio optimization features.
         */
        enabled: boolean;

        /**
         * Default risk tolerance level.
         */
        riskTolerance: 'low' | 'medium' | 'high';

        /**
         * Supported portfolio strategies (e.g., balanced, growth-oriented).
         */
        strategies: string[];
    };
}
