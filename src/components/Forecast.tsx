import { useGetWeatherForecast } from "../api/weather/forecast";
import { Feature } from "../types";
import { HorizontalAligned, SectionLabel, Spinner } from "./UtilityComponents";
import { MiniWeatherCard } from "./WeatherCards/MiniWeatherCard";

interface IForecastProps extends Feature {}

export default function Forecast({ properties }: IForecastProps) {
  const {
    data: forecast,
    isFetching,
    isError,
  } = useGetWeatherForecast(
    properties.coordinates.longitude.toString(),
    properties.coordinates.latitude.toString()
  );

  if (isFetching) {
    return <Spinner style={{ marginTop: "24px" }} />;
  }

  if (isError) {
    return null;
  }

  if (forecast) {
    return (
      <>
        <SectionLabel>7 day Forecast</SectionLabel>
        <HorizontalAligned style={{ gap: "8px" }}>
          {forecast.data?.map((data) => (
            <MiniWeatherCard key={data.datetime} {...data} />
          ))}
        </HorizontalAligned>
      </>
    );
  }
}
