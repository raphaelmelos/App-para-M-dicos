import { View, Text, FlatList, Button, Image } from 'react-native';
import { useState } from 'react';

import { medicos as dadosIniciais } from '../data/medicos';
import styles from '../estilo';

export default function ListaMedicos({ navigation }) {
  const [lista, setLista] = useState(dadosIniciais);

  function excluir(id) {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Médicos</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            
            {item.foto && (
              <Image
                source={{ uri: item.foto }}
                style={{ width: 80, height: 80, borderRadius: 10 }}
              />
            )}

            <Text>Nome: {item.nome}</Text>
            <Text>Especialidade: {item.especialidade}</Text>
            <Text>CRM: {item.crm}</Text>

            <Button
              title="Editar"
              onPress={() =>
                navigation.navigate('CadastroMedico', { medico: item })
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