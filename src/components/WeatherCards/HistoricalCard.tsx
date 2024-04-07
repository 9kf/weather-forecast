import styled from "styled-components";
import { Datum } from "../../types";
import { HorizontalAligned } from "../UtilityComponents";

interface IHistoricalCardProps extends Datum {}

export function HistoricalCard({
  max_temp,
  min_temp,
  datetime,
}: IHistoricalCardProps) {
  return (
    <Container>
      {datetime && (
        <DateText>{new Date(datetime.split(":")[0]).toDateString()}</DateText>
      )}
      <HorizontalAligned style={{ gap: "12px" }}>
        <Label>Max Temperature</Label>
        <Value>{`${max_temp}°C`}</Value>
      </HorizontalAligned>
      <HorizontalAligned style={{ gap: "12px" }}>
        <Label>Minimum Temperature</Label>
        <Value>{`${min_temp}°C`}</Value>
      </HorizontalAligned>
    </Container>
  );
}

const Container = styled.div`
  padding: 4px 12px;
  background-color: gray;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DateText = styled.span`
  color: #242424;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Label = styled.span`
  color: #242424;
  font-size: 0.625rem;
  font-weight: 500;
`;

const Value = styled.span`
  color: #242424;
  font-size: 0.625rem;
  font-weight: 500;
`;
