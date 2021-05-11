import React from 'react'
import styles from '../stylesheets/search.module.sass'
import AutoComplete from '../../autoComplete/AutoComplete'
export default function Search({
  search,
  onChange,
  handleSuggest,
  input_value
}) {
  return (
    <div className={styles.outbox}>
      {/* search input */}
        <div className={styles.auto}>
          <AutoComplete/>
        </div>
        <div className={styles.btn}>
          <button>
            Search
          </button>
        </div>
    </div>
  )
}