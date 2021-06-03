# Senior frontend challenge

Desenvolvimento de uma aplicação para o Serior Frontend Challenge

# Objetivo

Realizar a criação de PWA e um Mobile App

# Execução do projeto

## Instalar pacotes

-   Instalar a CLI o expo

    `npm install --global expo-cli`
    `yarn global add expo-cli`

-   Baixar os pacotes da aplicação

    `npm install`
    `yarn`

## Ambiente de desenvolvimento

-   Executar os comando de acordo com a plataforma escolhida
-   A execução será realizada em um emulador do android que estiver instalado na maquina
    ou com a aplicação do expo. (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US)

    -   WEB

        `npm web`

        `yarn web`

    -   Android

        `npm android`

        `yarn android`

    -   IOS

        `npm ios`

        `yarn ios`

## Ambiente de produção

-   Executar os comandos de acordo com a plataforma escolhida

    -   WEB

        -   Será gerado uma pasta com o nome `web-build`, e os arquivos devem ser enviados para um ambiente web

            `expo build:web`

    -   Android - APK

        -   Para realizar a build da aplicação pelo expo, deverá possuir uma conta no expo (https://expo.io/login)
        -   Para logar no expo execute `expo login` em seu terminal.
        -   Após isso rode o comando de build

            `expo build:android -t apk`

    -   App Bundle

        -   Para realizar a build deverá realizar o mesmo processo do Android

            `expo build:android -t app-bundle`

    -   IOS

        -   Para realizar a build deverá realizar o mesmo processo do Android

            `expo build:ios`
