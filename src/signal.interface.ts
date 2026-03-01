import { ConnectorType, MarketType } from './connector.interface';

export enum DataMaturity {
  INSUFFICIENT = 'INSUFFICIENT',
  FAST = 'FAST',
  INTRADAY = 'INTRADAY',
  FULL = 'FULL',
}

export enum DetectorRole {
  CONTEXT = 'CONTEXT',
  ZONE = 'ZONE',
  TRIGGER = 'TRIGGER',
}

export enum DetectorDecision {
  TRADE = 'TRADE',
  NO_TRADE = 'NO_TRADE',
}

export type SignalDirection = 'LONG' | 'SHORT';

export type EntryType = 'limit' | 'market';

export type StrategyKind =
  | 'OrderFlowReversal'
  | 'LiquidityGrab'
  | 'VWAPReversion'
  | 'RegimeTrendContinuation'
  | 'HtfBiasLtfOrderFlow'
  | 'LiquiditySweepReversal'
  | 'TrendPullback';

export interface InstrumentIdentity {
  symbol: string;
  marketType: MarketType;
  connectorType: ConnectorType;
}

export interface CandlePoint {
  time: number;
  close: number;
  open?: number;
  high?: number;
  low?: number;
  volume?: number;
}

export interface CandlesContext {
  cacheKey: string;
  h1?: CandlePoint[];
  h4?: CandlePoint[];
  d1?: CandlePoint[];
}

export interface OrderFlowSnapshot {
  snapshotKey: string;
  shortWindowSec: number;
  longWindowSec: number;
  deltaRatio: number;
  cvd: number;
  aggressiveBuyVolume: number;
  aggressiveSellVolume: number;
  absorptionScore?: number;
  tradeCount?: number;
  avgTradeSize?: number;
  maxTradeSize?: number;
  buyVolume?: number;
  sellVolume?: number;
  delta?: number;
  vwap?: number | null;
}

export interface OrderBookSnapshot {
  snapshotKey: string;
  depth: number;
  imbalance: number;
  bestBid: number;
  bestAsk: number;
  mid?: number;
  spread?: number;
  spreadPct?: number;
  bidWallUsd?: number;
  askWallUsd?: number;
  walls?: {
    bid: Array<{ price: number; volume: number }>;
    ask: Array<{ price: number; volume: number }>;
  };
}

export interface DetectorInput {
  instrument: InstrumentIdentity;
  dataContext: {
    maturity: DataMaturity;
    windows: {
      candlesDays: number;
      flowMinutes: number;
      bookMinutes: number;
    };
  };
  candles: CandlesContext;
  orderFlow: OrderFlowSnapshot;
  orderBook: OrderBookSnapshot;
}

export interface SignalSchema {
  decision: DetectorDecision;
  symbol: string;
  market: MarketType;
  direction?: SignalDirection;
  confidence: number;
  strategy?: StrategyKind;
  entry?: { price: number; type: EntryType; reason: string };
  stop?: { price: number; reason: string };
  targets: Array<{ price: number; reason: string }>;
  context: {
    regime?: string;
    bias?: SignalDirection | 'NEUTRAL';
    delta: string | number;
    orderBookImbalance: number;
    dataMaturity: DataMaturity;
  };
  audit: {
    detectorsFired: string[];
    rejectedBy: string[];
    inputsRef: {
      candlesKey: string;
      flowKey: string;
      bookKey: string;
    };
  };
}

export interface ContextDetectorResult {
  fired: boolean;
  detector: string;
  regime?: string;
  bias?: SignalDirection | 'NEUTRAL';
  levels?: number[];
  zones?: string[];
  levelsDetailed?: Record<string, number>;
  zonesDetailed?: Array<{
    type: string;
    range: [number, number];
    timeframe?: 'h1' | 'h4' | 'd1';
    score?: number;
  }>;
}

export interface TriggerDetectorResult {
  fired: boolean;
  detector: string;
  strategy: StrategyKind;
  direction?: SignalDirection;
  confidence: number;
  reason?: string;
  entryPrice?: number;
  stopPrice?: number;
  targets?: Array<{ price: number; reason: string }>;
}

export interface DetectorNode<T> {
  name: string;
  role: DetectorRole;
  evaluate(input: DetectorInput): T;
}
