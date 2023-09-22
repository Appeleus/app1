import React from 'react'

export function HeaderFunc() {
    const aStyle = {
        display: 'inline-block',
        color: 'blue',
        margin: '7px',
        textDecorration: 'none'
    }
    return (
        <div style = { {backgroundColor: '#ccc'} }>
            <a href = " " style={aStyle}>Home</a> |&nbsp;
            <a href = " " style={aStyle}>React</a> |&nbsp;
            <a href = " " style={aStyle}>React Native</a>
        </div>
    )
}

export function ContentFunc() {
    return (
        <div style = { {textAlign: 'center'} }>
            <h2>Hello<br/>React & React Native</h2>
            <br/><br/><br/>
        </div>
    )
}

export function FooterFunc() {
    return (
        <div style = { {textAlign: 'center'} }>
            &copy; {new Date().getFullYear()} All rights reserved
        </div>
    )
}