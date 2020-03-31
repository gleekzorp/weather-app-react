
export const getCurrentWeather = (zip) => {
    return {
        type: 'GET_WEATHER',
        zip: zip
    }
}


const fetchCurrentWeather = async () => {
    const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${action.zip}&appid=${apiKey}`)
    console.log(currentWeather)
}

// export const addMovie = (title, genre) => {
//     return {
//         type: 'ADD_MOVIE',
//         movie: {
//             title: title,
//             genre: genre
//         }
//     }
// }