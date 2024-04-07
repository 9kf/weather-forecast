import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import { Searchbar } from "./components";
import { Feature } from "./types";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { CenterColumn, Title } from "./components/UtilityComponents";
import { HistoricalData } from "./components/HistoricalData";

const queryClient = new QueryClient();

function App() {
  const [selectedPlace, setSelectedPlace] = useState<Feature>();

  // const handleBtnClick = async () => {
  //   const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  //   const fiveDaysEarlier = new Date(
  //     new Date().setDate(new Date().getDate() - 5)
  //   );
  //   console.log(yesterday);
  //   console.log(fiveDaysEarlier);
  //   const response = await getHistoricalData(
  //     "78.6382",
  //     "35.7796",
  //     fiveDaysEarlier,
  //     yesterday
  //   );
  //   console.log(JSON.stringify(response));
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <CenterColumn>
        <Title>Weather Forecast</Title>
        <Searchbar onSelectPlace={(feat) => setSelectedPlace(feat)} />
        {!!selectedPlace && (
          <div style={{ marginTop: "24px" }}>
            <CurrentWeather {...selectedPlace} />
          </div>
        )}
        {!!selectedPlace && (
          <div style={{ marginTop: "24px" }}>
            <Forecast {...selectedPlace} />
          </div>
        )}
        {!!selectedPlace && (
          <div style={{ marginTop: "24px" }}>
            <HistoricalData {...selectedPlace} />
          </div>
        )}
      </CenterColumn>
    </QueryClientProvider>
  );
}

export default App;
