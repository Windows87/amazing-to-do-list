import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ disabled }) => (!disabled ? '#0C9200' : '#878787')};
  color: white;
  height: 38px;
  border: 0;
  border-radius: 12px;
  margin-bottom: 10px;
  padding-left: 60px;
  padding-right: 60px;
  font-size: 16px;
  font-family: Montserrat;
  &:hover {
    cursor: pointer;
  }
`

export default Button
