import React, { Component } from 'react';
import styles from './stylesheets/dashboard.module.sass'
import Header from '../../components/header/Header'
import Filter from './components/Filter'
import Product from './components/Product'
import LoadingAnimation from '../../components/loadingAnimation'

export default class Dashboard extends Component {
    render() {
        return (
            <div className={styles.outbox}>
                <Header/>
                <div className={styles.box}>
                    {/* <LoadingAnimation/> */}
                    <div className={styles.filter}>
                        <Filter/>
                    </div>

                    <div className={`row ${styles.products}`}>

                    <div className={`col-6 col-sm-4 col-md-4 col-lg-3 my-3 ${styles.product}`}>
                        <Product/>
                    </div>

                    </div>
                </div>
            </div>
        )
    }
}