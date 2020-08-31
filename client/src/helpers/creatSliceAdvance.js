import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit';
import { ACTIVE_PAGE, ITEMS_PER_PAGE, PAGE_RANGE } from '@/constants';

const initialState = {
    totalItems: null,
    pages: null,
    activePage: ACTIVE_PAGE,
    itemsPerPage: ITEMS_PER_PAGE,
    pageRange: PAGE_RANGE,
    error: null,
};

const purchasedToursAdapter = createEntityAdapter({
    selectId: tour => tour.id
});

export const fetchPurchasedTours = createAsyncThunk(
    `purchasedTours/fetchPurchasedTours`,
    async ({}, thunkAPI) => {
        const response = await thunkAPI.extra.get(`/me/purchases`);
        if (!response.ok) {
            return thunkAPI.rejectWithValue(response.error);
        }
        return response.data;
    },
    {
        condition: ({}, thunkAPI) => {
            const auth = thunkAPI.getState().auth;
            if (!auth.isLoggedIn) {
                return false;
            }
        }
    }
);

const purchasedToursSlice = createSlice({
    name: 'purchasedTours',
    initialState: purchasedToursAdapter.getInitialState(initialState),
    reducers: {
        updatedPurchasedTour: purchasedToursAdapter.updateOne,
    },
    extraReducers: {
        [fetchPurchasedTours.pending]: (state, action) => {
            state.loading = fetchStatuses.PENDING
        },
        [fetchPurchasedTours.fulfilled]: (state, action) => {
            purchasedToursAdapter.setAll(state, action.payload);
            state.loading = fetchStatuses.SUCCESS;
        },
        [fetchPurchasedTours.rejected]: (state, action) => {
            if (action.error) {
                state.error = action.payload;
            }
            state.loading = fetchStatuses.FAILED;
        }
    }
});

export const { updatedPurchasedTour } = purchasedToursSlice.actions; 
export const purchasedSelectors = purchasedToursAdapter.getSelectors(state => state.purchasedTours);
export default purchasedToursSlice.reducer;