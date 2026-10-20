// etapa INICIAL - trazer as ferramntas (import)
import {useState, useEffect } from "react";
// View -> uma caixa, serve para agrupar e organizar as coisas
// Text -> Todo texto precisa estar dentro de um <text>
// TextInput -> um campo para digitar
// pressable -> qualquer coisa que dá pra trocar: nosso botão
// StyleSheet -> ferramenta para escrever os estilos.
import {View, Text, TextInput, Pressable, ScrollView, styleSheet } from "react-native";

import { cores } from "../data/tema"
import { Accelerometer } from "expo-sensors";
import * as Haptics from "expo-haptics";

const LIMITE_DE_FORCA = 1.8;
const TEMPO_ENTRE_SORTEIOS = 1000; // MILISSEGUNDOS: 1000 = 1 segundo


// etapa 1 - criar a tela
 export default function Home() {
    const [opcoes, setOpcoes] = userState(["Pizza", "Hamburger", "Sushi"])

    // A opção que foi sorteada. Começa vazia ("") porque ainda não sorteou
    const [resultado, setResultado] = useState("");

    // o que a pessoa está digitando no campo. neste caso começa vazio.
    const [textoDigitado, serTextoDigitado] = useState("")


    // Função SORTEAr 
 }