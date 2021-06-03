import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Contact from "../../pages/Contact";

import { StyledStackBar } from "../styles";

const { Navigator, Screen } = createStackNavigator();

function ContactRoute() {
    return (
        <Navigator screenOptions={{ ...StyledStackBar }}>
            <Screen
                name="Contact"
                options={{ title: "Contatos" }}
                component={Contact}
            />
        </Navigator>
    );
}

export default ContactRoute;
