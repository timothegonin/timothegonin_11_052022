import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import ErrorImg from '../../assets/404.svg'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  text-align: center;
  padding: 0 2rem;
`

const StyledErrorImg = styled.img`
  height: 26.3rem;
  width: 59.7rem;
  margin-top: 16.9rem;
  @media screen and (max-width: 768px) {
    height: 9.9rem;
    width: 19.8rem;
    margin-top: 19.5rem;
  }
`
const ErrorMessage = styled.p`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 3.6rem;
  margin-top: 6.6rem;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
    margin-top: 1.1rem;
  }
`
const ErrorLink = styled(Link)`
  color: ${colors.primary};
  font-weight: 500;
  font-size: 18px;
  display: inline-block;
  margin-top: 18.2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 13.3rem;
    margin-bottom: 23.5rem;
  }
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
