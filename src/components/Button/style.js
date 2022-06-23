import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.backgroundColor};
  color: var(--Grey-0);
  height: 48px;
  border-radius: 4px;
  border: 1.5px solid ${(props) => props.backgroundColor};
  transition: 0.5s;
  width: 100%;
  padding: 0 .5rem;
  :hover {
    border: 1.5px solid var(--Grey-0);
  }
`;