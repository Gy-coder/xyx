import { Tooltip, Button } from '@g-ui/components'
import "./index.css";


const text = "prompt text"
const buttonWidth = 70;

const Demo = () => {
    return <>
        <div>
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                <Tooltip placement="topLeft" content={text}>
                    <Button style={{ height: 64, width: 64 }}>TL</Button>
                </Tooltip>
                <Tooltip placement="top" content={text}>
                    <Button style={{ height: 64, width: 64 }}>Top</Button>
                </Tooltip>
                <Tooltip placement="topRight" content={text}>
                    <Button style={{ height: 64, width: 64 }}>TR</Button>
                </Tooltip>
            </div>
            <div style={{ width: buttonWidth, float: 'left' }}>
                <Tooltip placement="leftTop" content={text}>
                    <Button style={{ height: 64, width: 64 }}>LT</Button>
                </Tooltip>
                <Tooltip placement="left" content={text}>
                    <Button style={{ height: 64, width: 64 }}>Left</Button>
                </Tooltip>
                <Tooltip placement="leftBottom" content={text}>
                    <Button style={{ height: 64, width: 64 }}>LB</Button>
                </Tooltip>
            </div>
            <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
                <Tooltip placement="rightTop" content={text}>
                    <Button style={{ height: 64, width: 64 }}>RT</Button>
                </Tooltip>
                <Tooltip placement="right" content={text}>
                    <Button style={{ height: 64, width: 64 }}>Right</Button>
                </Tooltip>
                <Tooltip placement="rightBottom" content={text}>
                    <Button style={{ height: 64, width: 64 }}>RB</Button>
                </Tooltip>
            </div>
            <div
                style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}
            >
                <Tooltip placement="bottomLeft" content={text}>
                    <Button style={{ height: 64, width: 64 }}>BL</Button>
                </Tooltip>
                <Tooltip placement="bottom" content={text}>
                    <Button style={{ height: 64, width: 64 }}>Bottom</Button>
                </Tooltip>
                <Tooltip placement="bottomRight" content={text}>
                    <Button style={{ height: 64, width: 64 }}>BR</Button>
                </Tooltip>
            </div>
        </div>
    </>
}

export default Demo