import { Route, Link } from 'react-router-dom';
import { subapp as demo1SubApp } from '../demo1';
import styles from './demo1.module.css';

const Demo1Component = demo1SubApp.Component as React.FunctionComponent;

/* eslint-disable-next-line */
export interface Demo1Props {}

export function Demo1(props: Demo1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Demo1!</h1>

      <ul>
        <li>
          <Link to="/">packages/demo1/src/lib/demo1 root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={
          <div>
            This is the packages/demo1/src/lib/demo1 root route. <Demo1Component />
          </div>
        }
      />
    </div>
  );
}

export default Demo1;
