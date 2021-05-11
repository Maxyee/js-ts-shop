import { Dropdown, DropdownButton } from 'react-bootstrap'
import React from 'react'
import styles from '../stylesheets/sizes.module.sass'
export default function Sizes() {
  return (
    <div>
      <DropdownButton className={styles.btn}>
        <Dropdown.Item className={styles.item}>Drop down Item</Dropdown.Item>
      </DropdownButton>
    </div>
  )
}