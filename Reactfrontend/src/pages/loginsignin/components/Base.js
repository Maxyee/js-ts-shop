import styles from '../stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import Footer from './footer'

export default function Base(){
  return (
    <div className={styles.outbox}>
      <div className={styles.logo}>Zack Market</div>
      <div className={styles.title_style}>Title</div>
      <div className={styles.border_style}></div>

      <FormInput/>
 
      <Button/>
      <Footer/>
    </div>
  )
}