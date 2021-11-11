import { GlobalStyle } from '@styles/index.js'

function Application({ Component, pageProps }) {
  return (<>
  <GlobalStyle />
  <Component {...pageProps} />
  </>)
}

export default Application
