import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { globalStyles } from '../global/StylesGlobal';
import LottieView from 'lottie-react-native';
import { useEffect, useState } from 'react';

export default function TelaPrincipal({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [loading, setLoading] = useState(true);

  function navigationCadastro() {
    navigation.navigate('ListGames');
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        // Mostrar a animação de carregamento por 3 segundos
        <LottieView
          autoPlay
          loop={false} // Pode ser false se quiser que a animação não fique em loop
          style={{ width: 400, height: 350 }}
          source={require('../assets/Animation - 1728347197598.json')}
        />
      ) : (
        // Após a animação, mostrar a tela principal
        <>
          <View style={styles.viewImages}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://e7.pngegg.com/pngimages/24/817/png-clipart-playstation-4-raiders-of-the-broken-planet-playstation-network-playstation-plus-playstation-electronics-text-thumbnail.png',
              }}
            />
          </View>
          <View style={styles.viewCabecalho}>
            <Text style={styles.textCabecalho}>Melhores games PLAYSTATION</Text>
          </View>
          <View style={styles.viewTextPrincipal}>
            <Text style={styles.textPrincipal}>
              Avalie os melhores games da saga PLAYSTATION AQUI
            </Text>
          </View>
          <TouchableOpacity
            style={globalStyles.stylishButton}
            onPress={navigationCadastro}
          >
            <Text style={styles.buttonText}>Clique Aqui</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003791', // Fundo azul semelhante à imagem
    alignItems: 'center',
    paddingTop: 60,
  },
  viewCabecalho: {
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40,
  },
  textCabecalho: {
    fontSize: 24,
    color: '#fff', // Texto branco
    fontWeight: 'bold',
  },
  viewTextPrincipal: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  textPrincipal: {
    textAlign: 'center',
    color: '#fff', // Texto branco
  },
  viewImages: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 60,
  },
  image: {
    width: 180,
    height: 110,
  },
  // stylishButton: {
  //   marginTop: 30,
  //   backgroundColor: '#2f66df', // Cor de fundo do botão
  //   paddingVertical: 15,
  //   paddingHorizontal: 30,
  //   borderRadius: 30, // Arredondamento das bordas
  //   shadowColor: '#000', // Cor da sombra
  //   shadowOffset: { width: 0, height: 2 }, // Posição da sombra
  //   shadowOpacity: 0.8, // Opacidade da sombra
  //   shadowRadius: 8, // Distância da sombra
  //   elevation: 5, // Para funcionar no Android
  // },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
