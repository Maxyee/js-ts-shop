import React from 'react'
import Header from '../../components/header/Header'
import styles from './stylesheets/shoppingBag.module.sass'
import { Button } from 'react-bootstrap'
import Table from './components/Table'
//import jumpTo from '../../modules/Navigation'


export default function ShoppingBag() {

  return (
    <div className={styles.outbox}>
      <Header />
      <div className={styles.box}>
        <div className={styles.content}>
          {/* <div className={styles.title.concat(" my-2")}> */}
          <div>
            Shopping Bag
          </div>
          <div className={styles.table}>
            <Table/>
          </div>
          <div className={styles.process_box}>
            <div className={styles.total}>
              Total: $totalPrice
            </div>
            <div className="my-3">
              <Button>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
