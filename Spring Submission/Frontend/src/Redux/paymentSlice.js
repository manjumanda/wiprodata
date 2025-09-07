import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPayments, addPayment, updatePayment, deletePayment } from "../Services/api";

export const fetchPayments = createAsyncThunk(
  "payments/fetchPayments",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getPayments();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch payments");
    }
  }
);

export const createPayment = createAsyncThunk(
  "payments/createPayment",
  async (payment, { rejectWithValue }) => {
    try {
      const res = await addPayment(payment);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to add payment");
    }
  }
);

export const editPayment = createAsyncThunk(
  "payments/editPayment",
  async ({ id, payment }, { rejectWithValue }) => {
    try {
      const res = await updatePayment(id, payment);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to update payment");
    }
  }
);

export const removePayment = createAsyncThunk(
  "payments/removePayment",
  async (id, { rejectWithValue }) => {
    try {
      await deletePayment(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to delete payment");
    }
  }
);

const paymentSlice = createSlice({
  name: "payments",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPayments.pending, (state) => { state.status = "loading"; state.error = null; })
      .addCase(fetchPayments.fulfilled, (state, action) => { state.list = action.payload; state.status = "success"; })
      .addCase(fetchPayments.rejected, (state, action) => { state.status = "failed"; state.error = action.payload; })

      .addCase(createPayment.fulfilled, (state, action) => { state.list.push(action.payload); })
      .addCase(editPayment.fulfilled, (state, action) => {
        const index = state.list.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      })
      .addCase(removePayment.fulfilled, (state, action) => {
        state.list = state.list.filter(p => p.id !== action.payload);
      });
  }
});

export default paymentSlice.reducer;
