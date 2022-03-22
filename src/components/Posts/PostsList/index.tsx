import React from 'react';
import ImageLogo from '../../../assets/logo.png';

import {
  Container,
  ContainerPost,
  ImagePost,
  ContainerTitlePost,
  TitlePost,
  ContainerDescriptionPost,
  DescriptionPost,
  ContainerReadMore,
  ReadMore,
} from './styles';

const PostsList: React.FC = () => {
  return (
    <Container>
      <ContainerPost>
        <ImagePost source={ImageLogo} />

        <ContainerTitlePost>
          <TitlePost>Como criar uma landing page de alta...</TitlePost>
        </ContainerTitlePost>

        <ContainerDescriptionPost>
          <DescriptionPost>
            Uma landing page de alta conversão é o que todo mundo que vende
            online precisa ter para otimizar...
          </DescriptionPost>
        </ContainerDescriptionPost>

        <ContainerReadMore>
          <ReadMore>Ler mais</ReadMore>
        </ContainerReadMore>
      </ContainerPost>
    </Container>
  );
};

export default PostsList;
