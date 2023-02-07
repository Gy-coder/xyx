import { Menu } from '@g-ui/components'

const Demo = () => {
    return (
        <>
            <Menu horizontal>
                <Menu.Item>首页</Menu.Item>
                <Menu.Item>组件</Menu.Item>
                <Menu.Item>Github</Menu.Item>
                <Menu.SubMenu title='other'>
                    <Menu.Item>Java</Menu.Item>
                    <Menu.Item>JavaScript</Menu.Item>
                    <Menu.Item>TypeScript</Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <br />
            <br />
            <Menu>
                <Menu.Item>DropDown 下拉菜单</Menu.Item>
                <Menu.Item>Menu 导航菜单</Menu.Item>
                <Menu.Item>Button 按钮</Menu.Item>
            </Menu>
        </>
    )
}

export default Demo