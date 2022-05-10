import styled from "styled-components";

export const StyledContainerImage = styled.div`
  position: relative;

  &.overlay {
    transition: 0.1s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: white;
    width: 265px;
    height: 175px;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;
