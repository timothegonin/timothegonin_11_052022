import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import ErrorImg from '../../assets/404.svg'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  text-align: center;
`

const StyledErrorImg = styled.img`
  height: 26.3rem;
  width: 59.7rem;
  margin-top: 16.9rem;
`
const ErrorMessage = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 3.6rem;
  margin-top: 6.6rem;
`
const ErrorLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  margin-top: 18.2rem;
`

const Error = () => {
  return (
    <ErrorWrapper>
      <StyledErrorImg src={ErrorImg} alt="404 illustration" />
      <ErrorMessage>
        Oups ! La page que vous demandez n'existe pas.
      </ErrorMessage>
      <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
    </ErrorWrapper>
  )
}
export default Error
