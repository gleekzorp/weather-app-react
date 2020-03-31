// Possibly need an async function
const apiKey = process.env.REACT_APP_WEATHER_API_KEY

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            const getWeather = async () => {
                const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${action.zip}&appid=${apiKey}`)
                    // .then((res) => {
                    //     res.json()
                    // })
                    // .then((res) => {
                    //     return
                    // })
                    return {
                        ...state,
                        weather: currentWeather.json()
                    }
            }
    
        default:
            break;
    }
}


// export const movieReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_MOVIE':
//             return [
//                 ...state,
//                 {
//                     title: action.movie.title,
//                     genre: action.movie.genre,
//                     id: uuidv4()
//                 }
//             ]
//         case 'REMOVE_MOVIE':
//             return state.filter((movie) => movie.id !== action.id)
//         default:
//             return state
//     }
// }