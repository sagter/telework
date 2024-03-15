import { Route, Link } from 'react-router-dom';

import styles from './demo3.module.css';

/* eslint-disable-next-line */
export interface Demo3Props {}

export function Demo3(props: Demo3Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Demo3!</h1>

      <ul>
        <li>
          <Link to="/">packages/demo3/src/lib/demo3 root</Link>
        </li>
      </ul>
      <Route path="/" element={<div>This is the packages/demo3/src/lib/demo3 root route.</div>} />
    </div>
  );
}

export default Demo3;
