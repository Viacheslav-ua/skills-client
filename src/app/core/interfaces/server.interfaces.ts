export interface DeleteResult {
  raw: any;
  affected?: number | null;
}

export interface UpdateResult {
  generatedMaps: any[],
  raw: any;
  affected?: number | null;
}
