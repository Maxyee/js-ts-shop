import React, { Component } from 'react'
//import mapSearchURL from './utils/mapSearchURL'
//import jumpTo from '../../modules/Navigation'
import Header from '../../components/header/Header'
import checkMark from '../../assets/images/checkmark.svg'
import styles from './stylesheets/checkoutSuccess.module.sass'
export default class CheckoutSuccess extends Component {

  render() {
    return (
      <div className={styles.outbox}>
        <Header />

          <div className={styles.box}>
            <div className={styles.checkMark}>
              <div className={styles.pic}>
                <img src={checkMark} alt="" />
              </div>
              <div className={styles.text}>
                Thank you for your pruchase!
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.info}>
                <div className={styles.order}>
                  <div className={styles.title}>
                    Your order number is: </div>
                  <div className={styles.num}>
                    payment cart
                  </div>
                </div>
                <div className={styles.address}>
                  <div className={styles.title}>
                    Billing & Shipping information:
                  </div>
                 
                    <div>
                      payment shipping address
                    </div>

                </div>
              </div>
              <div className={styles.btn}>
                <button> Continue Shopping</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

