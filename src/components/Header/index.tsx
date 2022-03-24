import React from 'react';

import {Container, Logo} from './styles';

import ImageLogo from '../../assets/logo-2.png';

import MenuButton from '../Buttons/MenuButton';

interface Props {
  width: string,
  marginLeft: number,
  marginTop: number
}

const Header: React.FC<Props> = ({width, marginLeft, marginTop}: Props) => {
  return (
    <Container width={width} marginLeft={marginLeft} marginTop={marginTop}>
      <Logo source={ImageLogo} />

      <MenuButton />
    </Container>
  );
};

export default Header;
