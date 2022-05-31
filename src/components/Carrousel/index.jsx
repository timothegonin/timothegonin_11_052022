import { useState } from 'react'
import styled from 'styled-components'
import arrow from '../../assets/arrow_back.svg'
// import bgTest from '../../assets/bg-card-test.jpg'

const CarrouselWrapper = styled.aside`
  border-radius: 2.5rem;
  margin: 2rem auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 124rem;
  height: 41.5rem;
  position: relative;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 25.5rem;
  }
`
const CarrouselImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`
const CarrouselButton = styled.button`
  cursor: pointer;
  border: none;
  position: absolute;
  background-color: unset;
  width: 9.6rem;
  height: 11.964rem;
  background-image: url(${arrow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &.button--previous {
    left: 2rem;
    transform: rotate(90deg);
  }
  &.button--next {
    right: 2rem;
    transform: rotate(270deg);
  }
  @media screen and (max-width: 768px) {
    width: 6rem;
    height: 6rem;
  }
  @media screen and (max-width: 576px) {
    width: 4rem;
    height: 4rem;
  }
  @media screen and (max-width: 426px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`
const CarrouselIndex = styled.p`
  color: white;
  bottom: 2rem;
  left: 50%;
  right: 50%;
  display: block;
  position: absolute;
  font-weight: 500;
  font-size: 18px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
const Carrousel = ({ pictures }) => {
  const [currentPicture, setCurrentPicture] = useState(0)
  const handlePrevious = () => {
    currentPicture === 0
      ? setCurrentPicture(pictures.length - 1)
      : setCurrentPicture(currentPicture - 1)
  }
  const handleNext = () => {
    currentPicture === pictures.length - 1
      ? setCurrentPicture(0)
      : setCurrentPicture(currentPicture + 1)
  }
  return (
    <CarrouselWrapper>
      <CarrouselImage src={pictures[currentPicture]} alt="" />
      <CarrouselButton
        className="button--previous"
        onClick={handlePrevious}
      ></CarrouselButton>
      <CarrouselButton
        className="button--next"
        onClick={handleNext}
      ></CarrouselButton>
      <CarrouselIndex>
        {currentPicture + 1}/{pictures.length}
      </CarrouselIndex>
    </CarrouselWrapper>
  )
}
export default Carrousel
