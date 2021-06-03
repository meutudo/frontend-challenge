import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";

import Divider from "../Divider";

import { ConvertMoneyBRL } from "../../controller/convertMoney";

import { OptionsTheme } from "../../styles/global";
import {
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
} from "./styles";

const CardBank = ({
    logo,
    installments,
    totalInstallmentsValue,
    loanValue,
    tax,
    taxTime,
    datePaymentLoan,
}) => (
    <View style={Container}>
        <CardBankInternal>
            <ContainerInformations>
                <ImageLogo source={logo} />
                <ContainerInstallments>
                    <TitleInstallments>
                        {installments} parcelas de
                    </TitleInstallments>
                    <TitleValue>
                        R$ {ConvertMoneyBRL(totalInstallmentsValue)}
                    </TitleValue>
                    <TitleMessage>
                        Total de R$ {ConvertMoneyBRL(loanValue)}
                    </TitleMessage>
                </ContainerInstallments>
                <Divider type="vertical" />
                <ContainerTax>
                    <TitleMessage>com taxa de</TitleMessage>
                    <TitleTax>
                        {tax}% {taxTime}
                    </TitleTax>
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
                <TitlePaymentDate>{datePaymentLoan}</TitlePaymentDate>
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
);

export default CardBank;
