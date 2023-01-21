import {Checkbox, Pagination} from '@g-ui/components'
import {useState} from "react";

const Demo = () => {
    const [checked, setChecked] = useState(false)
    return (
        <>
            <Checkbox checked={checked}
                      onChange={(event) => setChecked(event.target.checked)}
            >
                hideOnSinglePage
            </Checkbox>
            <br />
            <br />
            <Pagination hideOnSinglePage={checked}/>
            <br/>
            <br/>
            <Pagination hideOnSinglePage={checked} simple />
        </>
    )
}

export default Demo