import { View, Text, FlatList, Button } from 'react-native';
import { useState } from 'react';

import { usuarios as dadosIniciais } from '../data/usuarios';
import styles from '../estilo';

export default function ListaUsuarios({ navigation }) {
  const [lista, setLista] = useState(dadosIniciais);

  function excluir(id) {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
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

            <Button
              title="Excluir"
              onPress={() => excluir(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}