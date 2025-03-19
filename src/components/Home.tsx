import { useEffect, useState } from "react";
import apiRickandMorty from "../services/Api-RickandMorty";
import apiTempo from "../services/Api-Tempo";
import apiChuckNorris from "../services/Api-Chucknorris";
import apiKanye from "../services/Api-Kanye";
import ApiTempo from "./Clima";

interface RickandMorty {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}

interface tempoData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface ChuckNorris {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

interface KanyeData {
  quote: string;
}

function Home() {
  const [rickandmorty, setRickandMorty] = useState<RickandMorty | null>(null);
  const [characterID, setCharacterID] = useState<number>(1);
  const [getTempo, setGetTempo] = useState<tempoData[]>([]);
  const [chucknorris, setChuckNorris] = useState<ChuckNorris | null>(null);
  const [kanye, setKanye] = useState<KanyeData | null>(null);

  async function loadRickandMorty(id: number) {
    try {
      const rick = await apiRickandMorty.get(`${id}`);
      setRickandMorty(rick.data);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  useEffect(() => {
    loadRickandMorty(characterID);
  }, [characterID]);

  const toggleRickandMorty = () => {
    setCharacterID((prevId) => prevId + 1);
  };

  async function loadTempo() {
    try {
      const tempo = await apiTempo.get("/GetTempo");
      setGetTempo(tempo.data);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  useEffect(() => {
    loadTempo();
  }, []);

  async function loadChuckNorris() {
    try {
      const chuck = await apiChuckNorris.get("/");
      setChuckNorris(chuck.data);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  useEffect(() => {
    loadChuckNorris();
  }, []);

  async function loadKanye() {
    try {
      const kany = await apiKanye.get("/");
      setKanye(kany.data);
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  useEffect(() => {
    loadKanye();
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-30">
          <div className="text-center xl:text-left mt-18 xl:mt-18 text-4xl xl:text-6xl text-gray-800 select-none">
            <h1>
              Rick and Morty <br />{" "}
              <span className="text-green-600">since 12 years</span>
            </h1>
            <div className="text-lg xl:text-xl mt-4 text-gray-500">
              <span>This API contains all Rick and Morty characters</span>
            </div>
            <div
              className="flex flex-col xl:flex-row items-center gap-5 mt-7"
              onClick={toggleRickandMorty}
            >
              <div className="text-sm text-center text-amber-50 w-30 h-10 pt-2 rounded-sm bg-green-600 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10 sm:pt-2">
                <button className="">Proximo</button>
              </div>
            </div>
          </div>
          {rickandmorty ? (
            <div className="w-100 h-115 rounded-tl-2xl text-center justify-items-center pt-2 ">
              <img
                src={rickandmorty.image}
                alt={rickandmorty.name}
                className="object-left w-50 pb-6 select-none"
              />
              <div>{rickandmorty.name}</div>
              <div>Status: {rickandmorty.status}</div>
              <p>Species: {rickandmorty.species}</p>
              <p>Gender: {rickandmorty.gender}</p>
              <p>Origin: {rickandmorty.origin.name}</p>
              <p>Location: {rickandmorty.location.name}</p>
              <p>Created: {new Date(rickandmorty.created).toLocaleString()}</p>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <h1 className="text-center text-3xl font-semibold mt-10 text-gray-800 select-none">
          Tempo
        </h1>
        {getTempo.length > 0 &&
          getTempo.map((data: tempoData) => (
            <div className="select-none" key={data.date}>
              <ApiTempo weather={data} />
            </div>
          ))}
        <div
          className="flex flex-col xl:flex-row items-center gap-5 mt-7 select-none"
          onClick={loadTempo}
        >
          <div className="text-sm text-center text-amber-50 w-30 h-10 pt-2 mb-10 rounded-sm bg-green-600 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10 sm:pt-2">
            <button className="">Proximo</button>
          </div>
        </div>
        {chucknorris ? (
          <div className="flex flex-col items-center justify-self-center text-center w-50 h-110 rounded-tl-2xl pt-2 ">
            <img
              src={chucknorris.icon_url}
              alt={chucknorris.icon_url}
              className="flex justify-center w-50 pb-6 select-none"
            />
            <div>{chucknorris.id}</div>
            <div className="text-sm">Status: {chucknorris.url}</div>
            <p className="text-sm">Species: {chucknorris.value}</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div
          className="flex flex-col xl:flex-row items-center gap-5 mt-10 select-none"
          onClick={loadChuckNorris}
        >
          <div className="text-sm text-center text-amber-50 w-30 h-10 pt-2 mb-10 rounded-sm bg-green-600 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10 sm:pt-2">
            <button className="">Proximo</button>
          </div>
        </div>
        {kanye ? (
          <div className="flex flex-col items-center justify-self-center text-center rounded-tl-2xl pt-2">
            <div>{kanye.quote}</div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <div
          className="flex flex-col xl:flex-row items-center gap-5 mt-7 select-none"
          onClick={loadKanye}
        >
          <div className="text-sm text-center text-amber-50 w-30 h-10 pt-2 mb-10 rounded-sm bg-green-600 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10 sm:pt-2">
            <button className="">Proximo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
