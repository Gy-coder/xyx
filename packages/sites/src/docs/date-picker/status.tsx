import { DatePicker } from '@g-ui/components'

const Demo = () => {
    return <>
        error状态: <DatePicker onChange={(newValue, valueString) => console.log(newValue, valueString)} status="error" />
        <br />
        <br />
        warning状态: <DatePicker onChange={(newValue, valueString) => console.log(newValue, valueString)} status="warning" />

    </>
}

export default Demo