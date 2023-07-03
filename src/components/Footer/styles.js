import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;
  background-color: var(--secondary-color);
  color: var(--bg-light);
`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FirstRow = styled.div`
  margin: 45px 0px;
`;

export const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const LocationText = styled.p`
  font-size: 16px;
  max-width: 300px;
`;

export const ColumnBlock = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Link = styled.a`
  font-size: 16px;
  margin-bottom: 5px;
  color: var(--bg-light);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;