import React, { FC, useMemo } from "react";
import classnames from "classnames";
import { PagerProps } from "./interface";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import getCenterPage from "./getCenterPage";

const Pager: FC<PagerProps> = (props) => {
  const { pageIndex, onChange, totalPage, pagerCount,mini } = props;
  const centerPages = useMemo(
    () => getCenterPage(totalPage, pageIndex, pagerCount),
    [totalPage, pageIndex, pagerCount]
  );

  const itemClasses = (index: number) =>
    classnames("g-pagination-pager-item", {
      [`g-pagination-pager-item-active`]: pageIndex === index,
      [`g-pagination-pager-item-mini`]: mini,
    });
  return (
    <ul className="g-pagination-pager">
      <li className={itemClasses(1)} onClick={() => onChange(1)}>
        1
      </li>
      {totalPage > pagerCount && pageIndex > Math.ceil(pagerCount / 2) && (
        <li
          className={classnames("g-pagination-pager-item")}
          onClick={() => onChange(pageIndex - 5)}
        >
          <InternalIcon name="icon-ellipsis" />
        </li>
      )}
      {centerPages.map((item) => (
        <li
          className={itemClasses(item)}
          key={item}
          onClick={() => onChange(item)}
        >
          {item}
        </li>
      ))}
      {totalPage > pagerCount &&
        pageIndex < totalPage - Math.ceil(pagerCount / 2) + 1 && (
          <li
            className={classnames("g-pagination-pager-item")}
            onClick={() => onChange(pageIndex + 5)}
          >
            <InternalIcon name="icon-ellipsis" />
          </li>
        )}
      {totalPage > 1 && (
        <li
          className={itemClasses(totalPage)}
          onClick={() => onChange(totalPage)}
        >
          {totalPage}
        </li>
      )}
    </ul>
  );
};

export default Pager;
