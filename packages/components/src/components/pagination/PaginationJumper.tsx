import {FC, useState} from "react";
import Input from "../input";
import {JumperProps} from "./interface";

const Jumper: FC<JumperProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>("");
    const handleQuickJump = (newPage: string) => {
        const pageNumber = Number(newPage)
        !isNaN(pageNumber) && props.onChange(pageNumber);
        setInputValue("");
    };
    return (
        <span className="g-pagination-quick-jumper">
            <span className="g-pagination-quick-jumper-text">前往</span>
            <Input
                style={{width: 30}}
                onPressEnter={handleQuickJump}
                value={inputValue}
                onChange={(val) => setInputValue(val)}
                size={props.mini ? "small" : "middle"}
            />
            <span className="g-pagination-quick-jumper-text">页</span>
        </span>
    );
};

export default Jumper;
