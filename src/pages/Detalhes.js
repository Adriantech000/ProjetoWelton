import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function SizeSelectionScreen() {
    const navigation = useNavigation();
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');

    const calculateArea = () => {
        if (width && length) {
            const area = parseFloat(width) * parseFloat(length);
            return area.toFixed(2);
        }
        return '0';
    };

    const handleContinue = () => {
        if (width && length) {
            alert(`Área selecionada: ${calculateArea()} m²\nLargura: ${width}m\nComprimento: ${length}m`);
        } else {
            alert('Por favor, preencha largura e comprimento');
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Hero Section com imagem */}
            <View style={styles.heroContainer}>
                <ImageBackground
                    source={require('../assets/Telhado.png')}
                    style={styles.hero}
                    resizeMode="cover"
                >
                    {/* Botão Voltar */}
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>← Voltar</Text>
                    </TouchableOpacity>

                    <View style={styles.overlay}>
                        <Text style={styles.heroIcon}>📏</Text>
                        <Text style={styles.title}>Qual o tamanho do seu telhado?</Text>
                        <Text style={styles.subtitle}>
                            Informe as medidas para calcularmos o orçamento ideal
                        </Text>
                    </View>
                    
                    {/* Gradiente de transição */}
                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.7)', '#ffffff']}
                        style={styles.gradientTransition}
                    />
                </ImageBackground>
            </View>

            {/* Conteúdo */}
            <View style={styles.content}>
                <View style={styles.measurementsCard}>
                    <Text style={styles.cardTitle}>Medidas do Telhado</Text>
                    
                    {/* Largura */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Largura</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: 10"
                                keyboardType="decimal-pad"
                                value={width}
                                onChangeText={setWidth}
                                placeholderTextColor="#9ca3af"
                            />
                            <Text style={styles.unit}>metros</Text>
                        </View>
                    </View>

                    {/* Comprimento */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Comprimento</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex: 15"
                                keyboardType="decimal-pad"
                                value={length}
                                onChangeText={setLength}
                                placeholderTextColor="#9ca3af"
                            />
                            <Text style={styles.unit}>metros</Text>
                        </View>
                    </View>

                    {/* Resultado da Área */}
                    {width && length && (
                        <View style={styles.resultCard}>
                            <Text style={styles.resultLabel}>Área Total</Text>
                            <Text style={styles.resultValue}>
                                {calculateArea()} m²
                            </Text>
                        </View>
                    )}
                </View>

                {/* Informações Adicionais */}
                <View style={styles.infoCard}>
                    <Text style={styles.infoIcon}>💡</Text>
                    <Text style={styles.infoTitle}>Dica</Text>
                    <Text style={styles.infoText}>
                        Meça a largura e o comprimento do seu telhado. Se não tiver certeza das medidas exatas, nossa equipe pode fazer uma visita técnica gratuita.
                    </Text>
                </View>

                {/* Botão Continuar */}
                <TouchableOpacity
                    style={[styles.button, (!width || !length) && styles.buttonDisabled]}
                    onPress={handleContinue}
                    disabled={!width || !length}
                >
                    <Text style={styles.buttonText}>Continuar</Text>
                    <Text style={styles.buttonIcon}>→</Text>
                </TouchableOpacity>

                {/* Link para ajuda */}
                <TouchableOpacity style={styles.helpButton}>
                    <Text style={styles.helpText}>
                        Não sei as medidas do meu telhado
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    © 2025 Green Roof. Todos os direitos reservados.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heroContainer: {
        position: 'relative',
    },
    hero: {
        width: "100%",
        minHeight: 400,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 9999,
        zIndex: 10,
        backdropFilter: 'blur(10px)',
    },
    backButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 60,
    },
    heroIcon: {
        fontSize: 80,
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 24,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 10,
        maxWidth: 600,
    },
    subtitle: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 16,
        textAlign: 'center',
        maxWidth: 500,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
    },
    gradientTransition: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 120,
    },
    content: {
        paddingHorizontal: 24,
        paddingVertical: 48,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    measurementsCard: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 32,
        width: '100%',
        maxWidth: 600,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        marginBottom: 24,
        borderWidth: 1,
        borderColor: '#e5e7eb',
    },
    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 24,
        textAlign: 'center',
    },
    inputGroup: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9fafb',
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#e5e7eb',
        paddingHorizontal: 16,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#1f2937',
        paddingVertical: 16,
    },
    unit: {
        fontSize: 16,
        color: '#6b7280',
        fontWeight: '500',
        marginLeft: 8,
    },
    resultCard: {
        backgroundColor: '#dcfce7',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        marginTop: 8,
        borderWidth: 2,
        borderColor: '#16a34a',
    },
    resultLabel: {
        fontSize: 14,
        color: '#15803d',
        fontWeight: '600',
        marginBottom: 4,
    },
    resultValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#15803d',
    },
    infoCard: {
        backgroundColor: '#fef3c7',
        borderRadius: 16,
        padding: 20,
        width: '100%',
        maxWidth: 600,
        marginBottom: 32,
        borderLeftWidth: 4,
        borderLeftColor: '#f59e0b',
    },
    infoIcon: {
        fontSize: 32,
        marginBottom: 8,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#92400e',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#92400e',
        lineHeight: 20,
    },
    button: {
        backgroundColor: '#16a34a',
        paddingHorizontal: 48,
        paddingVertical: 18,
        borderRadius: 9999,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        width: '100%',
        maxWidth: 400,
        marginBottom: 16,
    },
    buttonDisabled: {
        backgroundColor: '#9ca3af',
        opacity: 0.6,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 8,
    },
    buttonIcon: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    helpButton: {
        paddingVertical: 12,
    },
    helpText: {
        color: '#16a34a',
        fontSize: 16,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 32,
        backgroundColor: '#1f2937',
        alignItems: 'center',
    },
    footerText: {
        color: '#9ca3af',
        textAlign: 'center',
    },
});