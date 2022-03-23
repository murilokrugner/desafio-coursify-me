import React, {useState, useEffect} from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  CategoryName,
  ButtonViewMore,
  TextButtonViewMore,
} from './styles';

import PostsList from '../PostsList';

import api from '../../../services/api';
import Footer from '../../Footer';

const CategoryList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  async function loadData() {
    try {
      setLoading(true);

      const response = await api.get('categories/');

      response.data.map(async category => {
        var post = await api.get(`posts?categories=${category.id}`);

        const data = {
          id: category.id,
          name: category.name,
          posts:  post.data,
        }

        setCategories(oldState => [...oldState, data]);

        
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
      
        <FlatList          
          data={categories}
          keyExtractor={item => item.id + Math.random()}
          ListFooterComponent={<Footer/>}
          renderItem={({item, index}) => (
            <>
              <Container>
                <CategoryName>{item.name.toUpperCase()}</CategoryName>

                <ButtonViewMore>
                  <TextButtonViewMore>VER MAIS ►</TextButtonViewMore>
                </ButtonViewMore>
              </Container>     
                <PostsList data={item.posts} loading={loading}/>
              </>
          )}
        />
         
      )}

    </>

  );
};

export default CategoryList;
