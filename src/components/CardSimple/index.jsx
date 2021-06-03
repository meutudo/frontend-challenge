import React from "react";
import { TouchableOpacity } from "react-native";

import { Container, Title } from "./styles";

const CardSimple = (props) => {
    const { title, disabled = false, selected } = props;

    return (
        <TouchableOpacity
            disabled={disabled}
            style={Container(selected)}
            {...props}
        >
            <Title disabled={disabled}>{title}</Title>
        </TouchableOpacity>
    );
};

export default CardSimple;
