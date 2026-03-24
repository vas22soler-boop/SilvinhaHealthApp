import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
    return (
        <>
          <StatusBar style='dark'/>
          <Stack 
            screenOption={{
                headerStyle: {
                    backgroundColor : '#F9F9F9' ,
                },
                headerTintColor: '#333',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
          >
            <Stack.Screen
                name="index"
                option={{
                    title: 'Silvinha Health App',
                    headerShown: true
                }}
            />
          </Stack>
        </>
    )
}