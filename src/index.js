import React from 'react';
import { Spin } from 'antd';
import styles from './index.css';

// loading components from code split
export default () => (
  <div className={styles['c-parent']}>
    <Spin className={styles['c-child']} />
  </div>
);
