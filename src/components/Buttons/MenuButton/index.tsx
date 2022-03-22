import React from 'react';
import {View} from 'react-native';

import {ContainerMenuButton, ContainerUnion, UnionMenuButton} from './styles';

const MenuButton: React.FC = () => {
  return (
    <ContainerMenuButton>
      <ContainerUnion>
        <UnionMenuButton />
        <UnionMenuButton />
        <UnionMenuButton />
      </ContainerUnion>
    </ContainerMenuButton>
  );
};

export default MenuButton;
