import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'

function App() {
  return (
  <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    <Banner/>
  </>
  )
}

export default App;
