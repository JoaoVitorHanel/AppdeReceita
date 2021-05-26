import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import
{
Background,
SubmitButton,
SubmitText,
TextoPerfil,
Logo
} from './styles'


export default function Perfil() {

  const { user, signOut } = useContext(AuthContext);
  const uid = user && user.uid;

 return (
   <Background>


    <Perfil>
      
       <Logo source={require('../../assets/logoreceita.png')}/>

        <TextoPerfil>
          Olá:  {user && user.nome}
        </TextoPerfil>

    </Perfil>

      <SubmitButton onPress={ ()=> signOut() }>
        <SubmitText>SAIR</SubmitText>
      </SubmitButton>

   </Background>

  );
}


