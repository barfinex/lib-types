import { Candle } from './candle.interface';
import { Detector } from './detector.interface';
export type GeneticStats = {
    population: number;
    maximum: number;
    minimum: number;
    mean: number;
    stdev: number;
};
export declare enum GeneticWFOType {
    Rolling = "rolling",
    Anchored = "anchored"
}
export declare enum GeneticType {
    Island = "island",
    None = "classic"
}
export type ConfigValidator = (cfg: Detector) => Detector | false;
export type StatsValidator<T = any> = (stats: T) => boolean;
export interface GenticWrapperOptions {
    generations: number;
    log?: boolean;
    populationSize?: number;
    days: number;
    useTicks?: boolean;
    gapDays?: number;
    validateSchema?: ConfigValidator;
    validateForwardStats?: StatsValidator;
    ticksFilter?: (solution: Detector) => (tick: Candle) => boolean;
    best?: number;
    wfo?: GeneticWFOType;
    gaType?: GeneticType;
    gaContinent?: boolean;
    maxThreads?: number;
}
export type SchemaBoolDescriptor = {
    bool: true;
};
export type SchemaNumberDescriptor = {
    min: number;
    max: number;
    int?: boolean;
    odd?: boolean;
};
export type SchemaDescriptor = SchemaNumberDescriptor | SchemaBoolDescriptor;
export type GeneticSchema<T = any> = {
    [K in keyof Partial<T>]: SchemaDescriptor;
};
//# sourceMappingURL=genetic.interface.d.ts.map