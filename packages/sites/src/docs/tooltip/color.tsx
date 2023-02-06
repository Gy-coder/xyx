import { Button, Tooltip } from "@g-ui/components";
import "./index.css";


const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
];

const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const Demo = () => (
    <>
        {colors.map((color) => (
            <Tooltip content="prompt text" color={color} key={color}>
                <Button>{color}</Button>
            </Tooltip>
        ))}
        {customColors.map((color) => (
            <Tooltip content="prompt text" color={color} key={color}>
                <Button>{color}</Button>
            </Tooltip>
        ))}
    </>
);

export default Demo