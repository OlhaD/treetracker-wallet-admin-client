import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import AuthProvider from '../../store/AuthProvider';
import SendTokens from './SendTokens';
import apiClient from '../../utils/apiClient';
import theme from '../../components/UI/theme';

jest.mock('../../utils/apiClient', () => {
  get: jest.fn();
});

const TestWrapper = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>{props.children}</AuthProvider>
      </Router>
    </ThemeProvider>
  );
};

describe('Send Tokens page', function () {
  beforeEach(() => {
    localStorage.setItem(
      'wallet',
      JSON.stringify({
        id: '9d6c674f-ae62-4fab-8d14-ae5de9f14ab8',
        wallet: 'test wallet',
      })
    );
  });

  afterEach(() => {
    localStorage.removeItem('wallet');
  });

  it('renders form correctly', async () => {
    // apiClient.get.mockResolvedValueOnce({ data: mockTransfersData });

    render(
      <TestWrapper>
        <SendTokens />
      </TestWrapper>
    );

    expect(await screen.findByTestId('send-token-form')).toBeInTheDocument();
    expect(await screen.findByTestId('token-amount')).toBeInTheDocument();
    expect(await screen.findByTestId('sender-wallet')).toBeInTheDocument();
    expect(await screen.findByTestId('receiver-wallet')).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getAllByRole('row')).toHaveLength(3 + 1);
    // });
  });
});
