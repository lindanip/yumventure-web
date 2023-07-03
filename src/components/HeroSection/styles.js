import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  padding: 40px 0;

  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;

`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Content = styled.div`
  padding-bottom: 40px;
  margin-top: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 180px;
  }
`;

export const Heading = styled.h2`
  font-size: 48px;
  margin-bottom: 9px;
  color: var(--tertiary-color);
`;

export const Paragraph = styled.p`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--text-color-dark);
`;

export const Button = styled.button`
  width: 180px;
  /* background-color: var(--brand-color-1); */
  color: #ffff;
  padding: 21px 21px;
  border: none;
  border-radius: 27px;
  font-size: 16px;
  cursor: pointer;
`;