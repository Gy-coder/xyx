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
                    <Menu.SubMenu title='python'>
                        <Menu.Item>python2</Menu.Item>
                        <Menu.Item>python3</Menu.Item>
                        <Menu.SubMenu title='python backend frame'>
                            <Menu.Item>
                                <a href="https://www.djangoproject.com/" target="_blank">Django</a>
                            </Menu.Item>
                            <Menu.Item>Flask</Menu.Item>
                        </Menu.SubMenu>
                    </Menu.SubMenu>
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