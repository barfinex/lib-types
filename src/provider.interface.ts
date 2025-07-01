import { Account } from "./account.interface";
import { Connector } from "./connector.interface";
import { Detector } from "./detector.interface";
import { Subscription } from "./subscription.interface";

/**
 * Interface representing the configuration options for a provider.
 * This defines the necessary settings to establish and manage connections
 * to external services or APIs.
 */
export interface Provider {
    /**
     * A unique key
     */
    key: string;

    /**
     * API token used for authentication with the provider's services.
     * This ensures secure access to the provider's API endpoints.
     */
    restApiToken: string;

    /**
 * Base URL of the provider's API.
 * This is the endpoint where all API requests will be sent.
 */
    restApiUrl: string;


    /**
     * Array of connector configurations.
     * Each connector defines how to interact with a specific external service or data source.
     */
    connectors?: Connector[];

    detectors?: Detector[];

    accounts: Account[];

    isAvailable?: boolean;

    studioGuid?: string;

    studioName?: string

    studioDescription?: string;



    studioSocketApiUrl?: string;

}

function createProvider(options: Omit<Provider, 'isAvailable'> & Partial<Pick<Provider, 'isAvailable'>>): Provider {
    return {
        ...options,
        isAvailable: options.isAvailable ?? false,
    };
}