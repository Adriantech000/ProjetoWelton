import React, { useEffect, useRef } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GreenRoofApp({ navigation }) {
    // Animações
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
        // Animação de entrada do hero
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 50,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

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

    // Componente de Card Animado
    const AnimatedCard = ({ benefit, index }) => {
        const cardFadeAnim = useRef(new Animated.Value(0)).current;
        const cardSlideAnim = useRef(new Animated.Value(30)).current;
        const cardScaleAnim = useRef(new Animated.Value(1)).current;
        const cardHeightAnim = useRef(new Animated.Value(0)).current;
        const descriptionOpacity = useRef(new Animated.Value(0)).current;
        const [isExpanded, setIsExpanded] = React.useState(false);

        useEffect(() => {
            // Animação de entrada com delay baseado no índice
            Animated.parallel([
                Animated.timing(cardFadeAnim, {
                    toValue: 1,
                    duration: 600,
                    delay: index * 150,
                    useNativeDriver: true,
                }),
                Animated.timing(cardSlideAnim, {
                    toValue: 0,
                    duration: 600,
                    delay: index * 150,
                    useNativeDriver: true,
                }),
            ]).start();
        }, []);

        const handleHoverIn = () => {
            setIsExpanded(true);
            Animated.parallel([
                Animated.spring(cardScaleAnim, {
                    toValue: 1.05,
                    friction: 7,
                    tension: 40,
                    useNativeDriver: true,
                }),
                Animated.timing(cardHeightAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(descriptionOpacity, {
                    toValue: 1,
                    duration: 400,
                    delay: 100,
                    useNativeDriver: true,
                }),
            ]).start();
        };

        const handleHoverOut = () => {
            setIsExpanded(false);
            Animated.parallel([
                Animated.spring(cardScaleAnim, {
                    toValue: 1,
                    friction: 7,
                    tension: 40,
                    useNativeDriver: true,
                }),
                Animated.timing(cardHeightAnim, {
                    toValue: 0,
                    duration: 250,
                    useNativeDriver: false,
                }),
                Animated.timing(descriptionOpacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        };

        const maxHeight = cardHeightAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200],
        });

        return (
            <Animated.View
                style={[
                    styles.card,
                    {
                        opacity: cardFadeAnim,
                        transform: [
                            { translateY: cardSlideAnim },
                            { scale: cardScaleAnim }
                        ],
                    },
                ]}
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
            >
                <View style={styles.cardHeader}>
                    <View style={styles.iconContainer}>
                        <Text style={styles.cardIcon}>{benefit.icon}</Text>
                    </View>
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{benefit.title}</Text>
                        <Animated.View
                            style={{
                                maxHeight: maxHeight,
                                overflow: 'hidden',
                            }}
                        >
                            <Animated.Text
                                style={[
                                    styles.cardDescription,
                                    { opacity: descriptionOpacity }
                                ]}
                            >
                                {benefit.description}
                            </Animated.Text>
                        </Animated.View>
                    </View>
                </View>
            </Animated.View>
        );
    };

    // Componente de Botão Animado
    const AnimatedButton = () => {
        const buttonScale = useRef(new Animated.Value(1)).current;
        const buttonFade = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.timing(buttonFade, {
                toValue: 1,
                duration: 800,
                delay: 400,
                useNativeDriver: true,
            }).start();

            // Animação de pulso sutil
            Animated.loop(
                Animated.sequence([
                    Animated.timing(buttonScale, {
                        toValue: 1.05,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(buttonScale, {
                        toValue: 1,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        }, []);

        const handlePressIn = () => {
            Animated.spring(buttonScale, {
                toValue: 0.95,
                useNativeDriver: true,
            }).start();
        };

        const handlePressOut = () => {
            Animated.spring(buttonScale, {
                toValue: 1,
                friction: 3,
                tension: 40,
                useNativeDriver: true,
            }).start();
        };

        return (
            <Animated.View
                style={{
                    opacity: buttonFade,
                    transform: [{ scale: buttonScale }],
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Detalhes')}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    activeOpacity={0.9}
                >
                    <Text style={styles.buttonText}>Solicitar Orçamento</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.heroContainer}>
                <ImageBackground
                    source={require('../assets/Telhado.png')}
                    style={styles.hero}
                    resizeMode="cover"
                >
                    <Animated.View
                        style={[
                            styles.overlay,
                            {
                                opacity: fadeAnim,
                            },
                        ]}
                    >
                        <Animated.Text
                            style={[
                                styles.heroIcon,
                                {
                                    transform: [
                                        { scale: scaleAnim },
                                        { translateY: slideAnim }
                                    ],
                                },
                            ]}
                        >
                            🌿
                        </Animated.Text>
                        <Animated.Text
                            style={[
                                styles.title,
                                {
                                    opacity: fadeAnim,
                                    transform: [{ translateY: slideAnim }],
                                },
                            ]}
                        >
                            Green Roof
                        </Animated.Text>
                        <Animated.Text
                            style={[
                                styles.subtitle,
                                {
                                    opacity: fadeAnim,
                                    transform: [{ translateY: slideAnim }],
                                },
                            ]}
                        >
                            Transforme seu telhado em um jardim sustentável
                        </Animated.Text>
                    </Animated.View>

                    <LinearGradient
                        colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.7)', '#ffffff']}
                        style={styles.gradientTransition}
                    />
                </ImageBackground>
            </View>

            <View style={styles.benefitsSection}>
                <Animated.Text
                    style={[
                        styles.sectionTitle,
                        {
                            opacity: fadeAnim,
                        },
                    ]}
                >
                    Por que escolher um telhado verde?
                </Animated.Text>

                <View style={styles.cardsContainer}>
                    {benefits.map((benefit, index) => (
                        <AnimatedCard
                            key={index}
                            benefit={benefit}
                            index={index}
                        />
                    ))}
                </View>
            </View>

            {/* Sobre Nós Section */}
            <View style={styles.aboutSection}>
                <View style={styles.aboutContainer}>
                    <View style={styles.aboutIconWrapper}>
                        <Text style={styles.aboutIcon}>🌱</Text>
                    </View>
                    <Text style={styles.aboutTitle}>Sobre Nós</Text>
                    <View style={styles.aboutDivider} />
                    <Text style={styles.aboutText}>
                        Nossa iniciativa teve início em um ideathon, onde surgiu a proposta de aplicar telhados verdes como solução sustentável para os centros urbanos. A partir de estudos, pesquisas e muita dedicação, transformamos essa ideia em um projeto real, desenvolvendo este site como um espaço para compartilhar nosso propósito e expandir nossa atuação.
                    </Text>
                    <Text style={styles.aboutText}>
                        Nosso objetivo é integrar sustentabilidade e inovação, contribuindo para cidades mais verdes, funcionais e harmoniosas, onde a natureza e a vida urbana coexistam de forma equilibrada.
                    </Text>
                </View>
            </View>

            <View style={styles.ctaSection}>
                <Animated.Text
                    style={[
                        styles.ctaTitle,
                        {
                            opacity: fadeAnim,
                        },
                    ]}
                >
                    Faça seu orçamento
                </Animated.Text>
                <Animated.Text
                    style={[
                        styles.ctaText,
                        {
                            opacity: fadeAnim,
                        },
                    ]}
                >
                    Entre em contato conosco e descubra como transformar seu telhado em um espaço verde e sustentável
                </Animated.Text>
                <AnimatedButton />
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
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        width: '48%',
        maxWidth: 400,
        minWidth: 300,
        minHeight: 100,
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
    aboutSection: {
        paddingHorizontal: 24,
        paddingVertical: 80,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    aboutContainer: {
        maxWidth: 800,
        alignItems: 'center',
    },
    aboutIconWrapper: {
        backgroundColor: '#dcfce7',
        padding: 20,
        borderRadius: 100,
        marginBottom: 24,
    },
    aboutIcon: {
        fontSize: 48,
    },
    aboutTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#15803d',
        marginBottom: 16,
        textAlign: 'center',
    },
    aboutDivider: {
        width: 80,
        height: 4,
        backgroundColor: '#16a34a',
        borderRadius: 2,
        marginBottom: 32,
    },
    aboutText: {
        fontSize: 17,
        color: '#374151',
        lineHeight: 28,
        textAlign: 'center',
        marginBottom: 20,
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
        shadowColor: '#16a34a',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
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