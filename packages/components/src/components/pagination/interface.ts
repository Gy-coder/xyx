export interface PaginationProps {
  defaultCurrent?: number;
  current?: number;
  total?: number;
  pageSize?: number;
  pagerCount?: number;
  onChange?: (newCurrent: number) => void;
  showQuickJumper?: boolean;
  simple?: boolean;
  hideOnSinglePage?:boolean
  mini?: boolean
}

export interface PagerProps {
  pageIndex: number;
  totalPage: number;
  onChange: (newPage: number) => void;
  pagerCount: number;
  mini: boolean
}

export interface JumperProps {
  onChange: (newPage: number) => void;
  mini: boolean
}

export interface SimplePageProps{
  pageIndex: number
  totalPage: number
  onChange: (newPage: number) => void
}