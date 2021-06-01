import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../../pages/Home";
import Period from "../../pages/Home/Period";
import Simulation from "../../pages/Home/Simulation";
import Values from "../../pages/Home/Values";

const Stack = createStackNavigator();

function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />
            <Stack.Screen name="Period" component={Period} />
            <Stack.Screen name="Simulation" component={Simulation} />
            <Stack.Screen name="Values" component={Values} />
        </Stack.Navigator>
    );
}

export default App;
