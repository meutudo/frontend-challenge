import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Help from "../../pages/Help";

import { StyledStackBar } from "../styles";

const { Navigator, Screen } = createStackNavigator();

function HelpRoute() {
    return (
        <Navigator>
            <Screen options={StyledStackBar} name="Dúvidas" component={Help} />
        </Navigator>
    );
}

export default HelpRoute;
