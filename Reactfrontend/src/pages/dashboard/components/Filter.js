import React, { Component } from 'react'
import Checkbox from './Checkbox'
import styles from '../stylesheets/filter.module.sass'
//import generateFilterString from '../utils/generateFilterString'
import device, { size } from '../../../modules/mediaQuery'
import MediaQuery from 'react-responsive'
import Filter_md from './Filter_md'

export default class Filter extends Component {

  render() {
    return (
      <div>
        <MediaQuery query={device.min.tablet}>
          <div className={styles.outbox}>
            <div className={styles.box}>
              <div className={styles.title}>
                FILTERS
          <div className={styles.title_border}></div>
              </div>
              <div className={styles.content}>
                {/* order */}
                <div className={styles.block}>
                  <div className={styles.sub_title}>
                    ORDER
                  </div>
                    <Checkbox />
                </div>
                {/* department */}
                <div className={styles.block}>
                  <div className={styles.sub_title}>
                    DEPARTMENT
                  </div>
                    <Checkbox/>
                </div>
                {/* price */}
                <div className={styles.block}>
                  <div className={styles.sub_title}>
                    PRICE
                  </div>
                    <Checkbox/>
                </div>
              </div>
              <div className={styles.clear_btn} onClick={this.clearAllFilter}>
                <button>Clear All</button>
              </div>
              {/* filter tags */}
                <div className={styles.tags}>
                      <div className={styles.tag}>
                        <div className={styles.tag_content}>
                          tag content
                        </div>
                        <div className={styles.tag_close}>
                          x
                      </div>
                </div>

              </div>
            </div>
          </div>
        </MediaQuery >
        <MediaQuery query={device.max.tablet}>
          <Filter_md/>
        </MediaQuery>
      </div >
    )
  }
}

