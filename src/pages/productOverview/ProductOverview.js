import React, { Component } from 'react'
import styles from './stylesheets/productOverview.module.sass'
import { Button } from 'react-bootstrap'
import Header from '../../components/header/Header'
import Variants from './components/Variants'
//import mergeProductAndVariants from './utils/mergeProductAndVariants'
//import jumpTo from '../../modules/Navigation'

export default class ProductOverview extends Component {
 
  render() {
    return (
      <div className={styles.outbox}>
        <Header />

          <div className={styles.content_box}>
            <div className={styles.content}>
              {/* left image */}
              <div className={styles.image}>
                <img src="load image here" alt="" />
              </div>
              {/* right content box */}
              <div className={styles.context_outbox}>
                <div className={styles.context}>
                  {/* top descriptions */}
                  <div className={styles.title}>
                    product title
                  </div>
                  <div className={styles.description}>
                    product description
                  </div>
                  <div className={styles.price}>
                    $CAD
                  </div>
                  {/* dotted border */}
                  <div className={styles.border}></div>
                  {/* bottom descriptions */}
                  <div className={styles.variants}>
                    <Variants/>
                  </div>
                  <div className={styles.btns}>
                    <Button className={styles.btn}>Add to Bag</Button>
                    <Button className={styles.btn}>Buy Now</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
    )
  }
}
