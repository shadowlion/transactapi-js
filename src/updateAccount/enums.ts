export const enum AccountType {
  INDIVIDUAL = "Individual",
  ENTITY = "Entity",
}

export const enum DomesticYNChoice {
  DOMESTIC = "domestic_account",
  INTERNATIONAL = "international_account",
}

export const enum EntityType {
  REVOCABLE_TRUST = "Revocable Trust",
  IRREVOCABLE_TRUST = "Irrevocable Trust",
  LIMITED_PARTNERSHIP = "Limited Partnership",
  LIMITED_LIABILITY_CORP = "LLC",
  CORPORATION = "Corporation",
}

export const enum KycStatus {
  PENDING = "Pending",
  AUTO_APPROVED = "Auto Approved",
}

export const enum AmlStatus {
  PENDING = "Pending",
  AUTO_APPROVED = "Auto Approved",
}

export const enum AccreditedStatus {
  PENDING = "Pending",
}

export const enum ApprovalStatus {
  PENDING = "Pending",
}
