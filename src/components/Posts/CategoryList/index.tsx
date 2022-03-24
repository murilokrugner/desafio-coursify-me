import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  Container,
  CategoryName,
  ButtonViewMore,
  TextButtonViewMore,
} from './styles';

import PostsList from '../PostsList';

import api from '../../../services/api';
import Footer from '../../Footer';

interface DataPosts {
  data: {
    postData: object;
    image: object;
  };
  push: () => void;
}

interface Datas {
  category: {
    id: number;
    name: string
  },
  post: object;
}

const CategoryList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState<Datas[]>([]);

  async function loadData() {
    try {
      setLoading(true);

      var categories = await api.get('categories');
      
      var images = await api.get(`media/`);

      var dataPosts: DataPosts | [] = [];

      categories.data.map(async category => {
        var posts = await api.get(`posts?categories=${category.id}`);

        posts.data.map(post => {
          var url = images.data.find(image => image.id === post.featured_media);
          var data = {
            postData: post,
            image: url,
          }

          dataPosts.push(data);
        });

        var data = {
          category,
          post: dataPosts,
        }

        setDatas(oldState => [...oldState, data]);
        dataPosts = [];
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
       <FlatList
          data={datas}
          keyExtractor={(item) => item.category.id + Math.random()}
          ListFooterComponent={<Footer />}
          renderItem={({item, index}) => (
            <>
              <Container>
                <CategoryName>{item.category.name.toUpperCase()}</CategoryName>

                <ButtonViewMore>
                  <TextButtonViewMore>VER MAIS ►</TextButtonViewMore>
                </ButtonViewMore>
              </Container>
              <PostsList data={item.post} loading={loading} />
            </>
          )}
        />   
        </>
      )}
    </>
  );
};

export default CategoryList;
