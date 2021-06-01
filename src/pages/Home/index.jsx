import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";

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

const Home = () => {
    const [openHeader, setOpenheader] = useState(false);

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
                            <ValueHeader>R$ 5.048,10</ValueHeader>
                        </>
                    ) : null}
                </HeaderTextContainer>
                <ConatinerButtonHeader>
                    <ButtonOpenHeader
                        open={openHeader}
                        onPress={() => {
                            setOpenheader(!openHeader);
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
                    message="Até R$ 3.058,10"
                />
                <CardOpportunities
                    imageIcon={IconPortability}
                    title="Portabilidade"
                    message="Até R$ 2.000,00"
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
