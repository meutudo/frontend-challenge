import styled from "styled-components/native";

const Container = styled.View``;

const HeaderContainer = styled.View`
    width: 100%;
    height: ${(props) => (props.open ? "210px" : "110px")};
    background-color: #000000;
    border-bottom-right-radius: 40px;
`;

const ContainerLogo = styled.View`
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 40px;
`;

const HeaderTextContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

const TitleHeader = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.White};
    font-size: 19px;
    margin-top: ${(props) => (props.open ? "10px" : "-6px")};
    font-weight: bold;
`;

const MessageHeader = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.White};
    opacity: 0.6;
    font-size: 14px;
    margin-top: 18px;
`;

const ValueHeader = styled.Text`
    font-family: ${(props) => props.theme.fonts.Tertiary};
    color: ${(props) => props.theme.colors.Primary};
    font-size: 30px;
    margin-top: 2px;
    font-weight: bold;
`;

const ConatinerButtonHeader = styled.View`
    justify-content: center;
    align-items: center;
`;

const ButtonOpenHeader = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    background-color: #d22688;
    border-radius: 50px;
    margin-top: ${(props) => (props.open ? "5px" : "1px")};

    justify-content: center;
    align-items: center;
`;

const ContainerHome = styled.View`
    margin-top: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const TitleHome = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 12px;
`;

export {
    Container,
    HeaderContainer,
    ContainerLogo,
    HeaderTextContainer,
    TitleHeader,
    MessageHeader,
    ValueHeader,
    ConatinerButtonHeader,
    ButtonOpenHeader,
    ContainerHome,
    TitleHome,
};
