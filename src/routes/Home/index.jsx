import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../pages/Home";
import Period from "../../pages/Home/Period";
import Simulation from "../../pages/Home/Simulation";
import Values from "../../pages/Home/Values";

import ButtonsHeaderStack from "../../components/ButtonsHeaderStack";

import { StyledStackBarButton } from "../styles";

const { Navigator, Screen } = createStackNavigator();

const HomeRoute = () => (
    <Navigator
        screenOptions={{
            ...StyledStackBarButton,
            headerLeft: () => <ButtonsHeaderStack />,
        }}
    >
        <Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Screen
            name="Period"
            component={Period}
            options={{ title: "Período" }}
        />
        <Screen
            name="Simulation"
            component={Simulation}
            options={{ title: "Opções" }}
        />
        <Screen
            name="Values"
            component={Values}
            options={{ title: "Valores" }}
        />
    </Navigator>
);

export default HomeRoute;
