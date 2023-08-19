import styled from "styled-components";
import { Link } from "react-router-dom";

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
    font-size: 25px;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormInput = styled.input`
  margin-bottom: 32px;
  padding: 16px 16px;
  border: none;
  border-radius: 4px;
  
`

