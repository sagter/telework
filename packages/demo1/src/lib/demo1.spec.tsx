import { render } from '@testing-library/react';

import Demo1 from './demo1';

describe('Demo1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Demo1 />);
    expect(baseElement).toBeTruthy();
  });
});
