import { render } from '@testing-library/react';

import Demo3 from './demo3';

describe('Demo3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Demo3 />);
    expect(baseElement).toBeTruthy();
  });
});
