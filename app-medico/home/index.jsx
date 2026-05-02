import { View, Text, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>

      <Button 
        title="Cadastrar Médico"
        onPress={() => navigation.navigate('CadastroMedico')}
      />

      <Button 
        title="Cadastrar Usuario"
        onPress={() => navigation.navigate('CadastroUsuario')}

    />

      <Button
        title="Listar Medicos"
        onPress={() => navigation.navigate('ListaMedicos')}
      />

      <Button
        title="Listar Usuarios"
        onPress={() => navigation.navigate("ListaUsuarios")}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  }
});