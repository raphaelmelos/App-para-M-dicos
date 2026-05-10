import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import CadastroMedico from './cadastroMedico';
import CadastroUsuario from './cadastroUsuario';
import ListaMedicos from './listamedicos';
import ListaUsuarios from './listaUsuarios';
import { useEffect } from 'react';
import { criarTabelaMedicos, criarTabelaUsuarios } from './database';



const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
      criarTabelaMedicos();
      criarTabelaUsuarios();
  }, []);

  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroMedico" component={CadastroMedico} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="ListaMedicos" component={ListaMedicos} />
        <Stack.Screen name="ListaUsuarios" component={ListaUsuarios} />
      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}