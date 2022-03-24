import React from 'react';

import logoImage from '../../../assets/logo.png';

import {Container, CoverImage} from './styles';
interface Props {
  image: {
    guid: {
      rendered: string;
    }
  };
}

const CoverImagePost: React.FC<Props> = ({image}: Props) => {
  return (
    <Container>
      {image ? (
        <CoverImage source={{uri: image.guid.rendered}} />
      ) : (
        <CoverImage source={logoImage} />
      )}
    </Container>
  );
};

export default CoverImagePost;
