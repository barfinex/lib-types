import { ConnectorType, MarketType } from './connector.interface';
import { SignalDirection } from './signal.interface';

export enum AdvisorWorkflowState {
    PLAN = 'PLAN',
    DECIDE = 'DECIDE',
    VALIDATE = 'VALIDATE',
    EXECUTE = 'EXECUTE',
    REVIEW = 'REVIEW',
}

export enum AdvisorDecision {
    TRADE = 'TRADE',
    NO_TRADE = 'NO_TRADE',
}

export interface TradeIntent {
    intentId: string;
    symbol: string;
    connectorType: ConnectorType;
    marketType: MarketType;
    decision: AdvisorDecision;
    direction?: SignalDirection;
    confidence: number;
    entryPrice?: number;
    stopPrice?: number;
    targets?: number[];
    rationale: string;
    issuedAt: number;
    expiresAt: number;
}

export interface ExecutionCommand {
    commandId: string;
    idempotencyKey: string;
    intentId: string;
    symbol: string;
    connectorType: ConnectorType;
    marketType: MarketType;
    side: 'BUY' | 'SELL';
    type: 'MARKET' | 'LIMIT' | 'STOP_MARKET' | 'TAKE_PROFIT_MARKET';
    quantity: number;
    price?: number;
    sourceKey: string;
    sourceRestApiUrl?: string;
    issuedAt: number;
}

export interface ReviewResult {
    intentId: string;
    symbol: string;
    isWin: boolean;
    entryPrice: number;
    exitPrice: number;
    realizedRr?: number;
    winRate: number;
    feedback: string;
    reviewedAt: number;
}

export interface PolicyDecision {
    accepted: boolean;
    reasons: string[];
}

export interface RiskGateDecision {
    accepted: boolean;
    reasons: string[];
}

export interface PromptPolicyVersion {
    version: number;
    policyText: string;
    source: 'baseline' | 'controller' | 'manual';
    createdAt: number;
}

export interface AdvisorLlmDecision {
    decision: AdvisorDecision;
    symbol: string;
    direction?: SignalDirection;
    confidence: number;
    trend: string;
    entryPrice?: number;
    stopPrice?: number;
    targets?: number[];
    rationale: string;
    windowSec: number;
    generatedAt: number;
}

export enum AdvisorMarketRegime {
    TREND = 'TREND',
    RANGE = 'RANGE',
    BREAKOUT = 'BREAKOUT',
    REVERSAL = 'REVERSAL',
    MIXED = 'MIXED',
    UNKNOWN = 'UNKNOWN',
}

export interface AdvisorRiskBudget {
    maxPositionUsd?: number;
    maxLeverage?: number;
    maxDrawdownPct?: number;
    maxSpreadPct?: number;
}

export interface AdvisorLlmDecisionRequest {
    requestId: string;
    sessionId: string;
    idempotencyKey: string;
    symbol: string;
    connectorType: ConnectorType;
    marketType: MarketType;
    marketRegime: AdvisorMarketRegime;
    riskBudget?: AdvisorRiskBudget;
    issuedAt: number;
}

export interface AdvisorDecisionValidation {
    accepted: boolean;
    reasons: string[];
}

export interface AdvisorLlmDecisionResponse {
    requestId: string;
    sessionId: string;
    approvedDecision: AdvisorLlmDecision;
    validation: AdvisorDecisionValidation;
    policyFlags: string[];
    latencyMs: number;
    generatedAt: number;
}

export interface AdvisorHistoricalSetup {
    symbol: string;
    regime: AdvisorMarketRegime;
    decision: AdvisorDecision;
    confidence: number;
    realizedRr?: number;
    slippageBps?: number;
    timeToFillMs?: number;
    ts: number;
}

