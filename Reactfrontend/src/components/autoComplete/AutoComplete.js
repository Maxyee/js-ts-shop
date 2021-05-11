import React, { Component } from 'react'
import styles from './auto.module.sass'
export default class AutoComplete extends Component {
 
  render() {
    return (
      <div className={styles.outbox} style={this.props.style}>
        <input type="text" placeholder="Search"/>
        <div className={styles.sugges_outbox}>
              <div  className={styles.sugges_box}>
                <div className={styles.sugges_category}>
                  suggest category
                </div>
                <div className={styles.sugges_arr}>
                    <div>
                      value
                    </div>

                </div>
              </div>
        </div>
      </div>
    )
  }
}
