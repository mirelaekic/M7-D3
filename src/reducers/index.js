export default function (state = {}, action) {
    switch(action.type) {
        case "ADD_TO_FAVOURITES":
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    job: state.favourites.job.concat(action.playload),
                }
            };
        case "REMOVE_FROM_FAVOURITES":
            return {
                ...state.favourites,
                job: {
                    ...state.favourites,
                    job: [
                        ...state.favourites.job.filter(
                            (jobId) => jobId !== action.playload
                            ),
                    ],
                },
            };

    }
}