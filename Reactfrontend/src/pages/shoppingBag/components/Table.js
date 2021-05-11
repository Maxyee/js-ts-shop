import React from 'react'
import { Table } from 'react-bootstrap'
import styles from '../stylesheets/table.module.sass'
import { Button } from 'react-bootstrap'

export default function BagTable() {
  return (
    <div className={styles.outbox}>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>id</th> */}
            <th>Photos</th>
            <th>Title</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className={styles.table_body}>

            <tr>
              {/* pic */}
              <td >
                <div className={styles.pic_outbox}>
                  <img src="{items[id].item.imagePath}" alt="" />
                </div>
              </td>
              {/* title */}
              <td >
                <div className={styles.title_outbox}>
                  <div className={styles.title}>
                    items[id].item.title
                  </div>
                  <div className={styles.id_title}>
                    id:
                </div>
                  <div className={styles.id}>
                    items[id].item._id
                  </div>
                </div>
              </td>
              {/* qty */}
              <td >
                <div className={styles.qty_outbox}>
                    <Button className={styles.btn}>
                        +
                    </Button>

                    <Button className={styles.btn}>
                        -
                    </Button>
                </div>
              </td>
              {/* price */}
              <td>items[id].price</td>
            </tr>

        </tbody>
      </Table>
    </div>
  )
}
