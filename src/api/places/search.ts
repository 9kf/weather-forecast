import { Places } from "../../types";
import { searchAPI } from "../instance";

export const getSuggestPlaces = async (
  searchString: string
): Promise<Places | undefined> => {
  const response = await searchAPI.get(`/forward?q=${searchString}`);
  if (response.status === 200) {
    return response.data;
  }

  return undefined;
};
