import React from "react";
import Row from "../Row/Row";
import axios from "../../../../utils/axios";
import requests from "../../../../utils/requests";

function RowList() {
  return (
    <>
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romantic Movies"} fetchUrl={requests.fetchRomanticMovies} />
      <Row title={"TV Shows"} fetchUrl={requests.fetchTvShow} />

      {/* <Row title={"Documentatries"} fetchUrl={requests.fetchDocumentaries} /> */}
    </>
  );
}

export default RowList;
