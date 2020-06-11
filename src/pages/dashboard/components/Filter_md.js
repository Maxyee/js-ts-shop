import React, { Component } from 'react'
import styles from '../stylesheets/filter_md.module.sass'
import Selection from './Selection'
import SubSelection from './SubSelection'

export default class Filter_md extends Component {
  render() {
    return (
      <div className={styles.outbox}>
        <div className={styles.panels}>
          <div className={`${styles.panel} ${styles.show_panel}`}>
            <div>Close Filter </div>
            <div>Show Filter</div>
          </div>
          <div className={`${styles.panel} ${styles.close_panel}`}>
            Clear Filter
         </div>
        </div>
        <div className={`${styles.content} ${this.state.isShow && styles.show_content}`}>
          {/* order */}
          <div className={styles.order_box}>
            <div className={styles.head_title}>
              <img src="" alt="" />
              <div className={styles.head_title_text}>
                ORDER
          </div>
            </div>
            <div className={styles.box}>
                  <Selection/>
            </div>
          </div>
          {/* filter */}
          <div className={styles.filter_box}>
            <div className={styles.head_title}>
              <img src="" alt="" />
              <div className={styles.head_title_text}>
                FILTER
            </div>
            </div>
            <div className={styles.box}>
              {/* department */}
              <div className={styles.selection}>
                <Selection/>
                <div className={styles.sub_selection}>
                  <SubSelection/>
                </div>
              </div>
              {/* price */}
              <div className={styles.selection}>
                <Selection/>
                <div className={styles.sub_selection}>
                  <SubSelection/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

