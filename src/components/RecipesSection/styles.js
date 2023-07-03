import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f6f6f6;
  padding: 80px 0;
`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
`;

export const CardHeading = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;