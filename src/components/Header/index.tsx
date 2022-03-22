import React from 'react';
import {View} from 'react-native';

import {Container, Logo} from './styles';
import ImageLogo from '../../assets/logo-2.png';

import MenuButton from '../Buttons/MenuButton';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={ImageLogo} />

      <MenuButton />
    </Container>
  );
};

export default Header;
