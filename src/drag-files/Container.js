import styled from "styled-components";

const Container = styled.div`
  width: 800px;
  height: 400px;
  background-color: ${props => (props.dragState ? "red" : "blue")};
  transition: 1s ease all;
`;

export default Container;
