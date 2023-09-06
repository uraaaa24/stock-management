import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return <>{getLayout(<Component {...pageProps} />)}</>
}
