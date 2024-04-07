import { useQuery } from "@tanstack/react-query";
import { HistoricalData } from "../../types";
import { getFormattedDate } from "../../utils/helpers";
import { api } from "../instance";

export const getHistoricalData = async (
  lon: string,
  lat: string,
  startDate: Date,
  endDate: Date
): Promise<HistoricalData | undefined> => {
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);
  const response = await api.get(
    `/history/daily?lon=${lon}&lat=${lat}&start_date=${formattedStartDate}&end_date=${formattedEndDate}`
  );
  if (response.status === 200) {
    return response.data;
  }

  return undefined;
};

export const useGet7DayHistoricalData = (lon: string, lat: string) => {
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  const sevenDaysEarlier = new Date(
    new Date().setDate(new Date().getDate() - 7)
  );

  return useQuery({
    queryKey: [
      "historical-data",
      lon,
      lat,
      yesterday.toUTCString(),
      sevenDaysEarlier.toUTCString(),
    ],
    queryFn: () => getHistoricalData(lon, lat, sevenDaysEarlier, yesterday),
  });
};
