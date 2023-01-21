import {Pagination} from '@g-ui/components'

const Demo = () => {
    return (
        <>
            <Pagination total={100} showQuickJumper mini/>
            <br/>
            <br/>
            <Pagination total={100} showQuickJumper />
        </>
    )
}

export default Demo;