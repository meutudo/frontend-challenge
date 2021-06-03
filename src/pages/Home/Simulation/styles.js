import styled from "styled-components/native";

const Container = styled.View``;

const TitleSimulation = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 12px;
`;

const ContainerBank = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 21px;
`;

export { Container, TitleSimulation, ContainerBank };
