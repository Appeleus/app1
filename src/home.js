import React from 'react'

export default function Home() {
    return (
        <p style = {{ textAlign:'center' }}>
        <h3>Welcome to Apple Store</h3>
        List <a href = "/products">Item</a> we are selling
        <br/>
        You need a <a href = "/member">Membership</a> to start ordering<br/>
        Questions? <a href = "/contact">Contact us!</a>
        </p>
    )
}