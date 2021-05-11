import React, {Component} from 'react'
import styles from './stylesheets/header.module.sass'
import MediaQuery from 'react-responsive'
import Search from './components/Search'
import device, { size } from '../../modules/mediaQuery'
import Menu from './components/Menu'

export default class Header extends Component{
    render(){
        let visibility = "hide"
        return(
            <div className={styles.outbox}>
        {/* larger than 768px */}
        <MediaQuery query={device.min.tablet}>
          {/* top user header */}
          <div className={styles.user_header}>

          </div>
          {/* menu header */}
          <div className={styles.content}>
            <div className={styles.left}>
              {/* logo */}
              <div className={styles.logo}>
                Zack Market
              </div>
            </div>
            <div className={styles.mid}>
              <Menu/>
            </div>
            <div className={styles.right}>
              <Search/>
            </div>
          </div>
        </MediaQuery>
        {/* smaller than 768px */}
        <MediaQuery query={device.max.tablet}>
          <div className={styles.content}>
            <div className={`${styles.toggle_outbox}`}>
              {/* toggle content */}
              <div id="toggle" className={styles[`${visibility}`]}>
                <div className={styles.toggle_content}>
                  <div className={styles.side_title}>
                    MENU
                    <div className={styles.side_title_close}>
                      x
                    </div>
                  </div>
                  <Search/>
                  <div className={styles.side_title}>
                    CATEGORY
                  </div>
                  <Menu/>
                  <div className={styles.side_title}>
                    CART
                  </div>
                  <div
                    className={styles.side_content}
                  >
                    Shopping Bag
                  </div>
                  <div className={styles.side_title}>
                    USER
                  </div>
                  <div className={styles.side_content}>
                    Login
                  </div>
                  <div className={styles.side_content}>
                    Logout
                  </div>
                </div>
              </div>
              {/* toggle icon */}
              <div className={`${styles.toggle_icon} ${styles[`${visibility}`]}`}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
              </div>
            </div>
            {/* logo */}
            <div className={styles.logo}>
              Zack Market
            </div>
          </div>
        </MediaQuery>
      </div >
        )
    }
}