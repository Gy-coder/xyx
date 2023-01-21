import {Pagination} from '@g-ui/components'
import {useState} from "react";

const Demo = () => {
    const [v, setV] = useState(1)
    const handleChange = (newCurrent: number) => {
        setV(newCurrent)
    }
    return (
        <>
            当前页面: {v}
            <br/>
            <br/>
            <Pagination total={1000} current={v} onChange={handleChange} showQuickJumper/>
            <br/>
            <br/>
            <Pagination total={1000} current={v} onChange={handleChange} simple/>
        </>
    )
}

export default Demo