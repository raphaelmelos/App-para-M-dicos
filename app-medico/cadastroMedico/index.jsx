import { View, Text, TextInput, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

import styles from '../estilo';

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

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {medico ? 'Editar Médico' : 'Cadastro Médico'}
      </Text>

      <TextInput
        placeholder="Nome do médico"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Especialidade"
        style={styles.input}
        value={especialidade}
        onChangeText={setEspecialidade}
      />

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

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}