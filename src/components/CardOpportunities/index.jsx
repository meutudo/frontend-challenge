import React from "react";
import { TouchableOpacity } from "react-native";

import {
    Container,
    ImageOpportunities,
    TitleOpportunities,
    MessageOpportunities,
} from "./styles";

const CardOpportunities = ({ imageIcon, title, message, disabled = false }) => (
    <TouchableOpacity disabled={disabled} style={Container}>
        <ImageOpportunities disabled={disabled} source={imageIcon} />
        <TitleOpportunities disabled={disabled}>{title}</TitleOpportunities>
        {message ? (
            <MessageOpportunities disabled={disabled}>
                {message}
            </MessageOpportunities>
        ) : null}
    </TouchableOpacity>
);

export default CardOpportunities;
