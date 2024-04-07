export const getFormattedDate = (date: Date) => {
  const offset = date.getTimezoneOffset();
  const newDate = new Date(date.getTime() - offset * 60 * 1000);
  return newDate.toISOString().split("T")[0];
};

export const getWeatherIcon = (code: string) => {
  return `https://cdn.weatherbit.io/static/img/icons/${code}.png`;
};

export const getWeatherColor = (code: number) => {
  // code for thunderstorm
  if (code >= 200 && code <= 299) {
    return "#5A5A5A";
  }

  if (code >= 300 && code <= 599) {
    return "mediumblue";
  }

  // code for snow / mist
  if (code >= 600 && code <= 799) {
    return "turquoise";
  }

  // code for clear skies
  if (code >= 800 && code <= 803) {
    return "skyblue";
  }

  // cloudy
  return "darkgray";
};
