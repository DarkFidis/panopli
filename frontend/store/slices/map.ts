import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Coordinates, NearOptions, Place, PlaceInput} from "../../types/place";
import {RootState} from "../index";
import {fetchPlaces} from "../../services/fetchPlaces.service";
import {MapState} from "../../types/state";

const initialState: MapState = {
  activePlace: '',
  distances: null,
  places: [],
  origin: [48.85884, 2.3473],
  nearError: undefined
}

export const fetchPlacesThunk = createAsyncThunk<Place[], PlaceInput, { rejectValue: string }>('places', async (nearParameters: PlaceInput, { rejectWithValue }) => {
  try {
    const response = await fetchPlaces(nearParameters)
    return response
  } catch (err: any) {
    return rejectWithValue(err.message)
  }
})

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    closeErrorModal: (state) => {
      state.nearError = undefined
    },
    changeActivePlace: (state, { payload }: PayloadAction<string>) => {
      state.activePlace = payload
    },
    changeDistances: (state, { payload }: PayloadAction<NearOptions>) => {
      state.distances = payload
    },
    changeOrigin: (state, action: PayloadAction<Coordinates>) => {
      state.origin = action.payload
      state.distances = null
      state.places = []
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPlacesThunk.fulfilled, (state, { payload }) => {
      state.places = payload
    })
    builder.addCase(fetchPlacesThunk.rejected, (state, action) => {
      const { error, payload } = action
      if (payload) {
        state.nearError = payload
      } else {
        state.nearError = error.message
      }
    })
  }
})

export const { closeErrorModal, changeActivePlace, changeDistances, changeOrigin } = mapSlice.actions
export const getOrigin = (state: RootState) => state.map.origin
export const getPlaces = (state: RootState) => state.map.places
export const getActivePlace = (state: RootState) => state.map.activePlace
export const getDistances = (state: RootState) => state.map.distances
export const getNearError = (state: RootState) => state.map.nearError
export const mapReducer = mapSlice.reducer
