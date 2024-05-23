import { render, screen } from '@/test-utils';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Navbar />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
