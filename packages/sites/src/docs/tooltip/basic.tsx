import { Tooltip, Button } from '@g-ui/components'
import { useEffect, useRef } from 'react'

const Demo = () => {
    // const ref = useRef()
    // useEffect(() => {
    //     console.log(ref.current);
    // }, [])
    return <Tooltip content="I am Tooltip Content">
        <Button type='primary'>Click me!</Button>
    </Tooltip>
}

export default Demo