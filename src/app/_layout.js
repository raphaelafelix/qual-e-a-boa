// A MOLDURA que envolve todas as telas do app

import { Stack } from "expo-router";

// StatusBar = a barra lá em cima do celular
import { StatusBar } from "expo-status-bar";

// Conceito: no React Native, cada pedaço de tela é um componente
// Um componente é só uam FUNÇÃO que devolve (return) o que aparece.

export default function layout() {
    return(
        <>

            <StatusBar style="light"/> 
            <Stack screenOptions={{ headerShown: false}}/>
        </>
    );
}