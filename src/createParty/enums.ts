export const enum Domicile {
  USCITIZEN = "U.S. Citizen",
  USRESIDENT = "U.S. Resident",
  NONRESIDENT = "non-resident",
}

/*
clientID  yes string  Transact API Client ID
developerAPIKey yes string  Transact API Developer Key
domicile  yes conditional Is the party a U.S. Citizen, U.S. Resident, or non-resident
firstName yes string  Party's First Name
lastName  yes string  Party's Last Name
dob yes string  The Party's Date of Birth (MM-DD-YYYY)
primCountry yes string  The country in which the Party's physical address resides
primAddress1  yes string  The Party's physical address, line 1
primCity  yes string  The city of the Party's physical address
primState yes string  Party's residence state ( must be two letter code only ) (It is optional for non-us parties)
primZip yes string  Zip code
emailAddress  yes string  Party's contact email address


*/