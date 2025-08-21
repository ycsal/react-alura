import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;
const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

function IconesHeader() {
  return (
    <Icones>
      { icones.map( (icone) => (
        <Icone className='icone'> <img src={icone} alt="ícone" /></Icone>
      ) ) }
    </Icones>
  );
}

export default IconesHeader;
