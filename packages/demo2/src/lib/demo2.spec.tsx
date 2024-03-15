import { render } from '@testing-library/react';

import Demo2 from './demo2';

describe('Demo2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Demo2 />);
    expect(baseElement).toBeTruthy();
  });
});
