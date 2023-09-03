'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {useMemo, useState} from 'react';

interface Drink {
    name: string,
    price: number
}

export default function Home() {

    const [list, setList] = useState([] as Drink[])

    const price = useMemo(() => {
        let totalPrice = 0
        list.forEach((item) => {
            totalPrice += item.price
        })
        return totalPrice
    }, [list])

    function getAmountOfDrink(name: string): number {
        let amount = 0
        list.forEach((item) => {
            if (item.name === name) {
                amount++
            }
        })
        return amount
    }

    function formatPriceToEuro(price: number): string {
        return price.toFixed(2).replace('.', ',')
    }

    const drinks: Drink[] = [
        {
            name: "Flasche Wein 1L",
            price: 13,
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

        <div className={styles.container}>
            <h1 className={styles.title}>Drink Dashboard</h1>

            <div className={styles.itemContainer}>
                {drinks.map((drink, index) => (
                    <div className={styles.drink} key={index} onClick={() => {
                        setList([...list, drink])
                    }}>
                        <span className={styles.drinkName}>{drink.name}</span>
                        <span className={styles.drinkAmount}>{getAmountOfDrink(drink.name)}x</span>
                        <span className={styles.drinkPrice}>{drink.price}€</span>

                    </div>
                ))}
            </div>

            <div className={styles.selectedDrinks}>
                {list.map((drink, index) => (
                    <div className={styles.selectedDrink} key={index} onClick={() => {
                        setList(list.filter((item) => item.name !== drink.name))
                    }}>
                        <span className={styles.name}>{drink.name}</span>
                        <span className={styles.price}>{drink.price}€</span>
                    </div>
                ))}
            </div>

            <div className={styles.totalPrice}>
                Total Price: <span id="totalPrice">{formatPriceToEuro(price)}€</span>
            </div>
            <button className={styles.resetButton} onClick={() => {
                setList([])
            }}>Reset
            </button>
        </div>
    )
}
