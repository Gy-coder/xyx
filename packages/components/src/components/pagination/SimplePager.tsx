import React, {FC, useEffect, useState} from 'react'
import {SimplePageProps} from "./interface";
import classnames from "classnames";
import Input from "../input";

const SimplePager: FC<SimplePageProps> = (props) => {
    const {pageIndex, onChange,totalPage} = props
    const [inputValue, setInputValue] = useState<string>(pageIndex.toString());
    const onPressEnter = (newPage: string) => {
        const pageNumber = Number(newPage)
        console.log(pageNumber,newPage)
        if(isNaN(pageNumber)){
            setInputValue(pageIndex.toString())
            return
        }
        onChange(pageNumber)
    };
    useEffect(()=> setInputValue(pageIndex.toString()),[pageIndex])
    return (
        <div className={classnames("g-pagination-pager-simple")}>
            <Input
                style={{width: 20}}
                onPressEnter={onPressEnter}
                value={inputValue}
                onChange={(val) => setInputValue(val)}
                size="small"
            />
            <span className="g-pagination-pager-simple-slash">/</span>
            <span>{totalPage}页</span>
        </div>
    )
}

export default SimplePager