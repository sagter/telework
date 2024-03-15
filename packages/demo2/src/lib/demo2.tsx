import { Route, Link } from 'react-router-dom';

import styles from './demo2.module.css';

/* eslint-disable-next-line */
export interface Demo2Props {}

export function Demo2(props: Demo2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Demo2!</h1>

      <ul>
        <li>
          <Link to="/">packages/demo2/src/lib/demo2 root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the packages/demo2/src/lib/demo2 root route.</div>} />
    </div>
  );
}

export default Demo2;
