import { View, Text, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';

import styles from '../estilo';

export default function CadastroUsuario({ route, navigation }) {
  const usuario = route?.params?.usuario;

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  useEffect(() => {
    if (usuario) {
      setNome(usuario.nome);
      setCpf(usuario.cpf);
      setRg(usuario.rg);
      setDataNascimento(usuario.dataNascimento);
    }
  }, [usuario]);

  function salvar() {
    if (usuario) {
      console.log('Editando usuário:', { nome, cpf, rg, dataNascimento });
    } else {
      console.log('Novo usuário:', { nome, cpf, rg, dataNascimento });
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {usuario ? 'Editar Usuário' : 'Cadastro Usuário'}
      </Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="CPF"
        style={styles.input}
        value={cpf}
        onChangeText={setCpf}
      />

      <TextInput
        placeholder="RG"
        style={styles.input}
        value={rg}
        onChangeText={setRg}
      />

      <TextInput
        placeholder="Data de Nascimento"
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}