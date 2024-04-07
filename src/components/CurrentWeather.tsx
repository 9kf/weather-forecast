import { useGetCurrenttWeather } from "../api/weather/current";
import { Feature } from "../types";
import { Spinner } from "./UtilityComponents";
import { WeatherCard } from "./WeatherCards/WeatherCard";

interface ICurrentWeatherProps extends Feature {}

export default function CurrentWeather({ properties }: ICurrentWeatherProps) {
  const { data: currenWeather, isFetching } = useGetCurrenttWeather(
    properties.coordinates.longitude.toString(),
    properties.coordinates.latitude.toString()
  );

  if (isFetching) {
    return <Spinner style={{ marginTop: "24px" }} />;
  }

  if (currenWeather) {
    return <WeatherCard {...currenWeather} />;
  }
}
