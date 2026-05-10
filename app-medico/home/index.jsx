import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../estilo';
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity  
      style={styles.botaohome}
        
      onPress={() => navigation.navigate('CadastroMedico')}
      >
        <Text style={styles.textoBotao}>Cadastrar Medico</Text>  

      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botaohome}
        onPress={() => navigation.navigate('CadastroUsuario')}
      >
        <Text style={styles.textoBotao}>Cadastrar Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaohome}
        onPress={() => navigation.navigate('ListaMedicos')}
      > 
        <Text style={styles.textoBotao}>Listar Medicos</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.botaohome}
        onPress={() => navigation.navigate('ListaUsuarios')}
      >
        <Text style={styles.textoBotao}>Listar Usuarios</Text>
      </TouchableOpacity>
   
      
    </View>

  );
};