import React from 'react';

import {Container} from './styles';

import ContentPost from '../../../components/Posts/ContentPost';
interface Props {
  route: {
    params: {
      post: {
        title: {
          rendered: string;
        },
        excerpt:{
          rendered: string;
        },
      };
      image: object;
    }
  }
}

const ViewPost: React.FC<Props> = ({route}: Props) => {
  const param = route.params;

  return (
    <Container>
      <ContentPost post={param.post} image={param.image}/>
    </Container>
  );
};

export default ViewPost;
