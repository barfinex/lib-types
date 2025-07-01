import { Connector } from './connector.interface';
export interface InspectorGeneralSettings {
    apiPort: number;
}
export interface InspectorRiskManagement {
    takeProfitPercent?: number;
    stopLossPercent?: number;
    breakevenPercent?: number;
    maxDailyLossPercent?: number;
    maxDailyProfitPercent?: number;
    maxDrawdownPercent?: number;
    maxLossTradesPerDay?: number;
    maxTradesPerDay?: number;
    riskPerTradePercent?: number;
    minRiskRewardRatio?: number;
}
export interface InspectorAssetManagement {
    excludedAssets: string[];
    preferredAssets: string[];
    slippageTolerancePercent: number;
    spreadTolerancePercent: number;
}
export interface InspectorTradeSettings {
    maxPositionHoldTime: number;
    maxPositionSizePercent: number;
    minPositionSizePercent: number;
    maxLeverage: number;
    defaultLeverage: number;
    trailingStopPercent: number;
    trailingTakeProfitPercent: number;
}
export interface InspectorStrategyLogic {
    cooldownPeriod: number;
    maxConsecutiveLosses: number;
    minROIThreshold: number;
    maxROIThreshold: number;
}
export interface Inspector {
    general: InspectorGeneralSettings;
    key: string;
    restApiUrl: string;
    connectors: Connector[];
    apiPort: number;
    riskManagement: InspectorRiskManagement;
    assetManagement: InspectorAssetManagement;
    tradeSettings: InspectorTradeSettings;
    strategyLogic: InspectorStrategyLogic;
}
export interface InspectorGeneralConfig {
    apiPort: number;
}
export interface InspectorTradeSettingsConfig {
    maxPositionHoldTime: number;
    maxPositionSizePercent: number;
    minPositionSizePercent: number;
    maxLeverage: number;
    defaultLeverage: number;
    trailingStopPercent: number;
    trailingTakeProfitPercent: number;
}
//# sourceMappingURL=inspector.interface.d.ts.map