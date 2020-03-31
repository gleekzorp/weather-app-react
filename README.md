# Weather App

// Turn temp into int when we want to do math

> Components
- WeatherForm
  - input zip
  - input submit
  - Send that data to the actions/reducer
- CurrentWeather
  - Display via context
    - City Name
    - Day
    - Weather Description
    - Temp
    - Weather Icon
- TempButton
  - Change context temp
    - Celsius
    - Fahrenheit
- FiveDayForecast
  - FiveDayItem

> Global State
- contexts
  - WeatherContext
    - City Name
    - Day
    - Weather Description
    - Temp
    - Weather Icon
    - forecast
- actions
  - WeatherActions
- reducers
  - WeatherReducers