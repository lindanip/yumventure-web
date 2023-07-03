import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Section = styled.section`
  background-color: var(--primary-color);
  padding: 80px 0;
`;

export const Container = styled.div`
  max-width: 1281px;
  margin: 0 auto;
  padding: 0 16px;
  /* display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between; */
`;


export const Block = styled.div`
  /* max-width: 1281px; */
  /* margin: 0 auto; */
  /* padding: 0 16px; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;


export const Heading = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  flex-basis: 100%;
  height: 400px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-basis: 40%;
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Input = styled(Field)`
  width: 98%;
  padding: 12px 1%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 9px 1%;
`;

export const MessageArea = styled.textarea`
  width: 98%;
  padding: 12px 1%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 9px 1%;
`;


export const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 4px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;