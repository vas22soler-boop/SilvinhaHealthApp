import React from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-sade-area-context'
import { router } from 'expo-router';

const menuData = [
  {
    id: '1',
    title: 'Calculadora de IMC',
    route: '/imc',
    color: '#FF6B6B',
    icon: '📊'
  },
  {
    id: '2',
    title: 'Peso Ideal',
    route: '/peso-ideal',
    color: '#4ECDC4',
    icon: '⚖️'
  },
  {
    id: '3',
    title: 'Água Diária',
    route: '/agua',
    color: '#45B7D1',
    icon: '💧'
  },
  {
    id: '4',
    title: 'Taxa Metabólica',
    route: '/tmb',
    color: '#96CEB4',
    icon: '🔥'
  },
];

export default function HomeScreen() {
  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.color }]}
      onPress={() => router.push(item.route)}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonIcon}>{item.icon}</Text>
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>🌸 Silvinha Health App</Text>
        <Text style={styles.subtitle}>Cuide da sua saúde com
          carinho</Text>
      </View>
      <FlatList
        data={menuData}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  listContent: {
    padding: 16,
  },
  button: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 130,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});