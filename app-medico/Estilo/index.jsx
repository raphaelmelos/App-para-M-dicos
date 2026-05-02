import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  buttonSpacing: {
    marginTop: 10
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
}
});

export default styles;