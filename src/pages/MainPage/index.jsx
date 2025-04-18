import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";

const MainPage = () => {
  return (
    <div className="App">
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="TRENDING NOW" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="ACTION MOVIES"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="COMEDY MOVIES"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="HORROR MOVIES"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="ROMANCE MOVIES"
        id="RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="DOCUMENTARIES"
        id="D"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default MainPage;
