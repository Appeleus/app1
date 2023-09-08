import React from 'react'
// import { Header, Content, Footer } from './func-components'
// import Calendar from './class-components'
// import Banner from './banner'
// import {Calculator2} from './calculator'
// import {EventData1} from './event-data'
// import RefsFunc from './refs-func'
// import RefsArray from './refs-array'
// import MessageBox from './state-func'
// import { showEverything } from './test-func'
import { userContext } from './context'
import Header from './context-header'
import Content from './context-content'
import Header2 from './context-header2'
import Content2 from './context-content2'


function App() {
  let [user, setUser] = React.useState('')
  return (
    <userContext.Provider value={[user, setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
  )
}

export default App;
