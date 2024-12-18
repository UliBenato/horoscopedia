import { MotiView } from "moti";
import styles from "@/styles/styles";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { geradorPrevisoes } from "@/services/generator";
import { dataMask } from "@/utils/data";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Index() {
  const [data, setData] = useState(""); // Estado para a data
  const [resposta, setResposta] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const callPrevisao = async () => {
    if (data.length < 5) {
      alert("Desculpe, a data precisa ter mais de 5 caracteres");
      return;
    }

    setIsLoading(true);
    setResposta(""); // Reseta apenas a resposta, não o estado de 'data'

    try {
      const result = await geradorPrevisoes(data);
      setResposta(result);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  function applyMask(input: string) {
    const maskedValue = dataMask(input);
    setData(maskedValue);
  }
  // seleciona o ícone de acordo com a data informada pelo usuário
  function getSigno(dia: number, mes: number): string {
    const zodiacSigns = [
      { range: (mes === 3 && dia >= 21) || (mes === 4 && dia <= 19), icon: "zodiac-aries" },
      { range: (mes === 4 && dia >= 20) || (mes === 5 && dia <= 20), icon: "zodiac-taurus" },
      { range: (mes === 5 && dia >= 21) || (mes === 6 && dia <= 20), icon: "zodiac-gemini" },
      { range: (mes === 6 && dia >= 21) || (mes === 7 && dia <= 22), icon: "zodiac-cancer" },
      { range: (mes === 7 && dia >= 23) || (mes === 8 && dia <= 22), icon: "zodiac-leo" },
      { range: (mes === 8 && dia >= 23) || (mes === 9 && dia <= 22), icon: "zodiac-virgo" },
      { range: (mes === 9 && dia >= 23) || (mes === 10 && dia <= 22), icon: "zodiac-libra" },
      { range: (mes === 10 && dia >= 23) || (mes === 11 && dia <= 21), icon: "zodiac-scorpio" },
      { range: (mes === 11 && dia >= 22) || (mes === 12 && dia <= 21), icon: "zodiac-sagittarius" },
      { range: (mes === 12 && dia >= 22) || (mes === 1 && dia <= 19), icon: "zodiac-capricorn" },
      { range: (mes === 1 && dia >= 20) || (mes === 2 && dia <= 18), icon: "zodiac-aquarius" },
      { range: (mes === 2 && dia >= 19) || (mes === 3 && dia <= 20), icon: "zodiac-pisces" },
    ];

    const signo = zodiacSigns.find((sign) => sign.range);

    return signo ? signo.icon : "star"; // Retorna "star" se nenhum signo for encontrado
  }

  function renderSigno(data: string) {
    const [dia, mes] = data.split("/").map((val) => parseInt(val, 10));

    // Verifica se os valores de dia e mes são válidos
    if (isNaN(dia) || isNaN(mes) || dia < 1 || mes < 1 || mes > 12 || dia > 31) {
      return <Text>Data inválida</Text>; // Mensagem para data inválida
    }

    const icon = getSigno(dia, mes);

    return (
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons name={icon} size={24} color="black" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Horoscopédia</Text>
      <Text style={styles.subtitulo}>Descubra como será seu dia de hoje!</Text>

      <TextInput
        onChangeText={applyMask}
        value={data}
        style={styles.input}
        placeholder="Digite a sua data de nascimento..."
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={callPrevisao}>
        <Text style={styles.buttonText}>
          {isLoading ? "Carregando..." : "Gerar seu horóscopo do dia!"}
        </Text>
      </TouchableOpacity>

      {resposta && (
        <MotiView
          style={styles.card}
          from={{ opacity: 0, translateX: 200 }}
          animate={{ opacity: 1, translateX: 0 }}
        >
          {renderSigno(data)} 
          <Text style={styles.cardTitle}>Seu horóscopo está pronto:</Text>
          <Text style={styles.cardText}>{resposta}</Text>
        </MotiView>
      )}
    </View>
  );
}