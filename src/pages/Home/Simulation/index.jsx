import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";

import Divider from "../../../components/Divider";
import { OptionsTheme } from "../../../styles/global";

import Logo from "../../../assets/tudo-logo-1.png";

import {
    Container,
    TitleSimulation,
    ContainerBank,
    CardBank,
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
} from "./styles";

const Simulator = () => (
    <Container>
        <TitleSimulation>Escolha um banco.</TitleSimulation>
        <ContainerBank>
            <View style={CardBank}>
                <CardBankInternal>
                    <ContainerInformations>
                        <ImageLogo source={Logo} />
                        <ContainerInstallments>
                            <TitleInstallments>
                                60 parcelas de
                            </TitleInstallments>
                            <TitleValue>R$ 372,65</TitleValue>
                            <TitleMessage>Total de R$ 5.030,00</TitleMessage>
                        </ContainerInstallments>
                        <Divider type="vertical" />
                        <ContainerTax>
                            <TitleMessage>com taxa de</TitleMessage>
                            <TitleTax>1,30% a.m.</TitleTax>
                        </ContainerTax>
                    </ContainerInformations>
                    <ContainerPrevision>
                        <Divider type="horizontal" />
                        <ContainerPaymentPrevidion>
                            <TitleMessage>Previsão de pagamento</TitleMessage>
                            <TouchableOpacity>
                                <EvilIcons
                                    name="question"
                                    size={16}
                                    color={OptionsTheme.colors.Primary}
                                />
                            </TouchableOpacity>
                        </ContainerPaymentPrevidion>
                        <TitlePaymentDate>
                            19 de maio a 01 de junho de 2020
                        </TitlePaymentDate>
                        <ContainerContract>
                            <TouchableOpacity>
                                <ButtonContract>
                                    Contratar
                                    <Feather name="chevron-right" size={14} />
                                </ButtonContract>
                            </TouchableOpacity>
                        </ContainerContract>
                    </ContainerPrevision>
                </CardBankInternal>
            </View>
        </ContainerBank>
    </Container>
);

export default Simulator;
