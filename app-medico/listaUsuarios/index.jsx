import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { listarUsuarios, deletarUsuario } from '../database';
import styles from '../estilo';

export default function ListaUsuarios({ navigation }) {
  const [lista, setLista] = useState([]);

  function carregarUsuarios(){
    const dados = listarUsuarios();

     setLista(dados);
     console.log(dados);

  }


  useEffect(() => {
    carregarUsuarios();
  }, []);

  function excluir(id){
    console.log(id);

    deletarUsuario(id);

    carregarUsuarios();
    
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>RG: {item.rg}</Text>
            <Text>Data Nasc: {item.dataNascimento}</Text>

            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate('CadastroUsuario', { usuario: item })
              }
            />

            <TouchableOpacity
              style={styles.botaodel}
              onPress={() => excluir(item.id)}
            >
              <Text style={styles.textoBotao}>Excluir</Text>
             </TouchableOpacity> 
          </View>
        )}
      />
    </View>
  );
}