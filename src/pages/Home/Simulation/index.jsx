import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import api from "../../../services";

import CardBank from "../../../components/CardBank";

import Logo from "../../../assets/tudo-logo-1.png";

import { Container, TitleSimulation, ContainerBank } from "./styles";

const Simulator = () => {
    const [simulation, setSimulation] = useState();

    const getSuggestedValues = () => {
        api.get("/simulation").then(({ data }) => {
            setSimulation(data);
        });
    };

    useEffect(() => {
        getSuggestedValues();
    }, []);

    const installmentsValue = useSelector(
        (state) => state.InstallmentsValueReducer.installmentsValue
    );
    const loanValue = useSelector((state) => state.LoanValueReducer.loanValue);

    if (!simulation) {
        return null;
    }

    return (
        <Container>
            <TitleSimulation>Escolha um banco.</TitleSimulation>
            <ContainerBank>
                <CardBank
                    logo={Logo}
                    installments={installmentsValue}
                    totalInstallmentsValue={loanValue / installmentsValue}
                    loanValue={loanValue}
                    tax="1,30"
                    taxTime="a.m."
                    datePaymentLoan="19 de maio a 01 de junho de 2020"
                />
                <CardBank
                    logo={Logo}
                    installments={simulation.numberOfInstallments}
                    totalInstallmentsValue={simulation.installmentsValue}
                    loanValue={
                        simulation.installmentsValue *
                        simulation.numberOfInstallments
                    }
                    tax={simulation.nominalRate}
                    taxTime="a.m."
                    datePaymentLoan="19 de maio a 01 de junho de 2020"
                />
            </ContainerBank>
        </Container>
    );
};

export default Simulator;
