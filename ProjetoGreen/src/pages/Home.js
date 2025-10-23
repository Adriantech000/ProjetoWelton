import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GreenRoofApp({ navigation }) {
    const benefits = [
        {
            icon: '🌿',
            title: 'Sustentabilidade',
            description: 'Contribui para a redução de CO2 e melhora a qualidade do ar urbano'
        },
        {
            icon: '💧',
            title: 'Gestão de Água',
            description: 'Absorve água da chuva, reduzindo enchentes e aliviando o sistema de drenagem'
        },
        {
            icon: '💰',
            title: 'Economia',
            description: 'Reduz custos com energia ao melhorar o isolamento térmico do imóvel'
        },
        {
            icon: '💚',
            title: 'Bem-estar',
            description: 'Cria ambientes mais agradáveis e saudáveis para viver e trabalhar'
        },
        {
            icon: '🛡️',
            title: 'Proteção',
            description: 'Aumenta a vida útil da cobertura protegendo contra raios UV e variações térmicas'
        },
        {
            icon: '🏠',
            title: 'Valorização',
            description: 'Valoriza o imóvel com soluções modernas e ecologicamente responsáveis'
        }
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.heroContainer}>
                <ImageBackground
                    source={require('../assets/Telhado.png')}
                    style={styles.hero}
                    resizeMode="cover"
                >
                    <View style={styles.overlay}>
                        <Text style={styles.heroIcon}>🌿</Text>
                        <Text style={styles.title}>Green Roof</Text>
                        <Text style={styles.subtitle}>
                            Transforme seu telhado em um jardim sustentável
                        </Text>
                    </View>
                    
                    {/* Gradiente de transição na parte inferior */}
                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.7)', '#ffffff']}
                        style={styles.gradientTransition}
                    />
                </ImageBackground>
            </View>

            <View style={styles.benefitsSection}>
                <Text style={styles.sectionTitle}>
                    Por que escolher um telhado verde?
                </Text>

                <View style={styles.cardsContainer}>
                    {benefits.map((benefit, index) => (
                        <View key={index} style={styles.card}>
                            <View style={styles.cardHeader}>
                                <View style={styles.iconContainer}>
                                    <Text style={styles.cardIcon}>{benefit.icon}</Text>
                                </View>
                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{benefit.title}</Text>
                                    <Text style={styles.cardDescription}>{benefit.description}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.ctaSection}>
                <Text style={styles.ctaTitle}>Faça seu orçamento</Text>
                <Text style={styles.ctaText}>
                    Entre em contato conosco e descubra como transformar seu telhado em um espaço verde e sustentável
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Detalhes')}
                >
                    <Text style={styles.buttonText}>Solicitar Orçamento</Text>
                </TouchableOpacity>
            </View>

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
        minHeight: 500,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 48,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 24,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 16,
        textAlign: 'center',
        maxWidth: 400,
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
    benefitsSection: {
        paddingHorizontal: 24,
        paddingTop: 48,
        paddingBottom: 48,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 24,
        maxWidth: 1200,
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: 32,
        width: '100%',
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        borderRadius: 16,
        padding: 24,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
        width: '48%',
        maxWidth: 400,
        minWidth: 300,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconContainer: {
        backgroundColor: '#dcfce7',
        padding: 12,
        borderRadius: 12,
        marginRight: 16,
    },
    cardIcon: {
        fontSize: 28,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 16,
        color: '#4b5563',
        lineHeight: 24,
    },
    ctaSection: {
        paddingHorizontal: 24,
        paddingVertical: 64,
        backgroundColor: '#f0fdf4',
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: 24,
    },
    ctaText: {
        fontSize: 16,
        color: '#4b5563',
        textAlign: 'center',
        marginBottom: 32,
        maxWidth: 400,
        lineHeight: 24,
    },
    button: {
        backgroundColor: '#16a34a',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 9999,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 18,
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