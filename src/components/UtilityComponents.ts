import styled, { keyframes } from "styled-components";

// Typography components
export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 700;
`;

export const ItemTitle = styled.span`
  color: #242424;
  font-size: 1rem;
  font-weight: 700;
`;

export const ItemSubTitle = styled.span`
  color: #242424;
  font-size: 0.875rem;
  font-weight: 500;
`;

// Layout components
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HorizontalAligned = styled.div`
  display: flex;
  align-items: center;
`;

// utility components
const SpinnerFrames = keyframes`
  0% {
    border-color: white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }
  33% {
    border-color: white white rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  }
  66% {
    border-color: white white white rgba(255, 255, 255, 0);
  }
  100% {
    border-color: white white white white;
  }
`;

export const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 10px solid;
  box-sizing: border-box;
  animation: ${SpinnerFrames} 1s linear infinite alternate;
`;

export const SectionLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
`;
