import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'
import Banner from './banner'
import {Calculator2} from './calculator'

function App() {
  return (
  <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    <Banner/>
    <Calculator2/>
  </>
  )
}

export default App;
