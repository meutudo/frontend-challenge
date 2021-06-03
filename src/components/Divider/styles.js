import styled from "styled-components/native";

const Container = styled.View`
    width: ${(props) => (props.type === "horizontal" ? "100%" : "1px")};
    height: ${(props) => (props.type === "vertical" ? "100%" : "1px")};
    border-color: black;
    border-width: 0.5px;
    opacity: 0.2;
`;

export { Container };
