import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, Title } from "./styles";

const CardSimple = (props) => {
    const { title, disabled = false } = props;

    return (
        <TouchableOpacity disabled={disabled} style={Container} {...props}>
            <Title disabled={disabled}>{title}</Title>
        </TouchableOpacity>
    );
};

export default CardSimple;
