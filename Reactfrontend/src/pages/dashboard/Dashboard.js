import React, { Component } from 'react';
import styles from './stylesheets/dashboard.module.sass'
import Header from '../../components/header/Header'
import Filter from './components/Filter'
import Product from './components/Product'
import LoadingAnimation from '../../components/loadingAnimation'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        if (!this.props.products) {
          this.props.getAllProducts()
        }
      }


    render() {
        const { products } = this.props
        return (
            <div className={styles.outbox}>
                <Header/>
                <div className={styles.box}>
                    {/* <LoadingAnimation/> */}
                    <div className={styles.filter}>
                        <Filter/>
                    </div>

                    <div className={`row ${styles.products}`}>
                    {products && products.map( p =>
                        <div 
                        key={p.title}
                        className={`col-6 col-sm-4 col-md-4 col-lg-3 my-3 ${styles.product}`}>
                            <Product
                                title={p.title}
                                price={`$${p.price} CAD`}
                                color={p.color}
                                image={p.imagePath}
                            />
                        </div>
                    )}
                    

                    </div>
                </div>
            </div>
        )
    }
}