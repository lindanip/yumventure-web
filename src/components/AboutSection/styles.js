import styled from 'styled-components';

export const SectionContainer = styled.section`
  max-width: 1281px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftBlock = styled.div`
  flex: 0 0 50%;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    text-align: center;
    margin-bottom: 40px;
  }
`;

export const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;

export const RightBlock = styled.div`
  flex: 0 0 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;