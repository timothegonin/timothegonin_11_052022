import styled from 'styled-components'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const CardRentalWrapper = styled.article`
  border-radius: 1rem;
  overflow: hidden;
  height: 34rem;
  width: 100%;
  justify-self: center;
  display: inline-flex;
  align-items: flex-end;
  position: relative;
  @media screen and (max-width: 786px) {
    height: 25.5rem;
    width: 33.5rem;
  }
  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
`
const CardRentalImage = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const CardRentalTitle = styled.h3`
  position: absolute;
  z-index: 1;
  margin: 2rem;
  color: white;
  font-weight: 500;
  font-size: 1.8rem;
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ COMPONENT                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const CardRental = ({ title, cover }) => {
  return (
    <CardRentalWrapper>
      <CardRentalImage src={cover} alt={`Logement ${title}`} />
      <CardRentalTitle>{title}</CardRentalTitle>
    </CardRentalWrapper>
  )
}
export default CardRental
