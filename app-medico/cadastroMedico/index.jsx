import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';

import styles from '../estilo';
import { inserirMedico } from '../database';

export default function CadastroMedico({ route, navigation }) {
  const medico = route?.params?.medico;

  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [crm, setCrm] = useState('');
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    if (medico) {
      setNome(medico.nome);
      setEspecialidade(medico.especialidade);
      setCrm(medico.crm);
      setFoto(medico.foto || null);
    }
  }, [medico]);

  async function tirarFoto() {
    const permission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      alert('Permissão da câmera necessária');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: true
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  }

  function salvar() {
    const dados = { nome, especialidade, crm, foto };

    if (medico) {
      console.log('Editando médico:', dados);
    } else {
      console.log('Novo médico:', dados);
    }
    console.log(dados);
    inserirMedico(dados);


    navigation.goBack();
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {medico ? 'Editar Médico' : 'Cadastro Médico'}
      </Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        />

      <Picker
        selectedValue={especialidade}
        onValueChange={(itemValue) => setEspecialidade(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Selecione uma especialidade" value="" />
        <Picker.Item label="Cardiologia" value="Cardiologia" />
        <Picker.Item label="Dermatologia" value="Dermatologia" />
        <Picker.Item label="Pediatria" value="Pediatia" />
        <Picker.Item label="Ortopedia" value="Ortopedia" />
    

      </Picker>
     

      <TextInput
        placeholder="CRM"
        style={styles.input}
        value={crm}
        onChangeText={setCrm}
      />

      <Button title="Tirar Foto" onPress={tirarFoto} />

      {foto && (
        <Image
          source={{ uri: foto }}
          style={{ width: 150, height: 150, marginTop: 10 }}
        />
      )}

      <TouchableOpacity 
            style={styles.botao} onPress={salvar} 
      >
        <Text style={styles.textoBotao}>Salvar</Text>

      </TouchableOpacity>

    </View>
  );
}