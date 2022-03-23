import styled from 'styled-components/native';

import colors from '../../global/styles/colors';

export const Container = styled.View`
  background-color: ${colors.footer};
  width: 100%;
  height: 219px;
  opacity: 1;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin-top: 46px;


`;

export const Logo = styled.Image`
  width: 172px;
  height: 45px;
`;

export const DescriptionFooter = styled.Text`
  color: ${colors.primary};

  font-size: 12px;
  text-align: center;

  opacity: 1;

  width: 290px;
`;

export const ButtonFooter = styled.TouchableOpacity`
  width: 216px;
  height: 44px;

  background-color: ${colors.button};
  border-radius: 60px;
  opacity: 1;

  justify-content: center;
  align-items: center;
`;

export const TextButtonFooter = styled.Text`
  color: ${colors.primary};

  font-size: 12px;
  text-align: center;

  opacity: 1;
`;
