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
