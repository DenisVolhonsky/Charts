import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

test('render TableHeader', () => {
  render(<TableHeader />);
  const tableHeader = screen.getByTestId('table-header');
  expect(tableHeader).toBeInTheDocument();
});

