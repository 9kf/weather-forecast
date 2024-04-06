import { Forecast } from "../../types";
import { api } from "../instance";

export const getForecast = async (
  lon: string,
  lat: string
): Promise<Forecast | undefined> => {
  const response = await api.get(`/forecast/daily?lon=${lon}&lat=${lat}`);
  if (response.status === 200) {
    return response.data;
  }

  return undefined;
};
