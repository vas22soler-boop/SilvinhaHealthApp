import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
export default function BotaoVoltar() {
    return (
        <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
        >
            <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>);
}
const styles = StyleSheet.create({
    backButton: {
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#888080',
        borderRadius: 10,
    },
    backButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
});