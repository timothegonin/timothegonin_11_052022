import React, { useEffect } from 'react'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

const Home = () => {
  // fetch('http://localhost:3000/datas/logements.json')
  //   .then((resp) => {
  //     return resp.json()
  //   })
  //   .then((data) => {
  //     console.log(data)
  //   })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/datas/logements.json`
        )
        const logements = await response.json()
        console.log(logements)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <Banner />
      <Gallery />
    </React.Fragment>
  )
}

export default Home
