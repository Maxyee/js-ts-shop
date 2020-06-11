import React from 'react'
import styles from '../stylesheets/table.module.sass'

export default function CheckoutTable({ items }) {
  return (
    <div className={styles.outbox}>

        <div className={styles.row}>
          <div className={styles.pic}>
            <img src="{items[i].item.imagePath}" alt="" />
          </div>
          <div className={styles.title}>
            item title
          </div>
          <div className={styles.price}>
            price X quantitiy
          </div>
        </div>

    </div>
  )
}
