import React from 'react'
import styles from '../stylesheets/menu.module.sass'
import DropList from './DropList'

export default function Menu() {
  return (
    <div className={styles.outbox}>
      {/* lists */}
      <div className={`${styles.lists}`}>
        {/* departments */}

          <div className={styles.tag}>
            <DropList/>
          </div>
        )
      </div>
      {/* all product */}
      <div className={styles.tag}>
        All Product
      </div>
    </div>
  )
}
