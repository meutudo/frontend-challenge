import React from "react";
import { TouchableOpacity } from "react-native";

import {
    Container,
    ImageOpportunities,
    TitleOpportunities,
    MessageOpportunities,
} from "./styles";

const CardOpportunities = (props) => {
    const { imageIcon, title, message, disabled = false } = props;

    return (
        <TouchableOpacity disabled={disabled} style={Container} {...props}>
            <ImageOpportunities disabled={disabled} source={imageIcon} />
            <TitleOpportunities disabled={disabled}>{title}</TitleOpportunities>
            {message ? (
                <MessageOpportunities disabled={disabled}>
                    {message}
                </MessageOpportunities>
            ) : null}
        </TouchableOpacity>
    );
};

export default CardOpportunities;
