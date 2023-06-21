import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchTickets } from '../../api/ticketsAPI';
import { Ticket } from '../../types';

interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  error: string | null;
}

const initialState: TicketsState = {
  tickets: [],
  loading: false,
  error: null,
};

export const fetchTicketsAsync = createAsyncThunk('tickets/fetchTickets', async () => {
  const response = await fetchTickets();
  return response;
});

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTicketsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTicketsAsync.fulfilled, (state, action: PayloadAction<Ticket[]>) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchTicketsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch tickets';
      });
  },
});

export default ticketsSlice.reducer;
