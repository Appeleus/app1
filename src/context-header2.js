import React from 'react'
import {userContext} from './context'

export default class Header2 extends React.Component {
    static contextType = userContext
    render() {
        let [user, setUser] = this.context;

        const headerStyle = {
            backgroundColor:"#f75f85",
            textAlign:'center',
            padding: 5
        }

        const onClickSignOut = (event) => {
            event.preventDefault()
            setUser('')
        }

        const onClickSignIn = (event) => {
            event.preventDefault()
            setUser('Delicious Rinko')
        }

        return (
            <div style = {headerStyle}>
                <a href= " ">Home</a>&nbsp;-&nbsp;
                <a href= " ">Product</a>&nbsp;-&nbsp;
                <a href= " ">Contact Us</a>&nbsp;-&nbsp;&nbsp;
                {
                    (user)
                    ? <span>[{user}&nbsp;:&nbsp;
                    <a href = " " onClick = 
                    {onClickSignOut}>Sign Out</a>]</span>
                    : <span>[<a href = " " onClick = 
                        {onClickSignIn}>Sign In</a>]</span>
                }
            </div>
        )
    }
}