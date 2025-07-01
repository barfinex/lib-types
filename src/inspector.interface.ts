import { Connector } from './connector.interface';

/**
 * General settings for the application configuration.
 */
export interface InspectorGeneralSettings {
    /**
     * The port number used for the API server.
     */
    apiPort: number;
    /**
     * List of API URLs for the connectors.
     */
    // connectorsApiUrls: Connector[];
}

/**
 * Configuration for risk management in trading.
 */
export interface InspectorRiskManagement {
    /**
     * Percentage of profit to take before exiting a trade (optional).
     */
    takeProfitPercent?: number;
    /**
     * Percentage of loss at which a trade should be stopped (optional).
     */
    stopLossPercent?: number;
    /**
     * Percentage at which to move the stop loss to breakeven (optional).
     */
    breakevenPercent?: number;
    /**
     * Maximum allowable daily loss as a percentage (optional).
     */
    maxDailyLossPercent?: number;
    /**
     * Maximum allowable daily profit as a percentage (optional).
     */
    maxDailyProfitPercent?: number;
    /**
     * Maximum allowable drawdown as a percentage (optional).
     */
    maxDrawdownPercent?: number;
    /**
     * Maximum number of loss trades allowed per day (optional).
     */
    maxLossTradesPerDay?: number;
    /**
     * Maximum number of trades allowed per day (optional).
     */
    maxTradesPerDay?: number;
    /**
     * Percentage of total equity to risk per trade (optional).
     */
    riskPerTradePercent?: number;
    /**
     * Minimum risk-to-reward ratio for a trade to be valid (optional).
     */
    minRiskRewardRatio?: number;
}

/**
 * Configuration for asset management in trading.
 */
export interface InspectorAssetManagement {
    /**
     * List of asset symbols to exclude from trading.
     */
    excludedAssets: string[];
    /**
     * List of preferred asset symbols for trading.
     */
    preferredAssets: string[];
    /**
     * Maximum allowable slippage as a percentage.
     */
    slippageTolerancePercent: number;
    /**
     * Maximum allowable spread as a percentage.
     */
    spreadTolerancePercent: number;
}

/**
 * Configuration for trade-specific settings.
 */
export interface InspectorTradeSettings {
    /**
     * Maximum duration (in seconds) to hold a position.
     */
    maxPositionHoldTime: number;
    /**
     * Maximum position size as a percentage of the account equity.
     */
    maxPositionSizePercent: number;
    /**
     * Minimum position size as a percentage of the account equity.
     */
    minPositionSizePercent: number;
    /**
     * Maximum allowable leverage for trades.
     */
    maxLeverage: number;
    /**
     * Default leverage to use if none is specified.
     */
    defaultLeverage: number;
    /**
     * Trailing stop loss as a percentage.
     */
    trailingStopPercent: number;
    /**
     * Trailing take profit as a percentage.
     */
    trailingTakeProfitPercent: number;
}

/**
 * Configuration for strategy logic settings.
 */
export interface InspectorStrategyLogic {
    /**
     * Cooldown period (in seconds) after a trade is executed.
     */
    cooldownPeriod: number;
    /**
     * Maximum number of consecutive losses allowed.
     */
    maxConsecutiveLosses: number;
    /**
     * Minimum return-on-investment (ROI) threshold for a trade to be valid.
     */
    minROIThreshold: number;
    /**
     * Maximum return-on-investment (ROI) threshold for a trade to be valid.
     */
    maxROIThreshold: number;
}

/**
 * Configuration for inspector options.
 */
export interface Inspector {
    /**
     * General settings for Inspector
     */
    general: InspectorGeneralSettings

    /**
     * Unique key identifying the inspector configuration.
     */
    key: string
    /**
     * Base API URL for the inspector.
     */
    restApiUrl: string;
    /**
     * List of connector configurations.
     */
    connectors: Connector[];
    /**
     * Port number used for the inspector API.
     */
    apiPort: number;
    /**
     * Risk management settings.
     */
    riskManagement: InspectorRiskManagement;
    /**
     * Asset management settings.
     */
    assetManagement: InspectorAssetManagement;
    /**
     * Trade-specific settings.
     */
    tradeSettings: InspectorTradeSettings;
    /**
     * Strategy logic configuration.
     */
    strategyLogic: InspectorStrategyLogic;
}

// General settings for the Inspector
export interface InspectorGeneralConfig {
    apiPort: number;                          // Port for the Inspector API
    // connectorsApiUrls: ConnectorApiUrl[];     // List of connector API URLs
}

// Trade-related settings for the Inspector
export interface InspectorTradeSettingsConfig {
    maxPositionHoldTime: number;              // Maximum time to hold a position
    maxPositionSizePercent: number;           // Maximum position size (percent)
    minPositionSizePercent: number;           // Minimum position size (percent)
    maxLeverage: number;                      // Maximum leverage allowed
    defaultLeverage: number;                  // Default leverage
    trailingStopPercent: number;              // Trailing stop percentage
    trailingTakeProfitPercent: number;        // Trailing take profit percentage
}
