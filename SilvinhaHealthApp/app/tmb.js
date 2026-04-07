export const calcularTMB = (peso, altura, idade, sexo) => {
    const alturaCm = altura * 100;
    let tmb = 0;
    if (sexo === 'masculino') {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) - 161;
    }
    return Math.round(tmb);
};
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [idade, setIdade] = useState('');
const [sexo, setSexo] = useState(null);
const [resultado, setResultado] = useState(null);
const handleCalcular = () => {
    if (!peso || !altura || !idade || !sexo) {
        Alert.alert('Erro', 'Preencha todos os campos!');
        return;
    }
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    const idadeNum = parseInt(idade);
    if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(idadeNum) ||
        pesoNum <= 0 || alturaNum <= 0 || idadeNum <= 0) {
        Alert.alert('Erro', 'Digite valores válidos.');
        return;
    }
    const tmb = calcularTMB(pesoNum, alturaNum, idadeNum, sexo);
    setResultado(tmb);
};
{
    resultado && (
        <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Sua TMB é:</Text>
            <Text style={styles.resultValue}>{resultado} kcal/dia</Text>
            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Para manter o peso:</Text>
                <Text style={styles.infoText}>
                    Sedentário: {Math.round(resultado * 1.2)} kcal{'\n'}
                    Leve atividade: {Math.round(resultado * 1.375)} kcal{'\n'}
                    Moderado: {Math.round(resultado * 1.55)} kcal{'\n'}
                    Intenso: {Math.round(resultado * 1.725)} kcal
                </Text>
            </View>
        </View>
    )
}
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { calcularTMB } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';
export default function TmbScreen() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState(null);
    const [resultado, setResultado] = useState(null);
    const handleCalcular = () => {
        if (!peso || !altura || !idade || !sexo) {
            Alert.alert('Erro', 'Preencha todos os campos!');
            return;
        }
        const pesoNum = parseFloat(peso.replace(',', '.'));
        const alturaNum = parseFloat(altura.replace(',', '.'));
        const idadeNum = parseInt(idade);
        if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(idadeNum) || pesoNum <= 0 || alturaNum <= 0 || idadeNum <= 0) {
            Alert.alert('Erro', 'Digite valores válidos.');
            return;
        }
        const tmb = calcularTMB(pesoNum, alturaNum, idadeNum, sexo);
        setResultado(tmb);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <Text style={styles.title}>Taxa Metabólica Basal</Text>
                    <Text style={styles.description}>
                        TMB é a quantidade mínima de calorias que seu corpo precisa
                        para manter as funções vitais em repouso.
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
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Idade (anos)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: 30"
                            value={idade}
                            onChangeText={setIdade}
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.label}>Sexo</Text>
                    <View style={styles.sexContainer}>
                        <TouchableOpacity
                            style={[
                                styles.sexButton, sexo === 'masculino' && styles.sexButtonSelected,
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
                        <TouchableOpacity
                            style={[
                                styles.sexButton,
                                sexo === 'feminino' && styles.sexButtonSelected,
                            ]}
                            onPress={() => setSexo('feminino')}
                        >
                            <Text style={styles.sexIcon}>👩</Text>
                            <Text style={[
                                styles.sexText,
                                sexo === 'feminino' && styles.sexTextSelected
                            ]}>
                                Feminino
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={handleCalcular}>
                        <Text style={styles.buttonText}>Calcular TMB</Text>
                    </TouchableOpacity>
                    {resultado && (
                        <View style={styles.resultBox}>
                            <Text style={styles.resultLabel}>Sua TMB é:</Text>
                            <Text style={styles.resultValue}>{resultado}
                                kcal/dia</Text>
                            <View style={styles.infoBox}>
                                <Text style={styles.infoTitle}>Para manter o
                                    peso:</Text>
                                <Text style={styles.infoText}>
                                    Sedentário: {Math.round(resultado * 1.2)} kcal{'\n'}
                                    Leve atividade: {Math.round(resultado * 1.375)}
                                    kcal{'\n'}
                                    Moderado: {Math.round(resultado * 1.55)} kcal{'\n'}
                                    Intenso: {Math.round(resultado * 1.725)} kcal
                                </Text>
                            </View>
                        </View>
                    )}
                    <BotaoVoltar />
                </View>
            </ScrollView>
        </SafeAreaView>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    scrollContent: {
        flexGrow: 1,
    },
    content: {
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#96CEB4'
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 20,
    },
    inputGroup: {
        marginBottom: 15,
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
    sexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
        marginTop: 10,
    },
    sexButton: {
        flex: 1,
        padding: 15,
        marginHorizontal: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#96CEB4',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    sexButtonSelected: {
        backgroundColor: '#96CEB4'
    },
    sexIcon: {
        fontSize: 30,
        marginBottom: 5,
    },
    sexText: {
        fontSize: 14,
        color: '#96CEB4',
        fontWeight: '600'
    },
    sexTextSelected: {
        color: '#fff'
    },
    button: {
        backgroundColor: '#96CEB4',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#96CEB4',
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
        borderColor: '#96CEB4',
    },
    resultLabel: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    resultValue: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#96CEB4',
        marginBottom: 20,
    },
    infoBox: {
        width: '100%',
        padding: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    infoText: {
        fontSize: 14,
        color: '#666',
        lineHeight: 22,
    },
});