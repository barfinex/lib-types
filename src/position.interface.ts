import { MarketType, ConnectorType } from "./connector.interface";
import { Symbol } from ".";
import { TradeSide } from "./trade.interface";

/**
 * Interface representing a trading position.
 */
export interface Position {
    /**
     * Type of the connector used for the position (e.g., Binance, Tinkoff).
     */
    connectorType: ConnectorType;

    /**
     * Type of the market where the position is held (e.g., spot, futures).
     */
    marketType: MarketType;

    /**
     * Symbol or ticker of the trading pair (e.g., BTC/USD).
     */
    symbol: Symbol;

    /**
     * Quantity of the asset in the position.
     */
    quantity: number;

    /**
     * Entry price at which the position was opened.
     */
    entryPrice: number;

    /**
     * Last known price of the asset (optional).
     */
    lastPrice?: number;

    /**
     * Initial margin required to open the position.
     */
    initialMargin: number;

    /**
     * Leverage applied to the position.
     */
    leverage: number;

    /**
     * Side of the position (LONG or SHORT).
     */
    side: TradeSide;

    /**
     * Indicates whether the position has reached breakeven (optional).
     */
    isBreakeven?: boolean;

    // ===================== Расширение для стратегий =====================

    /**
     * Время открытия позиции (Unix timestamp, ms).
     */
    entryTime?: number;

    /**
     * Текущий трейлинг-стоп (если стратегия его использует).
     */
    trailingStop?: number;

    /**
     * Массив для фиксации срабатывания тейк-профитов.
     */
    tpExecuted?: boolean[];
}
