import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import globalStyles from '../static/styles/index.css'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  
  render () {
    return (
      <html>
        <Head>
          <title>My page</title>
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <link href="//fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet" />
        </body>
      </html>
    )
  }
}