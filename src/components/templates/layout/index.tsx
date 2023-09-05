import { NextPage } from "next"
import Header from "../header"

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

export default Layout
