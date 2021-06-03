import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Account from "./Account";
import Contact from "./Contact";
import Help from "./Help";
import Home from "./Home";

import { OptionsTheme } from "../styles/global";

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            notification: OptionsTheme.colors.Primary,
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator
                tabBarOptions={{
                    activeTintColor: OptionsTheme.colors.Primary,
                    labelStyle: {
                        fontFamily: OptionsTheme.fonts.Others,
                        fontSize: 10,
                        marginBottom: 5,
                    },
                }}
            >
                <Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name="home"
                                size={20}
                                color={
                                    focused
                                        ? OptionsTheme.colors.Primary
                                        : OptionsTheme.colors.Black
                                }
                            />
                        ),
                    }}
                    name="Home"
                    component={Home}
                />
                <Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name="file"
                                size={20}
                                color={
                                    focused
                                        ? OptionsTheme.colors.Primary
                                        : OptionsTheme.colors.Black
                                }
                            />
                        ),
                        tabBarBadge: 0,
                        tabBarBadgeStyle: {
                            marginBottom: 20,
                        },
                        title: "Contatos",
                    }}
                    name="Contact"
                    component={Contact}
                />
                <Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name="help-circle"
                                size={20}
                                color={
                                    focused
                                        ? OptionsTheme.colors.Primary
                                        : OptionsTheme.colors.Black
                                }
                            />
                        ),
                        title: "Dúvidas",
                    }}
                    name="Help"
                    component={Help}
                />
                <Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name="user"
                                size={20}
                                color={
                                    focused
                                        ? OptionsTheme.colors.Primary
                                        : OptionsTheme.colors.Black
                                }
                            />
                        ),
                        title: "Conta",
                    }}
                    name="Account"
                    component={Account}
                />
            </Navigator>
        </NavigationContainer>
    );
}
