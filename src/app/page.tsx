'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(0)

  return (

    <div className="{styles.container}">
      <h1>Drink Dashboard</h1>
      <div className="{styles.drink-option}">
        <span className="{styles.drink-name}">Cola / Frucade</span>
        <span className="{styles.drink-price}">3.50€</span>
        <button className="{styles.select-button}" onClick={() => setCount(count + 3.50)}>Select</button>
      </div>
      <div className="{styles.drink-option}">
        <span className="{styles.drink-name}">Spezi</span>
        <span className="{styles.drink-price}">2.50€</span>
        <button className="{styles.select-button}" onClick={() => setCount(count + 2.50)}>Select</button>
      </div>
      <div className="{styles.drink-option}">
        <span className="{styles.drink-name}">Apfelschorle</span>
        <span className="{styles.drink-price}">3.00€</span>
        <button className="{styles.select-button}" onClick={() => setCount(count + 3.00)}>Select</button>
      </div>
      <div className="{styles.drink-option}">
        <span className="{styles.drink-name}">Sprudel</span>
        <span className="{styles.drink-price}">2.50€</span>
        <button className="{styles.select-button}" onClick={() => setCount(count + 2.50)}>Select</button>
      </div>
      <div className="{styles.drink-option}">
        <span className="{styles.drink-name}">Pfand</span>
        <span className="{styles.drink-price}">2.00€</span>
        <button className="{styles.select-button}" onClick={() => setCount(count + 2.00)}>Select</button>
      </div>
      <div className="{styles.total-price}">
        Total Price: <span id="{styles.totalPrice}">{count}€</span>
      </div>
      <button className="{styles.select-button}" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
