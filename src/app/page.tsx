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
        <span className="drink-name">Cola / Frucade</span>
        <span className="drink-price">3.50€</span>
        <button className="select-button" onClick={() => setCount(count + 3.50)}>Select</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Spezi</span>
        <span className="drink-price">2.50€</span>
        <button className="select-button" onClick={() => setCount(count + 2.50)}>Select</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Apfelschorle</span>
        <span className="drink-price">3.00€</span>
        <button className="select-button" onClick={() => setCount(count + 3.00)}>Select</button>
      </div>
      <div className="drink-option">
        <span className="drink-name">Sprudel</span>
        <span className="drink-price">2.50€</span>
        <button className="select-button" onClick={() => setCount(count + 2.50)}>Select</button>
      </div>
      <div className="total-price">
        Total Price: <span id="totalPrice">{count}€</span>
      </div>
    </div>
  )
}
