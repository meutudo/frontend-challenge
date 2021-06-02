import React from "react";

import { Button, Text } from "./styles";

const SimpleButton = (props) => {
    const { text } = props;

    return (
        <Button {...props}>
            <Text>{text}</Text>
        </Button>
    );
};

export default SimpleButton;
