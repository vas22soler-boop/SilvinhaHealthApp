import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, Alert, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calcularIMC } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';
export default function ImcScreen() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const handleCalcular = () => {
        if (!peso || !altura) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }
        const pesoNum = parseFloat(peso.replace(',', '.'));
        const alturaNum = parseFloat(altura.replace(',', '.'));
        if (isNaN(pesoNum) || isNaN(alturaNum) || pesoNum <= 0 || alturaNum
            <= 0) {
            Alert.alert('Erro', 'Digite valores válidos (maiores que zero).');
            return;
        }
        const resultadoIMC = calcularIMC(pesoNum, alturaNum);
        setResultado(resultadoIMC);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <Text style={styles.title}>Calculadora de IMC</Text>
                    <Text style={styles.description}>
                        O Índice de Massa Corporal (IMC) é uma medida
                        internacional usada para calcular se uma pessoa
                        está no peso ideal.
                    </Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Peso (kg)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: 70"
                            value={peso}
                            onChangeText={setPeso}
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Altura (m)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: 1.75"
                            value={altura}
                            onChangeText={setAltura}
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={handleCalcular}>
                        <Text style={styles.buttonText}>Calcular IMC</Text>
                    </TouchableOpacity>
                    {resultado && (
                        <View style={styles.resultBox}>
                            <Text style={styles.resultTitle}>Resultado:</Text>
                            <Text style={styles.resultValue}>{resultado.valor}</Text>
                            <Text style={styles.resultClassification}>
                                {resultado.classificacao}
                            </Text>
                        </View>
                    )}
                    <BotaoVoltar />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    scrollContent: {
        flexGrow: 1,
    }, content: {
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#FF6B6B'
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 20,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    button: {
        backgroundColor: '#FF6B6B',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#FF6B6B',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600'
    },
    resultBox: {
        marginTop: 30,
        padding: 25,
        backgroundColor: '#fff',
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FF6B6B',
    }, resultTitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
    },
    resultValue: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginBottom: 10,
    },
    resultClassification: {
        fontSize: 20,
        color: '#333',
        textAlign: 'center',
        fontWeight: '600',
    },
});