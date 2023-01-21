export default function getCenterPage(
  totalPage: number,
  pageIndex: number,
  pagerCount: number
): number[] {
  const pageArr = Array.from(new Array(totalPage).keys());
  const middle = Math.ceil(pagerCount / 2);
  if (totalPage < pagerCount) return pageArr.slice(2, totalPage);
  if (pageIndex <= middle) return pageArr.slice(2, pagerCount);
  if (pageIndex >= totalPage - middle + 1)
    return pageArr.slice(totalPage - pagerCount + 2, totalPage);
  return pageArr.slice(pageIndex - middle + 2, pageIndex + middle - 1);
}
