import { useQuery } from "@tanstack/react-query";
import { api } from "../instance";
import { CurrentWeatherRoot } from "../../types";

export const getCurrentWeather = async (
  lon: string,
  lat: string
): Promise<CurrentWeatherRoot | undefined> => {
  const response = await api.get(`/current?lon=${lon}&lat=${lat}`);
  if (response.status === 200) {
    return response.data;
  }

  return undefined;
};

export const useGetCurrenttWeather = (lon: string, lat: string) =>
  useQuery({
    queryKey: ["current", lon, lat],
    queryFn: () => getCurrentWeather(lon, lat),
    select(data) {
      return data?.data[0];
    },
  });
