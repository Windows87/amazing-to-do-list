import { styled } from 'styled-components'

const StyledNothingHere = styled.p`
  color: white;
  margin: 0;
  margin-top: 12px;
`

const NothingHere = () => <StyledNothingHere data-test='nothing-here'>Não temos nada aqui ainda :(</StyledNothingHere>

export default NothingHere
