import { Menu } from '@g-ui/components'

const Demo = () => {
    return (
        <>
            <Menu horizontal>
                <Menu.Item index='0'>a</Menu.Item>
                <Menu.Item index='1'>b</Menu.Item>
                <Menu.Item index='2'>c</Menu.Item>
            </Menu>
            <br />
            <br />
            <Menu>
                <Menu.Item index='0'>a</Menu.Item>
                <Menu.Item index='1'>b</Menu.Item>
                <Menu.Item index='2'>c</Menu.Item>
            </Menu>
        </>
    )
}

export default Demo