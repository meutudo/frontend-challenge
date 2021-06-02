import React, { useState } from "react";

import CardSimple from "../../../components/CardSimple";
import SimpleButton from "../../../components/SimpleButton";

import {
    Container,
    TitlePeriod,
    ContainerPeriod,
    ContainerInput,
    InputTitle,
    InputPeriod,
    ContainerButton,
} from "./styles";

const Period = ({ navigation }) => {
    const [periodValue, setPeriodValue] = useState();

    return (
        <Container>
            <TitlePeriod>Em quanto tempo você quer pagar?</TitlePeriod>
            <ContainerPeriod>
                <CardSimple title="48 meses" />
                <CardSimple title="60 meses" />
                <CardSimple title="72 meses" />
                <CardSimple title="84 meses" />
            </ContainerPeriod>
            <ContainerInput>
                <InputPeriod
                    type={"cel-phone"}
                    value={periodValue}
                    placeholder="00"
                    onChangeText={(text) => setPeriodValue(text)}
                />
                <InputTitle>meses</InputTitle>
            </ContainerInput>
            <ContainerButton>
                <SimpleButton
                    text="Continuar"
                    onPress={() => navigation.navigate("Simulation")}
                />
            </ContainerButton>
        </Container>
    );
};

export default Period;
