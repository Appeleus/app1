import React, {useState} from 'react'

export default function MessageBox() {
    let [text, setText] = useState('Hello World')
    let [size, setSize] = React.useState(16)

    const onClickSetText = () => {
        let t = prompt('Please set a message')
        if (t) {
            setText(t)
        }
    }

    const onClickZoomIn = () => {
        let newSize = size + 1
        setSize(newSize)
    }

    let msgboxStyle = {
        display: 'inline-block',
        idth: 350,
        fontSize: size,
        backgroundColor: '#ccc',
        padding: 5,
        textAlign: 'left'
    }

    return (
        <div style = {{ textAlign:'center', marginTop:20}}>
            <div style = { msgboxStyle }>{text}</div><br/><br/>
            <button onClick = {onClickSetText}>Message</button>&nbsp;
            <button onClick = {onClickZoomIn}>Increase size</button>&nbsp;
            <button onClick = { () => setSize(size - 1)}>Decrease size</button>
        </div>
    )
}