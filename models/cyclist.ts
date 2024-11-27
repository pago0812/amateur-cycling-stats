
export interface Cyclist {
  id: string;
  documentId:string;
  name: string;
  lastName: string;
  bornYear: number;
  gender: CyclistGender;
}


enum CyclistGender {
  F = "F",
  M = "M",
}
