import React from 'react'

export default class simpleFunction extends React.Component {

    ShowEverything() {
        let a = "This is a text"
        let b = 21
        return `${a} and ${b}`
    }

    render() {
        return <div>{this.showEverything()}</div>
    }



}