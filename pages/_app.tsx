import 'antd/dist/antd.css'
import '../styles/styles.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import AppLayout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AppLayout>
  )
}

export default MyApp
