import React from 'react'
import styles from '../stylesheets/checkbox.module.sass'

export default function Checkbox({ onChange, name, category, isChecked }) {
  return (
    <div className={styles.outbox}>
      <input type="checkbox"/>
      <label>
        <div className={styles.checkbox} ></div>
        Name
      </label>
    </div>
  )
}