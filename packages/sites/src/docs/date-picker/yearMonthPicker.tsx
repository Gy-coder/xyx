import { DatePicker } from '@g-ui/components'

const Demo = () => {
    return <>
        月份选择: <DatePicker onChange={(newValue, valueString) => console.log(newValue, valueString)} picker="month" />
        <br />
        <br />
        年份选择: <DatePicker onChange={(newValue, valueString) => console.log(newValue, valueString)} picker="year" />

    </>
}

export default Demo