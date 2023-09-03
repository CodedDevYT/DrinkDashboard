'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useState} from 'react';

export default function Home() {

    const [count, setCount] = useState(0)
    const [list, setList] = useState("")

    const drinks = [
        {
            name: "Flasche Wein 1L",
            price: 13
        },
        {
            name: "Wein 1/4 L",
            price: 3.50
        },
        {
            name: "Schorle 1/4 L",
            price: 3.00
        },
        {
            name: "Cola / Frucade 0,33 L",
            price: 2.50
        },
        {
            name: "Spezi 0.5L",
            price: 3.00
        },
        {
            name: "Apfelsaft Schorle 0.5L",
            price: 3.00
        },
        {
            name: "Sprudel 0.5L süß / sauer",
            price: 2.50
        },
        {
            name: "Pfand",
            price: 2.00
        }
    ]

    return (

        <div className="container">
            <h1>Drink Dashboard</h1>

            <div className="itemContainer">
                {drinks.map((drink, index) => (
                    <div className="drink" key={index} onClick={() => {
                        setCount(count + drink.price)
                        setList(list + drink.name + " & ")
                    }}>
                        <span className="drink-name">{drink.name}</span>
                        <span className="drink-price">{drink.price}€</span>

                    </div>
                ))}
            </div>

            <p className='items'>{list}</p>

            <div className="total-price">
                Total Price: <span id="totalPrice">{count}€</span>
            </div>
            <button className="select-button" onClick={() => {
                setCount(0)
                setList("")
            }}>Reset
            </button>
        </div>
    )
}
