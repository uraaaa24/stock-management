import { NextPage } from 'next'
import Header from '../header'

type LayoutProps = {
    children: React.ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export const getDefaultLayout = (page: React.ReactElement) => {
    return <Layout>{page}</Layout>
}

export default Layout
