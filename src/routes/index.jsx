import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Account from "./Account";
import Contact from "./Contact";
import Help from "./Help";
import Home from "./Home";

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            notification: "#D22688",
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator>
                <Screen
                    options={{
                        tabBarIcon: () => (
                            <Feather name="home" size={20} color="#D22688" />
                        ),
                    }}
                    name="Início"
                    component={Home}
                />
                <Screen
                    options={{
                        tabBarIcon: () => (
                            <Feather name="file" size={20} color="#D22688" />
                        ),
                        tabBarBadge: 0,
                    }}
                    name="Contratos"
                    component={Contact}
                />
                <Screen
                    options={{
                        tabBarIcon: () => (
                            <Feather
                                name="help-circle"
                                size={20}
                                color="#D22688"
                            />
                        ),
                    }}
                    name="Dúvidas"
                    component={Help}
                />
                <Screen
                    options={{
                        tabBarIcon: () => (
                            <Feather name="user" size={20} color="#D22688" />
                        ),
                    }}
                    name="Conta"
                    component={Account}
                />
            </Navigator>
        </NavigationContainer>
    );
}
