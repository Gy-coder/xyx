import { Menu } from '@g-ui/components'

const Demo = () => {
    return (
        <>
            <Menu horizontal>
                <Menu.Item>a</Menu.Item>
                <Menu.Item>b</Menu.Item>
                <Menu.Item>c</Menu.Item>
            </Menu>
            <br />
            <br />
            <Menu>
                <Menu.Item>a</Menu.Item>
                <Menu.Item>b</Menu.Item>
                <Menu.Item>c</Menu.Item>
            </Menu>
        </>
    )
}

export default Demo