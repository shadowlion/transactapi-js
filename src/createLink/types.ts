import {
  LinkType,
  FirstEntryType,
  RelatedEntryType
} from "./enums";


export interface CreateLinkRequest {
  clientID: string;
  developerAPIKey: string;
  firstEntryType: FirstEntryType;
  firstEntry: string;
  relatedEntryType: RelatedEntryType;
  relatedEntry: string;
  linkType: LinkType;
  notes: string;
  primary_value: int;
}

export interface CreateLinkResponse {
  statusCode: string;
  statusDesc: string;
  linkDetails: LinkDetail[];
}

interface LinkDetail {
  linkId: string;
}

