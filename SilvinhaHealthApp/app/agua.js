import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView,
} from 'react-native'; import { SafeAreaView } from 'react-native-safe-area-context';
import { calcularAgua } from '../utils/calculos';
import BotaoVoltar from '../components/BotaoVoltar';
export default function AguaScreen() {
    const [peso, setPeso] = useState('');
    const [resultado, setResultado] = useState(null);
    const handleCalcular = () => {
        if (!peso) {
            Alert.alert('Erro', 'Digite seu peso!');
            return;
        }
        const pesoNum = parseFloat(peso.replace(',', '.'));
        if (isNaN(pesoNum) || pesoNum <= 0) {
            Alert.alert('Erro', 'Digite um peso válido.');
            return;
        }
        const agua = calcularAgua(pesoNum);
        setResultado(agua);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.content}>
                    <Text style={styles.title}>Água Diária</Text>
                    <Text style={styles.description}>
                        A recomendação geral é consumir 35ml de água por kg de peso
                        corporal.
                    </Text>
                    <View style={styles.waterIcon}>
                        <Text style={styles.waterEmoji}>💧</Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Seu peso (kg)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: 70"
                            value={peso}
                            onChangeText={setPeso}
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                        />
                    </View>
                    <TouchableOpacity style={styles.button}
                        onPress={handleCalcular}>
                        <Text style={styles.buttonText}>Calcular Água</Text>
                    </TouchableOpacity>
                    {resultado && (
                        <View style={styles.resultBox}>
                            <Text style={styles.resultLabel}>Recomendação
                                diária:</Text><Text style={styles.resultValue}>{resultado.ml} ml</Text>
                            <Text style={styles.resultSecondary}>({resultado.l}
                                litros)</Text>
                            <View style={styles.tipsContainer}>
                                <Text style={styles.tipsTitle}>Dicas:</Text>
                                <Text style={styles.tip}>• Beba um copo ao
                                    acordar</Text>
                                <Text style={styles.tip}>• Tenha uma garrafa sempre por
                                    perto</Text>
                                <Text style={styles.tip}>• Use aplicativos para
                                    lembrete</Text>
                            </View>
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
        color: '#45B7D1'
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 20,
    },
    waterIcon: {
        alignItems: 'center',
        marginBottom: 20,
    },
    waterEmoji: {
        fontSize: 80,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16, fontWeight: '600',
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
        backgroundColor: '#45B7D1',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#45B7D1',
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
        borderColor: '#45B7D1',
    },
    resultLabel: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    resultValue: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#45B7D1',
    },
    resultSecondary: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    tipsContainer: {
        width: '100%',
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }, tipsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    tip: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
});