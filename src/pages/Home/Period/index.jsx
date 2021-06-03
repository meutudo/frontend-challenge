import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import api from "../../../services";
import { ChangeInstallmentsValue } from "../../../store/actions/installmentsValueAction";

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
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
    const [periodValue, setPeriodValue] = useState();
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [suggestedInstallments, setSuggestedInstallments] = useState([]);
    const [selectedValue, setSelectedValue] = useState(false);

    const toggleContinueLoan = (value, minValue, maxValue) => {
        if (isNaN(value)) {
            alert("Favor informar um número válido!");
        } else {
            if (value < minValue) {
                alert(
                    `O valor escolhido deverá ser maior que ${minValue} meses`
                );
            } else if (value > maxValue) {
                alert(
                    `O valor escolhido deverá ser menor que ${maxValue} meses`
                );
            } else {
                dispatch(ChangeInstallmentsValue(value));
                navigation.navigate("Simulation");
            }
        }
    };

    const getSuggestedPeriods = () => {
        api.get("/suggestedperiods").then(({ data }) => {
            setMinValue(data.minValue);
            setMaxValue(data.maxValue);
            setSuggestedInstallments(data.suggestedInstallments);
        });
    };

    useEffect(() => {
        getSuggestedPeriods();
    }, []);

    return (
        <Container>
            <TitlePeriod>Em quanto tempo você quer pagar?</TitlePeriod>
            <ContainerPeriod>
                {suggestedInstallments.map((values, index) => (
                    <CardSimple
                        key={index}
                        title={`${values} meses`}
                        onPress={() => {
                            setSelectedValue(index);
                            setPeriodValue(values.toString());
                            setValue(values);
                        }}
                        selected={selectedValue === index}
                    />
                ))}
            </ContainerPeriod>
            <ContainerInput>
                <InputPeriod
                    type={"custom"}
                    options={{ mask: "**" }}
                    value={periodValue}
                    placeholder="00"
                    onChangeText={(text) => {
                        setPeriodValue(text);
                        setValue(text);
                        setSelectedValue(false);
                    }}
                />
                <InputTitle>meses</InputTitle>
            </ContainerInput>
            <ContainerButton>
                <SimpleButton
                    text="Continuar"
                    onPress={() =>
                        toggleContinueLoan(value, minValue, maxValue)
                    }
                />
            </ContainerButton>
        </Container>
    );
};

export default Period;
