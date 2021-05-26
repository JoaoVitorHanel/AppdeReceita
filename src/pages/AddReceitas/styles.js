import styled from 'styled-components';

export const Container = styled.View` 
 flex: 1;
 background-color: #FFF;
 align-items: center;

`;

export const ViewText = styled.View`
align-items: center;
`;

export const Texto = styled.Text`
align-items: center;
margin-top: 10px;
color: #ad0005;
font-size: 18px;
font-weight: bold;
`;

export const Items = styled.View`
width: 90%;
margin-top: 10px;
`;

export const Item = styled.TextInput.attrs({
    placeholderTextColor: '#000'
})`
background: #FFF;
width: 100%;
font-size: 17px;
color: #ad0005;
margin-bottom: 15px;
padding: 10px;
border-radius: 5px;
border-width: 1px;
border-color: #000;
`;

export const AdicionarReceita = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #ad0005;
    width: 95%;
    height: 75px;
    border-radius: 5px;
    margin-top: 10px;
`;

export const DeletarReceita = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #ad0005;
    width: 95%;
    height: 75px;
    border-radius: 5px;
    margin-top: 10px;
`;

export const TextoReceita = styled.Text`
color: #FFF;
font-weight: bold;
font-size: 18px;
`;


