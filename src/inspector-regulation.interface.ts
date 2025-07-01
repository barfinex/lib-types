/**
 * Interface representing the regulation for an inspector.
 */
export interface InspectorRegulation {
    /**
     * System name of the detector that the regulation applies to.
     */
    detectorSysname: string;
}

/**
 * Type representing a handler function for processing inspector regulations.
 *
 * @param inspectorRegulation - The regulation object to be processed.
 */
export type InspectorRegulationHandler = (inspectorRegulation: InspectorRegulation) => void;
