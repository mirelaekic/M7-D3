export default function (state = {favorites:[]}, action) {
    switch(action.type) {
        case "ADD_TO_FAVOURITES":
            return {
                ...state,
                favourites:  [...state.favorites,action.payload]
            };
        case "REMOVE_FROM_FAVOURITES":
            return {
                ...state.favourites,
                favorites: state.favourites.job.filter(
                    ({id}) => id !== action.playload.id
                    )
            };

    }
}