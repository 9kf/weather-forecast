import { useQuery } from "@tanstack/react-query";
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

export const useGetWeatherForecast = (lon: string, lat: string) =>
  useQuery({
    queryKey: ["forecast", lon, lat],
    queryFn: () => getForecast(lon, lat),
    select(data) {
      return {
        ...data,
        // slice data so it will only return 7 days of forecast (16 days by default of the api)
        data: data?.data.slice(0, 7),
      };
    },
  });
