import React from 'react';
import TaskTwo from './TaskTwo';

import {server} from './test/mocks/server';
import {describe, expect, it, waitFor, render} from './test';
import ToastProvider from './ToastContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PlaceholderAPI} from './constants';
import {rest} from 'msw';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: () => {},
  },
});

describe('TaskTwo', () => {
  it('should submit the form, successfully', async () => {
    const {getByRole, queryByText} = render(
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <TaskTwo />
        </QueryClientProvider>
      </ToastProvider>
    );

    const submit = getByRole('button', {
      name: /submit/i,
    });

    submit.click();

    await waitFor(() => queryByText(/user created/i));

    expect(queryByText(/user created/i)).toBeDefined();
  });

  it('should submit the form, and handle failure', async () => {
    server.use(
      rest.post(`${PlaceholderAPI}/users`, (_, res, ctx) => {
        return res.once(
          ctx.status(400),
          ctx.json({message: 'failed, this is a test'})
        );
      })
    );
    const {getByRole, queryByText} = render(
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <TaskTwo />
        </QueryClientProvider>
      </ToastProvider>
    );

    const submit = getByRole('button', {
      name: /submit/i,
    });

    submit.click();

    await waitFor(() => queryByText(/failed, this is a test/i));

    expect(queryByText(/failed, this is a test/i)).toBeDefined();
  });
});
