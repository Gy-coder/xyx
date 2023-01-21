import React, {forwardRef, ForwardRefRenderFunction} from "react";
import classnames from "classnames";
import {PaginationProps} from "./interface";
import usePager from "./usePager";
import InternalIcon from "../_interal/internal_icon/InternalIcon";
import Pager from "./Pager";
import Jumper from "./PaginationJumper";
import SimplePager from "./SimplePager";
import {isUndefined} from "../../utils/is";
import "./index.scss";

const Pagination: ForwardRefRenderFunction<any, PaginationProps> = (
    props,
    ref
) => {
    const {
        defaultCurrent,
        current,
        onChange,
        total = 1,
        pageSize = 10,
        pagerCount = 7,
        showQuickJumper = false,
        simple = false,
        hideOnSinglePage = false,
        mini = false
    } = props;

    if (!isUndefined(current) && isUndefined(onChange))
        console.error("current property must be with onChange")

    const {pageIndex, prevPage, nextPage, totalPage, jumpToPage} = usePager({
        defaultCurrent,
        current,
        onChange,
        total,
        pageSize,
    });

    const renderPager = simple ? (
        <SimplePager
            pageIndex={pageIndex}
            onChange={jumpToPage}
            totalPage={totalPage}
        />
    ) : (
        <Pager
            pageIndex={pageIndex}
            onChange={jumpToPage}
            totalPage={totalPage}
            pagerCount={pagerCount}
            mini={mini}
        />
    );

    const paginationClasses = classnames("g-pagination",{
        "g-pagination-mini": mini
    })
    const buttonClasses = (pos: "prev" | "next", index: number) =>
        classnames(`g-pagination-button`, `g-pagination-${pos}-button`, {
            [`g-pagination-button-disabled`]: pageIndex === index,
            [`g-pagination-button-mini`]: simple || mini,
        });

    const hidePagination = hideOnSinglePage && totalPage === 1;

    return !hidePagination ? (
        <div className={paginationClasses} ref={ref}>
            <button className={buttonClasses("prev", 1)} onClick={prevPage}>
                <InternalIcon name="icon-arrow-left"/>
            </button>
            {renderPager}
            <button className={buttonClasses("next", totalPage)} onClick={nextPage}>
                <InternalIcon name="icon-arrow-right"/>
            </button>
            {showQuickJumper && !simple && <Jumper onChange={jumpToPage} mini={mini}/>}
        </div>
    ) : null;
};

export default forwardRef(Pagination);
