import styled from "styled-components/native";
import { OptionsTheme } from "../../styles/global";

const Container = {
    width: 345,
    height: 203,
    backgroundColor: OptionsTheme.colors.Primary,
    borderRadius: 5,
    alignItems: "flex-end",
    marginBottom: 10,
    marginRight: 10,

    elevation: 5,
    // Border Shadow IOS
    shadowColor: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 5,
    shadowRadius: 5,
};

const CardBankInternal = styled.View`
    width: 340px;
    height: 203px;
    background-color: ${(props) => props.theme.colors.White};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 22px 19px 22px 19px;
`;

const ContainerInformations = styled.View`
    flex-direction: row;
`;

const ImageLogo = styled.Image`
    width: 63px;
    height: 63px;
    border-width: 0.5px;
    border-color: ${(props) => props.theme.colors.Black};
    border-radius: 10px;
    margin-right: 15px;
`;

const ContainerInstallments = styled.View`
    margin-right: 15px;
`;

const TitleInstallments = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    font-weight: bold;
    font-size: 12px;
`;

const TitleValue = styled.Text`
    font-family: ${(props) => props.theme.fonts.Tertiary};
    color: ${(props) => props.theme.colors.Primary};
    font-weight: bold;
    font-size: 18px;
`;

const TitleMessage = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.Black};
    font-size: 12px;
`;

const ContainerTax = styled.View`
    margin-left: 15px;
`;

const TitleTax = styled.Text`
    font-family: ${(props) => props.theme.fonts.Tertiary};
    color: ${(props) => props.theme.colors.Black};
    font-weight: bold;
    font-size: 13px;
`;

const ContainerPrevision = styled.View`
    margin-top: 27px;
`;

const ContainerPaymentPrevidion = styled.View`
    flex-direction: row;
    margin-top: 16px;
`;

const TitlePaymentDate = styled(TitleInstallments)``;

const ContainerContract = styled.View`
    margin-top: 11px;
    align-items: flex-end;
`;

const ButtonContract = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Primary};
    font-size: 13px;
`;

export {
    Container,
    CardBankInternal,
    ContainerInformations,
    ImageLogo,
    ContainerInstallments,
    TitleInstallments,
    TitleValue,
    TitleMessage,
    ContainerTax,
    TitleTax,
    ContainerPrevision,
    ContainerPaymentPrevidion,
    TitlePaymentDate,
    ContainerContract,
    ButtonContract,
};
