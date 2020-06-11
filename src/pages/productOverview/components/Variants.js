import React from 'react'
import styles from '../stylesheets/variants.module.sass'
import Sizes from '../components/Sizes'


export default function Variants() {
  return (
    <div>
      <div className={styles.color_title}>
        COLOUR:
    </div>
      <div className={styles.color_name}>
        color
      </div>
      <div className={styles.color_pic}>

          <img src="this is source" alt="" />

      </div>
      <div className={styles.sizes}>
        <div className={styles.size_title}>
          SIZES:
        </div>
        <div className={styles.size_name}>
          <Sizes/>
        </div>
      </div>
    </div>
  )
}



