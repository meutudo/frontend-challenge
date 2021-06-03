import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import api from "../../services";
import { ConvertMoneyBRL } from "../../controller/convertMoney";

import CardOpportunities from "../../components/CardOpportunities";

import Logo from "../../assets/tudo-logo-1.png";
import IconNewLoan from "../../assets/newLoan-2.png";
import IconPortability from "../../assets/portability-2.png";
import IconRefinancing from "../../assets/refinancing-2.png";
import IconCreditCard from "../../assets/creditCard-2.png";

import {
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
} from "./styles";

const Home = ({ navigation }) => {
    const [openHeader, setOpenHeader] = useState(false);
    const [totalMaxValue, setTotalMaxValue] = useState(0);
    const [loanMaxValue, setLoanMaxValue] = useState(0);
    const [portabilityMaxValue, setPortabilityMaxValue] = useState(0);

    const getMargins = () => {
        api.get("/margins").then(({ data }) => {
            setTotalMaxValue(ConvertMoneyBRL(data.totalMaxValue));
            setLoanMaxValue(ConvertMoneyBRL(data.loanMaxValue));
            setPortabilityMaxValue(ConvertMoneyBRL(data.portabilityMaxValue));
        });
    };

    useEffect(() => {
        getMargins();
    }, []);

    return (
        <Container>
            <StatusBar style="dark" />
            <HeaderContainer open={openHeader}>
                <ContainerLogo>
                    <Image
                        source={Logo}
                        style={{ width: 31, height: 32, marginRight: "45%" }}
                    />
                    <Feather name="bell" size={20} color="#ffffff" />
                </ContainerLogo>
                <HeaderTextContainer>
                    <TitleHeader open={openHeader}>
                        Olá, José Carlos
                    </TitleHeader>
                    {openHeader ? (
                        <>
                            <MessageHeader>
                                Seu crédito disponível é de
                            </MessageHeader>
                            <ValueHeader>R$ {totalMaxValue}</ValueHeader>
                        </>
                    ) : null}
                </HeaderTextContainer>
                <ConatinerButtonHeader>
                    <ButtonOpenHeader
                        open={openHeader}
                        onPress={() => {
                            setOpenHeader(!openHeader);
                        }}
                    >
                        <Feather
                            name={openHeader ? "chevron-up" : "chevron-down"}
                            size={35}
                            color="#ffffff"
                        />
                    </ButtonOpenHeader>
                </ConatinerButtonHeader>
            </HeaderContainer>
            <TitleHome>Oportunidades</TitleHome>
            <ContainerHome>
                <CardOpportunities
                    imageIcon={IconNewLoan}
                    title="Novo Empréstimo"
                    message={`Até R$ ${loanMaxValue}`}
                    onPress={() => navigation.navigate("Values")}
                />
                <CardOpportunities
                    imageIcon={IconPortability}
                    title="Portabilidade"
                    message={`Até R$ ${portabilityMaxValue}`}
                />
                <CardOpportunities
                    disabled
                    imageIcon={IconRefinancing}
                    title="Refinanciamento"
                />
                <CardOpportunities
                    disabled
                    imageIcon={IconCreditCard}
                    title="Cartão de crédito consignado"
                />
            </ContainerHome>
        </Container>
    );
};

export default Home;
