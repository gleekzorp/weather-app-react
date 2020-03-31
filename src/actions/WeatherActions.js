
export const getCurrentWeather = (zip) => {
    return {
        type: 'GET_WEATHER',
        zip: zip
    }
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