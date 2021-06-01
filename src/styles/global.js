import React from "react";
import { ThemeProvider } from "styled-components";

const OptionsTheme = {
    colors: {
        Primary: "#D22688",
        Secondary: "",
        White: "#FFFFFF",
        Black: "#000000",
    },
    fonts: {
        Primary: "Montserrat_600SemiBold",
        Secondary: "Montserrat_400Regular",
        Tertiary: "Montserrat_700Bold",
        Others: "Montserrat_500Medium",
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={OptionsTheme}>{children}</ThemeProvider>
);

export { OptionsTheme };
export default Theme;
