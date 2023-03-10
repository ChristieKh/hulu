import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "../utils/requests";


async function getData(genre) {
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url 
  || requests.fetchTrending.url}`)

  const movies = await request.json();

  return movies;
}

export default async function Home({ searchParams: { genre } }) {
  const { results } = await getData(genre);

  return (
    <main>
        <Header />
        <Nav />
        <Results results={results} />  
    </main>
  )
}