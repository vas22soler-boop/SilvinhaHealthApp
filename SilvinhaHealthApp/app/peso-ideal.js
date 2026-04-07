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
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <Text style={styles.title}>Peso Ideal</Text>
                    <Text style={styles.description}>
                        Calcule seu peso ideal baseado na sua altura e sexo usando
                        a fórmula de Devine.
                    </Text>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Altura (m)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: 1.70"
                            value={altura}
                            onChangeText={setAltura}
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <Text style={styles.label}>Sexo</Text>
                    <View style={styles.sexContainer}>
                        <TouchableOpacity
                            style={[styles.sexButton,
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
                        <Text style={styles.buttonText}>Calcular Peso Ideal</Text>
                    </TouchableOpacity>
                    {resultado !== '' && (
                        <View style={styles.resultBox}>
                            <Text style={styles.resultLabel}>Seu peso ideal é:</Text>
                            <Text style={styles.resultValue}>{resultado} kg</Text>
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
    },
    content: {
        padding: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#4ECDC4'
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
        borderColor: '#4ECDC4',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    sexButtonSelected: {
        backgroundColor: '#4ECDC4'
    },
    sexIcon: {
        fontSize: 30,
        marginBottom: 5,
    },
    sexText: {
        fontSize: 14,
        color: '#4ECDC4',
        fontWeight: '600'
    },
    sexTextSelected: {
        color: '#fff'
    },
    button: {
        backgroundColor: '#4ECDC4',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#4ECDC4',
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
        borderColor: '#4ECDC4',
    },
    resultLabel: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    resultValue: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#4ECDC4',
    },
});