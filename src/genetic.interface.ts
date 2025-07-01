import { Candle } from './candle.interface';
import { Detector } from './detector.interface';

/**
 * Statistics collected during the genetic algorithm's execution.
 */
export type GeneticStats = {
    /** Population size in the current generation. */
    population: number;
    /** Maximum fitness value in the current generation. */
    maximum: number;
    /** Minimum fitness value in the current generation. */
    minimum: number;
    /** Mean fitness value across the population. */
    mean: number;
    /** Standard deviation of fitness values in the population. */
    stdev: number;
};

/**
 * Enum for walk-forward optimization (WFO) types in the genetic algorithm.
 */
export enum GeneticWFOType {
    /** Rolling walk-forward optimization type. */
    Rolling = 'rolling',
    /** Anchored walk-forward optimization type. */
    Anchored = 'anchored',
}

/**
 * Enum for genetic algorithm types representing biological behavior models.
 */
export enum GeneticType {
    /** Island model for distributed populations. */
    Island = 'island',
    /** Classic genetic algorithm without additional grouping. */
    None = 'classic',
}

/**
 * Function type for validating the configuration of the detector options.
 *
 * @param cfg - Configuration to validate.
 * @returns The validated configuration or `false` if invalid.
 */
export type ConfigValidator = (cfg: Detector) => Detector | false;

/**
 * Function type for validating genetic algorithm statistics.
 *
 * @param stats - Statistics to validate.
 * @returns `true` if the statistics are valid; otherwise `false`.
 */
export type StatsValidator<T = any> = (stats: T) => boolean;

/**
 * Options for configuring the genetic algorithm wrapper.
 */
export interface GenticWrapperOptions {
    /** Number of generations to run. */
    generations: number;
    /** Optional flag to enable logging during execution. */
    log?: boolean;
    /** Size of the population in each generation. */
    populationSize?: number;
    /** Number of days for the simulation or analysis. */
    days: number;
    /** Optional flag to use tick data (enterprise only). */
    useTicks?: boolean;
    /** Number of gap days to skip in the data. */
    gapDays?: number;
    /** Optional schema validation function for configurations. */
    validateSchema?: ConfigValidator;
    /** Optional validator for forward-testing statistics. */
    validateForwardStats?: StatsValidator;
    /** Optional filter for ticks based on a solution. */
    ticksFilter?: (solution: Detector) => (tick: Candle) => boolean;
    /** Number of best solutions to retain for further analysis. */
    best?: number;
    /** Type of walk-forward optimization (rolling or anchored). */
    wfo?: GeneticWFOType;
    /** Genetic algorithm biological behavior model type. */
    gaType?: GeneticType;
    /** Optional flag for continent-level grouping (only for `GeneticType.Island`). */
    gaContinent?: boolean;
    /** Maximum number of threads to use for parallelism. */
    maxThreads?: number;
}

/**
 * Descriptor for boolean schema properties.
 */
export type SchemaBoolDescriptor = {
    /** Indicates a boolean property. */
    bool: true;
};

/**
 * Descriptor for numerical schema properties.
 */
export type SchemaNumberDescriptor = {
    /** Minimum allowed value. */
    min: number;
    /** Maximum allowed value. */
    max: number;
    /** Optional flag to indicate integer-only values. */
    int?: boolean;
    /** Optional flag to indicate odd values only. */
    odd?: boolean;
};

/**
 * Union type representing schema property descriptors.
 */
export type SchemaDescriptor = SchemaNumberDescriptor | SchemaBoolDescriptor;

/**
 * Schema definition for genetic algorithm configurations.
 *
 * @template T - Generic type representing the configuration object.
 */
export type GeneticSchema<T = any> = {
    /** Partial mapping of configuration keys to schema descriptors. */
    [K in keyof Partial<T>]: SchemaDescriptor;
};
