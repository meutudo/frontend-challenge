import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";

const Container = styled.View``;

const TitleValues = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 12px;
`;

const ContainerValues = styled.View`
    margin-top: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const ContainerInput = styled.View`
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const InputTitle = styled(TitleValues)`
    font-family: ${(props) => props.theme.fonts.Primary};
    font-size: 14px;
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 10px;
`;

const InputOtherValue = styled(TextInputMask)`
    font-family: ${(props) => props.theme.fonts.Primary};
    font-size: 16px;
    width: 85px;
    border-width: 0.5px;
    border-top-color: transparent;
    border-bottom-color: gray;
    border-left-color: transparent;
    border-right-color: transparent;
    text-align: center;
`;

const ContainerButton = styled.View`
    margin-top: 56px;
    justify-content: center;
    align-items: center;
`;

const LinkButton = styled.TouchableOpacity`
    margin-top: 15px;
`;

const TextLinkButton = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Primary};
    font-size: 13px;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.Primary};
`;

export {
    Container,
    TitleValues,
    ContainerValues,
    ContainerInput,
    InputTitle,
    InputOtherValue,
    ContainerButton,
    LinkButton,
    TextLinkButton,
};
