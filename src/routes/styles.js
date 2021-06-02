import { OptionsTheme } from "../styles/global";

const StyledStackBar = {
    headerStyle: {
        backgroundColor: OptionsTheme.colors.Black,
        borderBottomEndRadius: 40,
        height: 110,
    },
    headerTitleStyle: {
        fontFamily: OptionsTheme.fonts.Others,
        color: OptionsTheme.colors.White,
        fontSize: 17,
        alignSelf: "center",
    },
};

const StyledStackBarButton = {
    ...StyledStackBar,
    headerTitleStyle: {
        fontFamily: OptionsTheme.fonts.Others,
        color: OptionsTheme.colors.White,
        fontSize: 17,
        alignSelf: "center",
        marginLeft: -50,
    },
};

export { StyledStackBar, StyledStackBarButton };
