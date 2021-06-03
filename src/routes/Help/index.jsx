import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Help from "../../pages/Help";

import { StyledStackBar } from "../styles";

const { Navigator, Screen } = createStackNavigator();

function HelpRoute() {
    return (
        <Navigator screenOptions={{ ...StyledStackBar }}>
            <Screen
                name="Help"
                options={{ title: "Dúvidas" }}
                component={Help}
            />
        </Navigator>
    );
}

export default HelpRoute;
