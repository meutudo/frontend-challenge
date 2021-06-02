import React, { useState } from "react";

import CardSimple from "../../../components/CardSimple";
import SimpleButton from "../../../components/SimpleButton";

import {
    Container,
    TitleValues,
    ContainerValues,
    ContainerInput,
    InputTitle,
    InputOtherValue,
    ContainerButton,
    LinkButton,
    TextLinkButton,
} from "./styles";

const Values = ({ navigation }) => {
    const [moneyValue, setMoneyValue] = useState();

    return (
        <Container>
            <TitleValues>De quanto você precisa?</TitleValues>
            <ContainerValues>
                <CardSimple title="R$ 300,00" />
                <CardSimple title="R$ 2.660,00" />
                <CardSimple title="R$ 5.030,00" />
                <CardSimple title="R$ 7.407,93" />
            </ContainerValues>
            <ContainerInput>
                <InputTitle>Outro Valor</InputTitle>
                <InputOtherValue
                    type={"money"}
                    options={{
                        unit: "R$ ",
                    }}
                    value={moneyValue}
                    placeholder="R$ 00,00"
                    onChangeText={(text) => setMoneyValue(text)}
                />
            </ContainerInput>
            <ContainerButton>
                <SimpleButton
                    text="Continuar"
                    onPress={() => navigation.navigate("Period")}
                />
                <LinkButton>
                    <TextLinkButton>Simule Pela parcela</TextLinkButton>
                </LinkButton>
            </ContainerButton>
        </Container>
    );
};

export default Values;
