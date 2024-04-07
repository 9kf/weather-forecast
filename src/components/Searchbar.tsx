import { useEffect, useState } from "react";
import styled from "styled-components";

import { Feature } from "../types";
import { useGetSuggestPlaces } from "../api/places/search";
import {
  CenterColumn,
  Column,
  ItemSubTitle,
  ItemTitle,
} from "./UtilityComponents";

const DEBOUNCE_TIMEOUT = 500;

interface ISearchbarProps {
  onSelectPlace?: (feat: Feature) => void;
}

export default function Searchbar({ onSelectPlace }: ISearchbarProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const {
    data: places,
    mutateAsync: fetchPlaces,
    isPending,
  } = useGetSuggestPlaces();

  const handleOnValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleOnItemClick = (feat: Feature) => {
    setValue(feat.properties.name);
    setIsFocused(false);
    onSelectPlace?.(feat);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchPlaces(value);
    }, DEBOUNCE_TIMEOUT);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Search for a location"
        value={value}
        onChange={handleOnValueChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => !places && setIsFocused(false)}
      />

      {isFocused && (
        <OptionsContainer>
          {places ? (
            <ColumnWithGap>
              {places.features.map((feat, index) => (
                <PlaceSuggestion
                  key={index}
                  {...feat}
                  onItemClick={handleOnItemClick}
                />
              ))}
            </ColumnWithGap>
          ) : (
            <CenterColumnWithPadding>
              {isPending ? "Loading" : "No results"}
            </CenterColumnWithPadding>
          )}
        </OptionsContainer>
      )}
    </Container>
  );
}

interface IPlaceSuggestionProps extends Feature {
  onItemClick?: (feat: Feature) => void;
}

function PlaceSuggestion({
  onItemClick,
  ...featureProps
}: IPlaceSuggestionProps) {
  const { properties } = featureProps;

  const handleOnClick = () => {
    onItemClick?.(featureProps);
  };

  return (
    <ItemContainer onClick={handleOnClick}>
      <Column>
        <ItemTitle>{properties.name}</ItemTitle>
        <ItemSubTitle>{properties.place_formatted}</ItemSubTitle>
      </Column>
    </ItemContainer>
  );
}

const Container = styled.div`
  position: relative;
`;

const OptionsContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 20dvh;
  margin: 0.5rem 0px;
  border-radius: 4px;
`;

const ItemContainer = styled.div`
  padding: 6px 16px;

  &:hover {
    background-color: skyblue;
    cursor: pointer;
  }
`;

const ColumnWithGap = styled(Column)`
  gap: 8px;
`;

const CenterColumnWithPadding = styled(CenterColumn)`
  padding: 12px;
`;

const StyledInput = styled.input`
  width: 30vw;
  color: #242424;
  font-size: 1.5rem;
  font-weight: 500;
  outline: none;
  border-radius: 4px;
  border: 1px solid white;
  padding: 8px;

  &:focus {
    outline: 1px solid yellow;
  }
`;
