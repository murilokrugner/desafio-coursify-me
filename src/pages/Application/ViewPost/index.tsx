import React from 'react';

import {Container} from './styles';

import ContentPost from '../../../components/Posts/ContentPost';

const ViewPost: React.FC = ({route}) => {
  const post = route.params;

  return (
    <Container>
      <ContentPost post={post}/>
    </Container>
  );
};

export default ViewPost;
