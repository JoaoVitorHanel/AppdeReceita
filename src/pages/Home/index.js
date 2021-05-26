import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import
{ 
Container,
Logo,
Sobre,
SobreNome,
SobreDescricao,
Guia,
GuiaDescricao
} from './styles';

export default function Home() {

  return (
    <Container>

      <Logo source={require('../../assets/logoreceita.png')}/>

      <Sobre>
        <SobreNome>Receitas</SobreNome>
        <SobreDescricao>O Aplicativo foi feito com o 
        intuito de você guardar suas receitas digitalmente,
        você podera registrar e procurar por suas receitas!
        </SobreDescricao>

        <Guia>Como usar:</Guia>
        <GuiaDescricao>
        1º Você deve ir até "Receitas", logo após isso você
        devera registrar sua primeira receita.(Obs: Preencha
        todos os campos!)
        </GuiaDescricao>

        <GuiaDescricao>
        2º Assim que registrar sua receita, você deve ir em:
        "Minhas Receitas" logo após isso haverá todas suas  
        receitas.
        </GuiaDescricao>

        <GuiaDescricao>
        3º Você podera pesquisar pelo nome e editar.(Qualquer
        duvida entre em contato.)
        </GuiaDescricao>
      </Sobre>

    </Container>
  );
}

