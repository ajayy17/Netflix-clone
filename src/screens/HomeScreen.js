import React from 'react'
import './HomeScreen.css'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import requests from '../Request.'
import Row from '../components/Row'

const HomeScreen = () => {
  return (
    <React.Fragment>
    <div className="homescreen">
      <Nav />

      <Banner />

      <Row 
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
    </React.Fragment>
  )
}

export default HomeScreen
