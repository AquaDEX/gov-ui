import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from '../components/layout'
import { Seo } from '../components/layout/Seo'
import { useIsMounted } from '../hooks/useIsMounted'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()

  return (
    <>
      <ChakraProvider>
        <Seo />
        {isMounted && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ChakraProvider>
    </>
  )
}
