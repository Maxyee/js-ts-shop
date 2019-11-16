import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import styles from '../stylesheets/header.module.sass';

export default class UserHeader extends Component {
  render() {
    return (
      <div className={styles.outbox}>
            <div>
                CART
            </div>

            <div>
                <NavDropdown>
                    <NavDropdown.item>
                        logout
                    </NavDropdown.item>
                </NavDropdown>
            </div>

            <div>
                <div>
                    Login
                </div>
            </div>
      </div>
      
    );
  }
}
