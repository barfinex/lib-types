// import { Provider } from '@nestjs/common';
import { Candle, MarketType, TimeFrame, ConnectorType, Symbol } from './';

/**
 * Interface representing options for requesting historical market data.
 */
export interface History {
    /**
     * The type of the connector to fetch data from (e.g., binance, tinkoff).
     */
    connectorType: ConnectorType;

    /**
     * The market type for the requested historical data (e.g., spot, futures).
     */
    marketType: MarketType;

    /**
     * Array of symbols (e.g., trading pairs like BTC/USD or stock symbols like AAPL) for which the historical data is requested.
     */
    symbols: Symbol[];

    /**
     * The number of days for which historical data is requested.
     */
    days: number;

    /**
     * The time frame of the historical data (e.g., 1m, 1h, 1d).
     */
    interval: TimeFrame;

    /**
     * The number of gap days to skip in the historical data.
     * For example, if `gapDays` is 2, the data will skip every 2 days.
     */
    gapDays: number;

    /**
     * Optional flag to disable progress tracking during the data retrieval process.
     */
    noProgress?: boolean;
}

/**
 * Type representing a function to request historical data for a specific symbol and time frame.
 * 
 * @param from - The starting timestamp (Unix time) for the historical data.
 * @param to - The ending timestamp (Unix time) for the historical data.
 * @param ticker - The symbol or ticker for which the historical data is requested (e.g., BTC/USD, AAPL).
 * @param interval - The time frame for the historical data (e.g., 1m, 1h, 1d).
 * @returns A Promise resolving to an array of candles containing the requested historical data.
 */
export type HistoryRequest = (from: number, to: number, ticker: string, interval: TimeFrame) => Promise<Candle[]>;
