import styled from "styled-components/native";

import { OptionsTheme } from "../../styles/global";

const Container = (selected) => ({
    width: 165,
    height: 58,
    backgroundColor: OptionsTheme.colors.White,
    borderRadius: 5,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    opacity: selected ? 0.5 : 1,

    elevation: 5,
    // Border Shadow IOS
    shadowColor: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 5,
    shadowRadius: 5,
});

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 16px;
    font-weight: bold;
    opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

export { Container, Title };
