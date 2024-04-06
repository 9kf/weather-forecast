export const getFormattedDate = (date: Date) => {
  const offset = date.getTimezoneOffset();
  const newDate = new Date(date.getTime() - offset * 60 * 1000);
  return newDate.toISOString().split("T")[0];
};

export const getWeatherIcon = (code: string) => {
  return `https://cdn.weatherbit.io/static/img/icons/${code}.png`;
};
