import { api } from "../instance";

export const getCurrentWeather = async (lon: string, lat: string) => {
  const response = await api.get(
    `/current?lon=${lon}&lat=${lat}&include=minutely`
  );
  return response;
};
