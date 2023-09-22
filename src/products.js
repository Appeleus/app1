import React from 'react'
import './products.css'

export default class Product extends React.Component{
    data = [
        ['Milk Tea', 500],
        ['Cha Tea', 650],
        ['Milky Bread', 450],
        ['Sticky Rice Mango', 300],
        ['Express Delivery', 650]
    ]
    render() {
        return (
            <table border="1">
                <tr><th>Name</th><th>Price</th></tr>
                {
                    this.data.map(d => {
                        return <tr><td>{d[0]}</td><td>{d[1]}</td></tr>
                    })
                }
            </table>
        )
    }
}