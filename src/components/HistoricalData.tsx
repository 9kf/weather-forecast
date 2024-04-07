import { useGet7DayHistoricalData } from "../api/weather/historical";
import { Feature } from "../types";
import { HorizontalAligned, SectionLabel, Spinner } from "./UtilityComponents";
import { HistoricalCard } from "./WeatherCards/HistoricalCard";

interface IHistoricalDataProps extends Feature {}

export function HistoricalData({ properties }: IHistoricalDataProps) {
  const {
    data: history,
    isFetching,
    isError,
  } = useGet7DayHistoricalData(
    properties.coordinates.longitude.toString(),
    properties.coordinates.latitude.toString()
  );

  if (isFetching) {
    return <Spinner style={{ marginTop: "24px" }} />;
  }

  if (isError) {
    return null;
  }

  if (history) {
    return (
      <>
        <SectionLabel>Historical data</SectionLabel>
        <HorizontalAligned style={{ gap: "8px" }}>
          {history.data?.map((data) => (
            <HistoricalCard {...data} />
          ))}
        </HorizontalAligned>
      </>
    );
  }
}
