import React, { Component } from 'react'
import styles from './stylesheets/checkout.module.sass'
import CheckoutTable from './components/CheckoutTable'
import Subtotal from './components/Subtotal'
import Header from '../../components/header/Header'
export default class Checkout extends Component {

  
  render() {
    return (
      <div className={styles.outbox}>
        <Header />
        <div className={styles.box}>
          <div className={styles.content}>
            {/* title */}
            <div className={styles.title}>
              Checkout
            <div className={styles.sub_title}>
                Hi <b>username</b> Please review your items and press the confirm checkout button. You will enter your address information while your paying on PayPal
              </div>
            </div>
            {/* table */}

              <div>
                <div className={styles.table}>
                  <CheckoutTable/>
                </div>
                {/* prices */}
                <div className={styles.prices}>
                  <Subtotal/>
                </div>
              </div>

            {/* button */}
            <div className={styles.btn}>
              <button><a href="call">confirm checkout</a></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

