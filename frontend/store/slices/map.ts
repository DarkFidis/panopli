import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Coordinates, NearOptions, PlaceInput} from "../../types/place";
import {RootState} from "../index";
import {fetchPlaces} from "../../services/fetchPlaces.service";
import {MapState} from "../../types/state";

const initialState: MapState = {
  activePlace: '',
  distances: null,
  places: [],
  origin: [48.85884, 2.3473],
}

export const fetchPlacesThunk = createAsyncThunk('places', async (nearParameters: PlaceInput, thunkAPI) => {
  const response = await fetchPlaces(nearParameters)
  return response
})

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeActivePlace: (state, { payload }: PayloadAction<string>) => {
      state.activePlace = payload
    },
    changeDistances: (state, { payload }: PayloadAction<NearOptions>) => {
      state.distances = payload
    },
    changeOrigin: (state, action: PayloadAction<Coordinates>) => {
      state.origin = action.payload
      state.places = []
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPlacesThunk.fulfilled, (state, { payload }) => {
      state.places = payload
    })
  }
})

export const { changeActivePlace, changeDistances, changeOrigin } = mapSlice.actions
export const getOrigin = (state: RootState) => state.map.origin
export const getPlaces = (state: RootState) => state.map.places
export const getActivePlace = (state: RootState) => state.map.activePlace
export const getDistances = (state: RootState) => state.map.distances
export const mapReducer = mapSlice.reducer
