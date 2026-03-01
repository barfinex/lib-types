import { Account } from "./account.interface";
import { Connector } from "./connector.interface";
import { Detector } from "./detector.interface";
import { Subscription } from "./subscription.interface";
import { TimeFrame } from "./common.interface";

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
    apiToken: string;

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

    /**
     * Настройки синхронизации свечей (подкачка при старте, backfill).
     */
    candleSync?: {
        /** При старте удалить всю историю свечей и подкачать с нуля по активным инструментам (по умолчанию false). */
        clearHistoryOnStartup?: boolean;
        /** Глубина первичной подкачки в днях (REST к бирже). По умолчанию 14. */
        warmupDays?: number;
        /**
         * Перекрытие (в свечах) при backfill от lastTimestamp для закрытия пограничных дыр.
         * По умолчанию 2.
         */
        overlapCandles?: number;
        /**
         * Глубина подкачки по интервалам (в днях), если данных по серии нет.
         * Приоритет: ENV -> lookbackDays -> warmupDays -> встроенные дефолты.
         */
        lookbackDays?: Partial<Record<TimeFrame, number>>;
        /** Интервалы свечей для подкачки и backfill. По умолчанию все: min1, min5, min15, min30, h1, h2, h4, day, week, month. */
        intervals?: TimeFrame[];
    };
}

function createProvider(options: Omit<Provider, 'isAvailable'> & Partial<Pick<Provider, 'isAvailable'>>): Provider {
    return {
        ...options,
        isAvailable: options.isAvailable ?? false,
    };
}