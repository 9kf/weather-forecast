import { useMutation } from "@tanstack/react-query";
import { Places } from "../../types";
import { searchAPI } from "../instance";

export const getSuggestPlaces = async (
  searchString: string
): Promise<Places | undefined> => {
  if (searchString) {
    const response = await searchAPI.get(`/forward?q=${searchString}`);
    if (response.status === 200) {
      return response.data;
    }
  }

  return undefined;
};

// export const useGetSuggestPlaces = (searchString?: string) =>
//   useQuery({
//     queryKey: [searchString],
//     queryFn: () => getSuggestPlaces(searchString!),
//     enabled: !!searchString,
//   });

export const useGetSuggestPlaces = () =>
  useMutation({
    mutationFn: getSuggestPlaces,
  });
