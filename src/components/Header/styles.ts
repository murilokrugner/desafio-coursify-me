import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  justify-content: space-between;

  align-items: center;

  width: ${(props: {width: string}) => props.width};

  height: auto;

  margin-top: ${(props: {marginTop: number}) => `${props.marginTop}px`};

  margin-right: 17px;

  margin-left: ${(props: {marginLeft: number}) => `${props.marginLeft}px`};
`;

export const Logo = styled.Image`
  width: 175px;

  height: 50px;
`;
