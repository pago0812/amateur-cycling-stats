export interface RaceCategoryLength {
  documentId: string;
  name: RaceCategoryLengthEnum;
}

export enum RaceCategoryLengthEnum {
  LONG = "LONG",
  SHORT = "SHORT",
  SPRINT = "SPRINT",
  UNIQUE = "UNIQUE",
}
