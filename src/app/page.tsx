'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(0)

  return (

    <div className="container">
      <h1>Drink Dashboard</h1>
      <div className="drink-option">
        <span className="drink-name">Flasche Wein 1L</span>
        <span className="drink-price">13€</span>
        <button className="select-button" onClick={() => setCount(count + 13)}>Add</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Wein 1/4 L</span>
        <span className="drink-price">3.50€</span>
        <button className="select-button" onClick={() => setCount(count + 3.50)}>Add</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Schorle 1/4 L</span>
        <span className="drink-price">3.00€</span>
        <button className="select-button" onClick={() => setCount(count + 3.00)}>Add</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Cola / Frucade 0,33 L</span>
        <span className="drink-price">2.50€</span>
        <button className="select-button" onClick={() => setCount(count + 2.50)}>Add</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Spezi 0.5L</span>
        <span className="drink-price">3.00€</span>
        <button className="select-button" onClick={() => setCount(count + 3.00)}>Add</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Apfelsaft Schorle 0.5L</span>
        <span className="drink-price">3.00€</span>
        <button className="select-button" onClick={() => setCount(count + 3.00)}>Add</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Sprudel 0.5L süß / sauer</span>
        <span className="drink-price">2.50€</span>
        <button className="select-button" onClick={() => setCount(count + 2.50)}>Add</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Pfand</span>
        <span className="drink-price">2.00€</span>
        <button className="select-button" onClick={() => setCount(count + 2.00)}>Add</button>
      </div>
      <div className="total-price">
        Total Price: <span id="totalPrice">{count}€</span>
      </div>
      <button className="select-button" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
