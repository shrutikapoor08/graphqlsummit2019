export default function reducer(state, action) {
    switch(action.type) {
        case "ADD_CONTENT":
            return {
                ...state,
                songs: [...new Set([...state.songs ,...action.payload])]
            };
        case "DELETE_CONTENT":
            const filteredSongs = state.songs.filter(song => song.id !== action.payload)
            return {
                songs: filteredSongs
            };
        default:
            return state
    }
}