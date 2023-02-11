import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import { use } from "react";
import requests from "../utils/requests";

async function getData(genre) {

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url 
  || requests.fetchTrending.url}`)

  const movies = await request.json();

  return movies;
}


export default function Home({searchParams: { genre }}) {
  console.log(genre);
  const { results } = use(getData(genre));

  return (
    <main>
      <div>
        <Header />
        <Nav />
        <Results results={results} />  
      </div>
    </main>
  )
}