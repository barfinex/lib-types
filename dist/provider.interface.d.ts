import { Account } from "./account.interface";
import { Connector } from "./connector.interface";
import { Detector } from "./detector.interface";
export interface Provider {
    key: string;
    restApiToken: string;
    restApiUrl: string;
    connectors?: Connector[];
    detectors?: Detector[];
    accounts: Account[];
    isAvailable?: boolean;
    studioGuid?: string;
    studioName?: string;
    studioDescription?: string;
    studioSocketApiUrl?: string;
}
//# sourceMappingURL=provider.interface.d.ts.map