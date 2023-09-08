import React from 'react'
import { userContext } from './context'

export default function Content2() {
    let [user, setUser] = React.useContext(userContext);

    const contentStyle = {
        backgroundColor:"#ddd",
        textAlign:'center',
        margin: 10,
        padding: 10
    }

    const onClickSignIn = (event) => {
        event.preventDefault()
        setUser('Delicious Rinko')
    }
    
    return (
        <div style = {contentStyle}>
            {
                (user)
                ? <span> Hello {user} </span>
                : <span>Please <a href = " "
                onClick = {onClickSignIn}>Sign In</a></span>
            }
        </div>
    )
}