export const enum LinkType {
  OWNER = 'owner', 
  MANAGER = 'manager', 
  MEMBER = 'member', 
  OFFICER = 'officer', 
  DIRECTOR = 'director', 
  SPOUSE = 'spouse', 
  BENEFICIARY = 'beneficiary', 
  TRUSTEE = 'trustee', 
  CUSTODIAN = 'custodian', 
  PARENTCO = 'parentco', 
  SUBSIDIARY = 'subsidiary', 
  OTHER = 'other', 
  ACGROUP = 'acgroup',
  ADVISOR = 'advisor',
  ATTORNEY = 'attorney',
  PROXY = 'proxy'
}

export const enum RelatedEntryType {
  ACCOUNT = 'Account', 
  INDIV_AC_PARTY = 'IndivACParty', 
  ENTITY_AC_PARTY = 'EntityACParty', 
}

export type FirstEntryType = "Account";
