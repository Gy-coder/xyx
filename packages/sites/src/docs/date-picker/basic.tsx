import { DatePicker } from '@g-ui/components'

const Demo = () => {
    return <DatePicker onChange={(newValue, valueString) => console.log(newValue, valueString)} picker="month" />
}

export default Demo