import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
    width: 166px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.Primary};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 16px;
`;

export { Button, Text };
