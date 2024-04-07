import styled from "styled-components";

import { CurrentWeatherDatum, ForecastDatum } from "../../types";
import { getWeatherColor, getWeatherIcon } from "../../utils/helpers";
import { Column, HorizontalAligned } from "../UtilityComponents";

type Datum = CurrentWeatherDatum | ForecastDatum;

type TWeatherCardProps = Datum & {
  onClick?: () => void;
};

export function WeatherCard({ temp, weather, datetime }: TWeatherCardProps) {
  return (
    <CardCotainer code={weather.code}>
      {datetime && (
        <DateText>{new Date(datetime.split(":")[0]).toDateString()}</DateText>
      )}
      <HorizontalAligned>
        <img src={getWeatherIcon(weather.icon)} alt="Weather icon" />
        <Column>
          <Temperature>{`${temp}°C`}</Temperature>
          <WeatherDescription>{weather.description}</WeatherDescription>
        </Column>
      </HorizontalAligned>
    </CardCotainer>
  );
}

const CardCotainer = styled.div<{ code: number }>`
  padding: 0px 16px;
  padding-top: 16px;
  background-color: ${(props) => getWeatherColor(props.code)};
  border-radius: 6px;
`;

const DateText = styled.span`
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Temperature = styled.span`
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
`;

const WeatherDescription = styled.span`
  color: gray;
  font-size: 1rem;
  font-weight: 500;
`;
