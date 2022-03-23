import React from 'react';

import logoImage from '../../../assets/logo.png';

import {Container, CoverImage} from './styles';

const CoverImagePost: React.FC = () => {
  return (
    <Container>
      <CoverImage source={logoImage} />
    </Container>
  );
};

export default CoverImagePost;
