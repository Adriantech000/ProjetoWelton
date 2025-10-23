import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/HomeStyles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.button}>
                <Button
                    title="Ir para"
                    onPress={() => navigation.navigate('Detalhes')}
                />
            </View>
        </View>
    );
}