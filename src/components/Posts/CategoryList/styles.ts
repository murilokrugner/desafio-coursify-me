import styled from 'styled-components/native';
import colors from '../../../global/styles/colors';
import fonts from '../../../global/styles/fonts';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: 15px;
  margin-right: 15px;

  margin-top: 46px;

`;

export const CategoryName = styled.Text`
  color: ${colors.text};
  opacity: 1;

  font-family: ${fonts.primary};
  font-weight: bold;
  font-size: 22px;
`;

export const ButtonViewMore = styled.TouchableOpacity`
  width: auto;
  height: auto;
`;

export const TextButtonViewMore = styled.Text`
  color: ${colors.link};
  opacity: 1;

  font-size: 17px;
  font-family: ${fonts.primary};
`;
