import React from "react";
import { useFonts } from "expo-font";
import {
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
    Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

import Theme from "./src/styles/global";
import Routes from "./src/routes";

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
        <Theme>
            <Routes />
        </Theme>
    );
};

export default App;
