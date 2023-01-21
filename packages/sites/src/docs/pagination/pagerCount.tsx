import {Pagination} from '@g-ui/components'

const Demo = () => {
    return (
        <>
            <Pagination total={100} pagerCount={3}/>
            <br/>
            <br/>
            <Pagination total={100} pagerCount={5}/>
            <br/>
            <br/>
            <Pagination total={100} />
        </>
    )
}

export default Demo