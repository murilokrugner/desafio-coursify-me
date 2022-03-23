import React from 'react';

import {View} from 'react-native';

import {Container, Logo} from './styles';

import ImageLogo from '../../assets/logo-2.png';

import MenuButton from '../Buttons/MenuButton';

const Header: React.FC = ({width, marginLeft, marginTop}: string) => {
  return (
    <Container width={width} marginLeft={marginLeft} marginTop={marginTop}>
      <Logo source={ImageLogo} />

      <MenuButton />
    </Container>
  );
};

export default Header;
