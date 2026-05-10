import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'left',
    gap: 25
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  buttonSpacing: {
    marginTop: 10,
  },
  foto: {
  width: 150,
  height: 150,
  marginTop: 10,
  alignSelf: 'center'
},
fotoLista: {
  width: 80,
  height: 80,
  borderRadius: 10,
  marginBottom: 5
},
title: {
    fontSize: 28,
    marginBottom: 10
},
botao: {
  backgroundColor: '#25D366',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginTop: 10
},

textoBotao: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold'
},
botaohome: {
  backgroundColor: '#0056B3',
  padding: 15,
  borderRadius: 199,
  alignItems: 'center',
  marginTop: 10
},
botaodel: {
  backgroundColor: '#ff0000',
  padding: 15,
  borderRadius: 199,
  alignItems: 'center',
  marginTop: 10
}

});

/*
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    gap: 10
  },
  title: {
    fontSize: 28,
    marginBottom: 20
  }
*/

export default styles;