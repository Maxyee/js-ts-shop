import React, { Component } from 'react'
import styles from './stylesheets/loginsignin.module.sass'
import Base from './components/Base'
//import capitalizeString from './utils/capitalizeString'
import LoadingAnimation from '../../components/loadingAnimation'


export default class LoginSignin extends Component {
  
  render() {
    return (
      <div className={styles.outbox}>
        <div className={styles.box}>
          <Base/>
        </div>
      </div>
    )
  }
}
