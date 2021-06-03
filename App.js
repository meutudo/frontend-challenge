import React from "react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import {
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

import store from "./src/store";
import Routes from "./src/routes";

import Theme from "./src/styles/global";

const App = () => {
    const [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_600SemiBold,
        Montserrat_400Regular,
        Montserrat_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <Theme>
                <Routes />
            </Theme>
        </Provider>
    );
};

export default App;
