type valueType = string | number | Date
export interface DatePickerProps{
    allowClear?: boolean
    defaultValue?: valueType
    value?: valueType
    onChange?: (newValue: valueType) => void
}