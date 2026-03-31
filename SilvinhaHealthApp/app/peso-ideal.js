export const calcularPesoIdeal = (altura, sexo) => {
    const alturaCm = altura * 100;
    let pesoIdeal = 0;
    if (sexo === 'masculino') {
        pesoIdeal = 50 + 2.3 * ((alturaCm - 152.4) / 2.54);
    } else {
        pesoIdeal = 45.5 + 2.3 * ((alturaCm - 152.4) / 2.54);
    }
    return pesoIdeal.toFixed(1);
};
const [sexo, setSexo] = useState(null);
<TouchableOpacity
    style={[
        styles.sexButton,
        sexo === 'masculino' && styles.sexButtonSelected,
    ]}
    onPress={() => setSexo('masculino')}
>
    <Text style={styles.sexIcon}>👨</Text>
    <Text style={[
        styles.sexText,
        sexo === 'masculino' && styles.sexTextSelected
    ]}>
        Masculino
    </Text>
</TouchableOpacity>
import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, Alert, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calcularPesoIdeal } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';
export default function PesoIdealScreen() {
    const [altura, setAltura] = useState('');
    const [sexo, setSexo] = useState(null);
    const [resultado, setResultado] = useState('');
    const handleCalcular = () => {
        if (!altura || !sexo) {
            Alert.alert('Erro', 'Preencha a altura e selecione o sexo!');
            return;
        }
        const alturaNum = parseFloat(altura.replace(',', '.'));
        if (isNaN(alturaNum) || alturaNum <= 0) {
            Alert.alert('Erro', 'Digite uma altura válida.');
            return;
        }
        const pesoIdeal = calcularPesoIdeal(alturaNum, sexo);
        setResultado(pesoIdeal);
    };
    // ... JSX e estilos omitidos por brevidade
    // (código completo conforme arquivo peso-ideal.js)
}