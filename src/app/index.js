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

    function sortear(){
        if (opcoes.length < 2){
            setResultado("Adicione pelo menos 2 opções!");
            return

            // como sortear uma posição da lista;
        const posicao = Math.floor(Math.random()  * opcoes.length);

        const opcaoSorteada = opcoes[posicao];
        setResultado(opcaoSorteada)


        // aqui faz o celular vibrar avisando que saiu o resultado
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
        }

        function adicionar(){
            const nome = textoDigitado.trim();

            if (nome === "") {
                return;
            }

            const listaNova = [...opcoes, nome];
            setOpcoes(listaNova);
            setTextoDigitado("");
        }

        // função de remover uma opção
        function remover(nomeParaRemover){

            const listaNova = opcoes.filter((opcao) => opcao !== nomeParaRemover);
            setOpcoes(listaNova);
        }

        useEffect(() => {

            Accelerometer.setUpdateInterval(100);

            // guarda a hora do ultimo sorteio
            let horaDoUltimoSorteio = 0;

            const sensor = Accelerometer.addListener((dados) => {
                const forca = Math.hypot(dados.x, dados.y, dados.z);
                const agora = Date.now();
                const tempoPassado = agora - horaDoUltimoSorteio;


                // 1 - chacoalhou forte
                if (forca > LIMITE_DE_FORCA && tempoPassado > TEMPO_ENTRE_SORTEIOS){
                    horaDoUltimoSorteio = agora;
                    sortear();
                }
            });

            return () => sensor.remove();

        }, [opcoes]);
        
    }
 }