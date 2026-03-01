import { Detector } from "./detector.interface";
import { Connector } from "./connector.interface";
import { AccountEvent } from "./account.interface";
import { ConnectorType, MarketType } from "./connector.interface";
import { Order } from "./order.interface";
import { OrderBook } from "./orderbook.interface";
import { SymbolPrice, Symbol } from "./symbol.interface";
import { Trade } from "./trade.interface";
import { Candle, TimeFrame } from ".";

/**
 * Strict event sources.
 * Only these 4 applications can emit events.
 */
export enum EventSource {
  PROVIDER = 'PROVIDER',
  INSPECTOR = 'INSPECTOR',
  DETECTOR = 'DETECTOR',
  ADVISOR = 'ADVISOR',
}

/**
 * All allowed subscription/event types.
 * Must always start with one of the EventSource prefixes.
 */
export enum SubscriptionType {

  // =========================
  // PROVIDER (DATA LAYER)
  // =========================

  PROVIDER_MARKETDATA_TRADE = 'PROVIDER_MARKETDATA_TRADE',
  PROVIDER_MARKETDATA_ORDERBOOK = 'PROVIDER_MARKETDATA_ORDERBOOK',
  PROVIDER_MARKETDATA_CANDLE = 'PROVIDER_MARKETDATA_CANDLE',
  PROVIDER_ACCOUNT_EVENT = 'PROVIDER_ACCOUNT_EVENT',
  PROVIDER_ORDER_CREATE = 'PROVIDER_ORDER_CREATE',
  PROVIDER_ORDER_CLOSE = 'PROVIDER_ORDER_CLOSE',
  PROVIDER_SYMBOLS = 'PROVIDER_SYMBOLS',
  PROVIDER_SYMBOL_PRICES = 'PROVIDER_SYMBOL_PRICES',

  // =========================
  // INSPECTOR (RISK + REGIME)
  // =========================

  INSPECTOR_TREND_DETECTED = 'INSPECTOR_TREND_DETECTED',
  INSPECTOR_RANGE_DETECTED = 'INSPECTOR_RANGE_DETECTED',
  INSPECTOR_VOLATILITY_SPIKE = 'INSPECTOR_VOLATILITY_SPIKE',
  INSPECTOR_LIQUIDITY_DROPPED = 'INSPECTOR_LIQUIDITY_DROPPED',
  INSPECTOR_DATA_GAP_DETECTED = 'INSPECTOR_DATA_GAP_DETECTED',
  INSPECTOR_DATA_OUTLIER_DETECTED = 'INSPECTOR_DATA_OUTLIER_DETECTED',
  INSPECTOR_DATA_MATURITY_UPDATE = 'INSPECTOR_DATA_MATURITY_UPDATE',

  INSPECTOR_RISK_LIMIT_BREACH = 'INSPECTOR_RISK_LIMIT_BREACH',
  INSPECTOR_RISK_MARGIN_UPDATE = 'INSPECTOR_RISK_MARGIN_UPDATE',
  INSPECTOR_RISK_KILL_SWITCH = 'INSPECTOR_RISK_KILL_SWITCH',

  // =========================
  // DETECTOR (SIGNALS + INTENT)
  // =========================

  DETECTOR_SIGNAL_GENERATED = 'DETECTOR_SIGNAL_GENERATED',
  DETECTOR_SIGNAL_UPDATED = 'DETECTOR_SIGNAL_UPDATED',
  DETECTOR_SIGNAL_INVALIDATED = 'DETECTOR_SIGNAL_INVALIDATED',

  DETECTOR_POSITION_OPEN_REQUEST = 'DETECTOR_POSITION_OPEN_REQUEST',
  DETECTOR_POSITION_CLOSE_REQUEST = 'DETECTOR_POSITION_CLOSE_REQUEST',
  DETECTOR_POSITION_REDUCE_REQUEST = 'DETECTOR_POSITION_REDUCE_REQUEST',
  DETECTOR_POSITION_FLIP_REQUEST = 'DETECTOR_POSITION_FLIP_REQUEST',

  // =========================
  // ADVISOR (AI + EXPLAINABILITY)
  // =========================

  ADVISOR_DECISION_REQUEST = 'ADVISOR_DECISION_REQUEST',
  ADVISOR_DECISION_RESPONSE = 'ADVISOR_DECISION_RESPONSE',
  ADVISOR_DECISION_CONTEXT_SNAPSHOT = 'ADVISOR_DECISION_CONTEXT_SNAPSHOT',

  ADVISOR_CONFIDENCE_LOW = 'ADVISOR_CONFIDENCE_LOW',
  ADVISOR_MODEL_SWITCHED = 'ADVISOR_MODEL_SWITCHED',
  ADVISOR_HALLUCINATION_DETECTED = 'ADVISOR_HALLUCINATION_DETECTED',
}

/**
 * Base institutional event contract.
 */
export interface BaseEvent<TType extends SubscriptionType, TPayload> {
  eventId: string;
  type: TType;
  source: EventSource;
  timestamp: number;
  correlationId?: string;
  causationId?: string;
  payload: TPayload;
}

/**
 * Inspector-specific payload examples.
 */
export interface InspectorRiskPayload {
  symbol: Symbol;
  currentExposure: number;
  maxAllowedExposure: number;
  reason?: string;
}

export interface InspectorRegimePayload {
  symbol: Symbol;
  regime: 'TREND' | 'RANGE' | 'VOLATILE' | 'UNKNOWN';
}

/**
 * Detector payloads.
 */
export interface DetectorSignalPayload {
  symbol: Symbol;
  side: 'LONG' | 'SHORT';
  confidence: number;
  strategyId: string;
}

/**
 * Advisor payloads.
 */
export interface AdvisorDecisionPayload {
  decisionId: string;
  approved: boolean;
  reasoning?: string;
  confidence?: number;
}

/**
 * Strict union of all allowed payloads.
 * NO any allowed.
 */
export type EventPayload =
  | AccountEvent
  | Order
  | OrderBook
  | Trade
  | Symbol[]
  | SymbolPrice
  | Candle
  | InspectorRiskPayload
  | InspectorRegimePayload
  | DetectorSignalPayload
  | AdvisorDecisionPayload;

export type EventEnvelope = BaseEvent<SubscriptionType, EventPayload>;

/**
 * Subscription value wrapper.
 */
export interface SubscriptionValue {
  value: EventPayload | EventEnvelope;
  options: {
    key?: string;
    connectorType?: ConnectorType;
    marketType?: MarketType;
    updateMoment: number;
  };
}

/**
 * Subscription configuration.
 */
export interface Subscription {
  type: SubscriptionType;
  symbols?: Symbol[];
  connector?: Connector;
  detector?: Detector;
  updateMoment?: number;
  active: boolean;
  intervals?: TimeFrame[];
}

/**
 * Compile-time source validation.
 */
export function assertEventSourceMatch(
  type: `${EventSource}_${string}` | SubscriptionType,
  source: EventSource,
): void {
  if (!type.startsWith(source)) {
    throw new Error(
      `Invalid event emission: ${source} cannot emit ${type}`
    );
  }
}


