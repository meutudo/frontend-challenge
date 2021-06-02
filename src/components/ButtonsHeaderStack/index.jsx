import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { Container } from "./styles";

const ButtonsHeaderStack = () => {
    const navigate = useNavigation();

    return (
        <Container>
            <BorderlessButton onPress={navigate.goBack}>
                <Feather name="chevron-left" size={28} color="#ffffff" />
            </BorderlessButton>
        </Container>
    );
};

export default ButtonsHeaderStack;
