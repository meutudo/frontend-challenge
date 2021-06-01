import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Account from "../../pages/Account";

import { StyledStackBar } from "../styles";

const { Navigator, Screen } = createStackNavigator();

function AccountRoute() {
    return (
        <Navigator>
            <Screen options={StyledStackBar} name="Conta" component={Account} />
        </Navigator>
    );
}

export default AccountRoute;
