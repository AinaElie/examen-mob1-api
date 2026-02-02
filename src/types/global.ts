export interface ListFilters {
  page: number;
  pageSize: number;
}

export interface NameFilter {
  name?: string;
}

export interface PrismaPaginationInfo {
  page: number;
  pageSize: number;
  elementCount: number;
}
