import { AccountEvent } from "./account.interface";
import { ConnectorType, MarketType } from "./connector.interface";
import { Order } from "./order.interface";
import { OrderBook } from "./orderbook.interface";
import { SymbolPrice, Symbol } from "./symbol.interface";
import { Trade } from "./trade.interface";

/**
 * Enum for log levels to control the verbosity of logging output.
 */
export enum LogLevel {
    /**
     * `trace`: The most detailed level of logging, used to trace program execution step by step.
     * Typically includes entering/exiting functions and detailed variable states.
     */
    trace = 'trace',

    /**
     * `debug`: Provides detailed information for debugging purposes.
     * Useful for tracking the flow and state of the application.
     */
    debug = 'debug',

    /**
     * `info`: General information about the application's runtime behavior.
     * Suitable for production logs to track key events like service startup or task completion.
     */
    info = 'info',

    /**
     * `warn`: Indicates a potential problem or unexpected situation.
     * The application can continue running, but attention may be required.
     */
    warn = 'warn',

    /**
     * `error`: Logs errors that require attention but allow the application to continue running.
     * Typically includes stack traces and error details.
     */
    error = 'error',

    /**
     * `fatal`: The highest severity level, used for critical issues.
     * These errors often indicate that the application cannot continue running.
     */
    fatal = 'fatal',

    /**
     * `silent`: Disables all logging.
     * Often used in testing or scenarios where logging is not needed.
     */
    silent = 'silent',
}


/**
 * Enum representing actions that can be performed on a candle.
 */
export enum CandleActionStatus {
    /**
     * `create`: Create a new candle.
     */
    create = 'create',

    /**
     * `update`: Update an existing candle.
     */
    update = 'update',

    /**
     * `skipp`: Skip the candle action.
     */
    skipp = 'skipp',
}

/**
 * Enum for different types of indicators used in trading strategies.
 */
export enum IndicatorType {
    /**
     * `line`: A line indicator.
     */
    line = 'line',

    /**
     * `circle`: A circle indicator.
     */
    circle = 'circle',

    /**
     * `lineSet`: A set of lines as an indicator.
     */
    lineSet = 'lineSet',

    /**
     * `volumeprofile`: A volume profile indicator.
     */
    volumeprofile = 'volumeprofile',
}

/**
 * Enum for defining time frames in trading.
 */
export enum TimeFrame {
    /**
     * `min1`: 1-minute time frame.
     */
    min1 = 'min1',

    /**
     * `min3`: 3-minute time frame.
     */
    min3 = 'min3',

    /**
     * `min5`: 5-minute time frame.
     */
    min5 = 'min5',

    /**
     * `min15`: 15-minute time frame.
     */
    min15 = 'min15',

    /**
     * `min30`: 30-minute time frame.
     */
    min30 = 'min30',

    /**
     * `h1`: 1-hour time frame.
     */
    h1 = 'h1',

    /**
     * `h2`: 2-hour time frame.
     */
    h2 = 'h2',

    /**
     * `h4`: 4-hour time frame.
     */
    h4 = 'h4',

    /**
     * `day`: 1-day time frame.
     */
    day = 'day',

    /**
     * `week`: 1-week time frame.
     */
    week = 'week',

    /**
     * `month`: 1-month time frame.
     */
    month = 'month',
}

/**
 * Enum for working environments in the system.
 */
export enum WorkingEnv {
    /**
     * `genetic`: Genetic environment for simulations or optimizations.
     */
    genetic = 'genetic',

    /**
     * `tester`: Testing environment.
     */
    tester = 'tester',

    /**
     * `production`: Production environment.
     */
    production = 'production',
}

/**
 * Enum for order environments.
 */
export enum OrderEnv {
    /**
     * `Prod`: Production environment for orders.
     */
    Prod = 'Prod',

    /**
     * `Test`: Testing environment for orders.
     */
    Test = 'Test',
}

/**
 * Enum for order sides in trading.
 */
export enum OrderSide {
    /**
     * `BUY`: Represents a buy order.
     */
    BUY = 'BUY',

    /**
     * `SELL`: Represents a sell order.
     */
    SELL = 'SELL',
}

/**
 * Enum for order types in trading.
 */
export enum OrderType {
    /**
     * `LIMIT`: Limit order type.
     */
    LIMIT = 'LIMIT',

    /**
     * `LIMIT_MAKER`: Limit maker order type.
     */
    LIMIT_MAKER = 'LIMIT_MAKER',

    /**
     * `MARKET`: Market order type.
     */
    MARKET = 'MARKET',

    /**
     * `STOP`: Stop order type.
     */
    STOP = 'STOP',

    /**
     * `STOP_MARKET`: Stop market order type.
     */
    STOP_MARKET = 'STOP_MARKET',

    /**
     * `STOP_LOSS_LIMIT`: Stop loss limit order type.
     */
    STOP_LOSS_LIMIT = 'STOP_LOSS_LIMIT',

    /**
     * `TAKE_PROFIT_LIMIT`: Take profit limit order type.
     */
    TAKE_PROFIT_LIMIT = 'TAKE_PROFIT_LIMIT',

    /**
     * `TAKE_PROFIT_MARKET`: Take profit market order type.
     */
    TAKE_PROFIT_MARKET = 'TAKE_PROFIT_MARKET',

    /**
     * `TRAILING_STOP_MARKET`: Trailing stop market order type.
     */
    TRAILING_STOP_MARKET = 'TRAILING_STOP_MARKET',

    /**
     * `TAKE_PROFIT`: Take profit order type.
     */
    TAKE_PROFIT = 'TAKE_PROFIT',
}
