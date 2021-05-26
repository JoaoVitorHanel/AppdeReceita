import styled from 'styled-components/native';

export const Container = styled.View` 
 flex: 1;
 background-color: #FFF;
 align-items: center;
`;

export const Logo = styled.Image`
 margin-top: 20px;
 height: 200px;
 width: 200px;
 `;

export const Sobre = styled.View`
justify-content:center;
align-items: center;
margin-top: 20px;
margin-right: 30px;
margin-left: 30px;
`;

export const SobreNome = styled.Text`
color: #ad0005;
font-size: 25px;
font-weight: bold;
`;

export const SobreDescricao = styled.Text`
font-style: italic;
font-size: 15px;
`;

export const Guia = styled.Text`
margin-top: 10px;
color: #ad0005;
font-size: 25px;
font-weight: bold;
`;

export const GuiaDescricao = styled.Text`
margin-top: 10px;
font-style: italic;
font-size: 15px;
`;
