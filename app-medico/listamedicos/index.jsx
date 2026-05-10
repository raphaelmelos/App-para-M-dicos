import { View, Text, FlatList, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';
import styles from '../estilo';
import {  listarMedicos,  deletarMedico} from '../database';


export default function ListaMedicos({ navigation }) {
  const [lista, setLista] = useState([]);

  function carregarmedicos(){
    const dados = listarMedicos();
    console.log(dados);

    setLista(dados);
  }

  useEffect(() => {
    carregarmedicos();
  }, []);

  function excluir(id) {
    console.log(id);


    deletarMedico(id);
    
    carregarmedicos();


  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Médicos</Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            
            {item.foto && (
              <Image
                source={{ uri: item.foto }}
                style={styles.fotoLista}
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