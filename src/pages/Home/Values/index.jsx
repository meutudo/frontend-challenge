import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import api from "../../../services";
import { ConvertMoneyBRL } from "../../../controller/convertMoney";
import { ChangeLoanValue } from "../../../store/actions/loanValueActions";

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
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
    const [moneyValue, setMoneyValue] = useState();
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [suggestedValues, setSuggestedValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(false);

    const toggleContinueLoan = (value, minValue, maxValue) => {
        if (value < minValue) {
            alert(
                `O valor escolhido deverá ser maior que R$ ${ConvertMoneyBRL(
                    minValue
                )}`
            );
        } else if (value > maxValue) {
            alert(
                `O valor escolhido deverá ser menor que R$ ${ConvertMoneyBRL(
                    maxValue
                )}`
            );
        } else {
            dispatch(ChangeLoanValue(value));
            navigation.navigate("Period");
        }
    };

    const getSuggestedValues = () => {
        api.get("/suggestedvalues").then(({ data }) => {
            setMinValue(data.minValue);
            setMaxValue(data.maxValue);
            setSuggestedValues(data.suggestedValues);
        });
    };

    useEffect(() => {
        getSuggestedValues();
    }, []);

    return (
        <Container>
            <TitleValues>De quanto você precisa?</TitleValues>
            <ContainerValues>
                {suggestedValues.map((values, index) => (
                    <CardSimple
                        key={index}
                        title={`R$ ${ConvertMoneyBRL(values)}`}
                        onPress={() => {
                            setSelectedValue(index);
                            setMoneyValue(values);
                            setValue(values);
                        }}
                        selected={selectedValue === index}
                    />
                ))}
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
                    includeRawValueInChangeText={true}
                    onChangeText={(text, rawText) => {
                        setMoneyValue(text);
                        setValue(rawText);
                        setSelectedValue(false);
                    }}
                />
            </ContainerInput>
            <ContainerButton>
                <SimpleButton
                    text="Continuar"
                    onPress={() =>
                        toggleContinueLoan(value, minValue, maxValue)
                    }
                />
                <LinkButton>
                    <TextLinkButton>Simule Pela parcela</TextLinkButton>
                </LinkButton>
            </ContainerButton>
        </Container>
    );
};

export default Values;
