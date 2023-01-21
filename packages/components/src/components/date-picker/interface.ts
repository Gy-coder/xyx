export type valueType = string | number | Date | undefined
export interface DatePickerProps{
    allowClear?: boolean
    defaultValue?: valueType
    value?: valueType
    onChange?: (newValue: valueType) => void
    placeholder?: string
}