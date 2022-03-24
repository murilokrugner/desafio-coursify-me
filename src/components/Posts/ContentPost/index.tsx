import React, {useState, useEffect} from 'react';

import {ScrollView} from 'react-native';

import {Container, ContainerTitlePost, TitlePost, ContainerContent, ContentText} from './styles';

import CoverImagePost from '../CoverImagePost';
import Footer from '../../Footer';

interface Props {
  post: {
    title: {
      rendered: string;
    },
    excerpt:{
      rendered: string;
    }
  }
  image: object;
}

const ContentPost: React.FC<Props> = ({post, image}: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  }, []);

  return (
    <ScrollView style={{flex: 1}}>
    <Container>
      <ContainerTitlePost>
        <TitlePost>
          {post.title.rendered}
        </TitlePost>
      </ContainerTitlePost>

      <ContainerContent>
        <ContentText>{post.excerpt.rendered.substring(3, 200)}</ContentText>
      </ContainerContent>
      <CoverImagePost image={image}/>
      <ContainerContent>
        <ContentText>{post.excerpt.rendered.substring(300, 600)}</ContentText>
      </ContainerContent>
    </Container>
    <Footer />
    </ScrollView>
  );
};

export default ContentPost;
