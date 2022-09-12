import { createSlice } from "@testing-library/react";


const favoriteInitailstate = {favorites:[]}
const favoriteSlice = createSlice({
    name: "favorite",
    initialState: favoriteInitailstate,
    reducers: {
        addFavorite(state, action) {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        },
    }
})

export default favoriteSlice;