import React from 'react';

import {
  Container,
  Logo,
  DescriptionFooter,
  ButtonFooter,
  TextButtonFooter,
} from './styles';

import LogoImage from '../../assets/logo-coursify-w.png';

const Footer: React.FC = () => {
  return (
    <Container>
      <Logo source={LogoImage} />

      <DescriptionFooter>
        O Coursify.me é uma plataforma de ensino a distância,onde qualquer
        pessoa ou empresa pode construir seuEAD e vender cursos pela internet.
      </DescriptionFooter>

      <ButtonFooter>
        <TextButtonFooter>Quero conhecer a plataforma!</TextButtonFooter>
      </ButtonFooter>
    </Container>
  );
};

export default Footer;
