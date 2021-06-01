import styled from "styled-components";

const Container = {
    width: 163,
    height: 162,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingTop: 18,
    paddingLeft: 17,
    margin: 5,

    elevation: 5,
    // Border Shadow IOS
    shadowColor: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 5,
    shadowRadius: 5,
};

const ImageOpportunities = styled.Image`
    width: 44px;
    height: 44px;
    opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

const TitleOpportunities = styled.Text`
    font-family: ${(props) => props.theme.fonts.Primary};
    color: ${(props) => props.theme.colors.Black};
    margin-top: 8px;
    font-size: 15px;
    font-weight: bold;
    opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

const MessageOpportunities = styled.Text`
    font-family: ${(props) => props.theme.fonts.Secondary};
    color: ${(props) => props.theme.colors.Primary};
    margin-top: 6px;
    opacity: ${(props) => (props.disabled ? 0.2 : 1)};
`;

export {
    Container,
    ImageOpportunities,
    TitleOpportunities,
    MessageOpportunities,
};
