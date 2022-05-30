import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Loader from '../../utils/style/Loader'
import CardRental from '../CardRental'

const GalleryWrapper = styled.main`
  margin-top: 4.3rem;
  padding-right: 2rem;
  padding-left: 2rem;
  width: 100%;
`
const StyledGallery = styled.div`
  background-color: ${colors.lightGray};
  /* height: auto; */
  border-radius: 2.5rem;

  padding: 5.6rem 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 34rem);
  justify-content: space-evenly;
  row-gap: 5.6rem;
  column-gap: 1rem;

  @media screen and (max-width: 886px) {
    justify-content: space-evenly;
    width: auto;
    padding: 0;
    margin: 0;
    margin-top: 2.2rem;
    row-gap: 2rem;
    background: none;
  }
`

const Gallery = () => {
  const [logementsData, setLogementsData] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
      setDataLoading(true)
      try {
        const response = await fetch(
          `http://localhost:3000/datas/logements.json`
        )
        const resultData = await response.json()
        setLogementsData(resultData)
        setDataLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return isDataLoading ? (
    <Loader />
  ) : (
    <GalleryWrapper>
      <StyledGallery>
        {logementsData.map((logement) => (
          <Link to={`/rental`} key={logement.id}>
            <CardRental title={logement.title} cover={logement.cover} />
          </Link>
        ))}
      </StyledGallery>
    </GalleryWrapper>
  )
}
export default Gallery
