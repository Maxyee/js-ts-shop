import React, { Component } from 'react';
import styles from './stylesheets/dashboard.module.sass'
import Header from '../../components/header/Header'

export default class Dashboard extends Component {
    render() {
        return (
            <div className={styles.outbox}>
                <div className={styles.box}>
                    <Header/>
                    <div className={styles.filter}>

                    </div>

                    <div className={`row ${styles.products}`}>

                    </div>
                </div>
            </div>
        )
    }
}