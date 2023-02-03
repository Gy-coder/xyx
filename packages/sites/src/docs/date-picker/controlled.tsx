import { DatePicker } from '@g-ui/components'
import { useState } from 'react'

const Demo = () => {
    const [v, setV] = useState<Date>()
    return <>
        你选择的时期:{v && String(v)}
        <br />
        <br />
        <DatePicker value={v} onChange={(newDate) => setV(newDate)} />
    </>
}

export default Demo