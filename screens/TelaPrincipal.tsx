import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { globalStyles } from '../global/StylesGlobal';

export default function TelaPrincipal({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  function navigationCadastro() {
    navigation.navigate('ListGames'); // Altere para corresponder ao nome da tela
  }

  return (
    <View style={styles.container}>
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
