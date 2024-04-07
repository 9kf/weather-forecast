To run the application, please follow the steps below:

- install dependencies by running the command `yarn`
- create a `.env` file and add the following variables:

  - VITE_WEATHERBIT_BASE_URL=https://api.weatherbit.io/v2.0/
  - VITE_MAPBOX_BASE_URL=https://api.mapbox.com/search/searchbox/v1/
  - VITE_WEATHERBIT_API_KEY=(sign up on [weatherbit.io](https://www.weatherbit.io/))
  - VITE_MAPBOX_API_KEY=(sign up on [mapbox.com](https://www.mapbox.com/) and follow instructions on how to create an api key or use the default public one)

- start the app by running the command `yarn dev`

Notes:
The weather api that I used was different from the one that was recommended on the technical evaluation test for the reason being that I have to input credit card credentials in order for me to sign up and obtain an api key on openweathermap.

I improvised a bit on the requirements since the alternative api that I used has different schema on the one that was recommended and also I have a little time on working on it. I ommitted the routing part since most of the requirements can be done in a single page and also its better UX wise. As for the state management part, I added a notification store using zustand to at least show a little bit of my skills in state management. I also added a places suggestion when typing on the search input to make the user experience better. The UX and UI can be improved greatly but with the time that I have working on this project, I was not able to make it more pleasant to the user's eyes.

This project may not showcase all the skills that I have, but with the limited time that I dedicated on the project which is roughly 2-3 hours, I hope that I may be able to let you see a peek of my skillset as a frontend developer.
