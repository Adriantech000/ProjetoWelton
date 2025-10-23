import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    color: '#333',
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 24,
  },
  hero: {
    height: 320,
    justifyContent: 'flex-end',
  },
  heroOverlay: {
    backgroundColor: 'rgba(6,45,18,0.45)',
    padding: 20,
    alignItems: 'center',
  },
  heroTitle: {
    color: '#fff8f0',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroButton: {
    backgroundColor: '#7a9a3a',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  cards: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff6ea',
    borderLeftWidth: 6,
    borderLeftColor: '#b07a2a',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2f4f2f',
    marginBottom: 6,
  },
  cardText: {
    color: '#3b3b3b',
    lineHeight: 18,
  },
});
