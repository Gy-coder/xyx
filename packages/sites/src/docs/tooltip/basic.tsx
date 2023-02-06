import { Tooltip, Button } from '@g-ui/components'

const Demo = () => {

    return <>
        <Tooltip content="I am Tooltip Content" color="#fec1cc" placement='topLeft'>
            <Button>Click me!</Button>
        </Tooltip>
        <Tooltip content="I am Tooltip Content" placement="bottom">
            <Button type='primary'>Click me!</Button>
        </Tooltip>
        <Tooltip content="I am Tooltip Content" placement="left">
            <Button type='primary' size='small'>Click me!</Button>
        </Tooltip>
        <Tooltip content="I am Tooltip Content" placement="topRight">
            <Button type='primary' size='large'>Click me!</Button>
        </Tooltip>
    </>
}

export default Demo