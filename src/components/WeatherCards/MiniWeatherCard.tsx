import styled from "styled-components";

import { CurrentWeatherDatum, ForecastDatum } from "../../types";
import { getWeatherColor, getWeatherIcon } from "../../utils/helpers";
import { Column, HorizontalAligned } from "../UtilityComponents";

type Datum = CurrentWeatherDatum | ForecastDatum;

type TMiniWeatherCardProps = Datum & {
  onClick?: () => void;
};

export function MiniWeatherCard({
  temp,
  weather,
  datetime,
}: TMiniWeatherCardProps) {
  return (
    <CardContainer code={weather.code}>
      {datetime && (
        <DateText>{new Date(datetime.split(":")[0]).toDateString()}</DateText>
      )}
      <HorizontalAligned>
        <WeatherIcon src={getWeatherIcon(weather.icon)} alt="Weather icon" />
        <Column>
          <Temperature>{`${temp}°C`}</Temperature>
          <WeatherDescription>{weather.description}</WeatherDescription>
        </Column>
      </HorizontalAligned>
    </CardContainer>
  );
}

const CardContainer = styled.div<{ code: number }>`
  padding: 0px 12px;
  padding-bottom: 4px;
  background-color: ${(props) => getWeatherColor(props.code)};
  border-radius: 6px;
`;

const DateText = styled.span`
  color: white;
  font-size: 0.625rem;
  font-weight: 500;
`;

const Temperature = styled.span`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const WeatherDescription = styled.span`
  color: gray;
  font-size: 0.75rem;
  font-weight: 500;
`;

const WeatherIcon = styled.img`
  width: 40px;
  height: 40px;
`;
