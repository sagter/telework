import { React, createDynamicComponent } from '@xarc/react';
import { Link, Route, Routes } from '@xarc/react-router';

import electrodePng from '../../static/electrode.png';
import { message } from './message';

export const Demo1 = createDynamicComponent(
  {
    name: 'demo1',
    getModule: () => import('@telework/demo1'),
  },
  { ssr: true },
);
export const Demo2 = createDynamicComponent(
  {
    name: 'demo2',
    getModule: () => import('@telework/demo2'),
  },
  { ssr: true },
);
export const Demo3 = createDynamicComponent(
  {
    name: 'demo3',
    getModule: () => import('@telework/demo3'),
  },
  { ssr: true },
);

export const Original = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        <a href="https://www.electrode.io">
          Electrode <img src={electrodePng} />
        </a>
      </h1>
      <p>{message}</p>
      <p>props: {JSON.stringify(props)}</p>
      <h1>Demo1 subapp as a dynamic component in Home</h1>
      <div role="navigation">
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo1">Demo1</Link>
          </li>
          <li>
            <Link to="/demo2">Demo2</Link>
          </li>
          <li>
            <Link to="/demo3">Demo3</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/demo1" element={<Demo1 />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/demo3" element={<Demo3 />} />
      </Routes>
    </div>
  );
};
