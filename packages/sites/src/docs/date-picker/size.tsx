import { DatePicker } from '@g-ui/components'

const Demo = () => {
    return <>
        small: <DatePicker size="small" onChange={(newValue, valueString) => console.log(newValue, valueString)} />
        <br />
        <br />
        middle: <DatePicker size="middle" onChange={(newValue, valueString) => console.log(newValue, valueString)} />
        <br />
        <br />
        large: <DatePicker size="large" onChange={(newValue, valueString) => console.log(newValue, valueString)} />
    </>
}

export default Demo