import { useEffect, useState } from "react";
import apiRickandMorty from "../services/Api-RickandMorty";
import apiTempo from "../services/Api-Tempo";

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

interface WeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface WeatherProps {
    weather: WeatherData;
  }

const Home = () => {
  const [rickandmorty, setRickandMorty] = useState<RickandMorty | null>(null);
  const [characterID, setCharacterID] = useState<number>(1);
  const [getTempo, setGetTempo] = useState<WeatherProps[]>([]);

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
      console.log(getTempo)
    } catch (error) {
      console.log("Erro:", error);
    }
  }

  useEffect(() => {
    loadTempo();
  });

  return (
    <section className="h-full select-none">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-30">
          <div className="text-center xl:text-left mt-18 xl:mt-18 text-4xl xl:text-6xl text-gray-800">
            <h1>
              Rick and Morty <br />{" "}
              <span className="text-green-600">since 12 years</span>
            </h1>
            <div className="text-lg xl:text-xl mt-4 text-gray-500">
              <span>This API contains all Rick and Morty characters</span>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-5 mt-7" onClick={toggleRickandMorty}>
              <div className="text-sm text-center text-amber-50 w-30 h-10 pt-2 rounded-sm bg-green-600 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10 sm:pt-2">
                <button className="">
                  Proximo
                </button>
              </div>
            </div>
          </div>
          {rickandmorty ? (
            <div className="w-100 h-115 rounded-tl-2xl text-center justify-items-center pt-2 ">
              <img
                src={rickandmorty.image}
                alt={rickandmorty.name}
                className="object-left w-50 pb-6"
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
        <h1 className="text-center text-3xl font-semibold mt-10 text-gray-800">
          Our Clients
        </h1>
        <div className="text-center text-gray-500 mt-2">
          <span>We have been working with some Fortune 500+ clients</span>
        </div>
        {getTempo ? (
          <div className="flex flex-wrap justify-center gap-10 mt-15">
            <div className="transition duration-75 ease-in-out hover:scale-110">
              {getTempo.date}
              {getTempo.temperatureC}
            </div>
            <div className="transition duration-75 ease-in-out hover:scale-110">
              <img
                src="/Logo-Clients (1).svg"
                alt="Client Logo"
                className="w-12 h-auto"
              />
            </div>
            <div className="transition duration-75 ease-in-out hover:scale-110">
              <img
                src="/Logo-Clients (2).svg"
                alt="Client Logo"
                className="w-12 h-auto"
              />
            </div>
            <div className="transition duration-75 ease-in-out hover:scale-110">
              <img
                src="/Logo-Clients (3).svg"
                alt="Client Logo"
                className="w-12 h-auto"
              />
            </div>
            <div className="transition duration-75 ease-in-out hover:scale-110">
              <img
                src="/Logo-Clients (4).svg"
                alt="Client Logo"
                className="w-12 h-auto"
              />
            </div>
            <div className="transition duration-75 ease-in-out hover:scale-110">
              <img
                src="/Logo-Clients (5).svg"
                alt="Client Logo"
                className="w-12 h-auto"
              />
            </div>
            <div className="transition duration-75 ease-in-out hover:scale-110">
              <img
                src="/Logo-Clients (6).svg"
                alt="Client Logo"
                className="w-12 h-auto"
              />
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
        <h1 className="text-center text-3xl font-semibold mt-15 text-gray-800">
          Manage your entire community <br />
          in a single system
        </h1>
        <div className="text-center text-gray-500 mt-2">
          <span>Who is Nextcent suitable for?</span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-15">
          <div className="w-60 sm:w-80 md:w-72 lg:w-75 h-auto pt-3 rounded-sm bg-neutral-50 flex flex-col items-center transition duration-75 ease-in-out hover:scale-110">
            <img src="/Icon.svg" alt="" className="mb-2" />
            <h1 className="text-center text-2xl font-semibold mt-2 text-gray-800">
              Membership <br />
              Organisations
            </h1>
            <div className="text-center text-gray-500 mt-3">
              <span>
                Our membership management <br />
                software provides full automation of <br />
                membership renewals and payments
              </span>
            </div>
          </div>
          <div className="w-60 sm:w-80 md:w-72 lg:w-75 h-auto pt-3 rounded-sm bg-neutral-50 flex flex-col items-center transition duration-75 ease-in-out hover:scale-110">
            <img src="/Icon (1).svg" alt="" className="mb-2" />
            <h1 className="text-center text-2xl font-semibold mt-0 text-gray-800">
              National <br />
              Associations
            </h1>
            <div className="text-center text-gray-500 mt-3">
              <span>
                Our membership management <br />
                software provides full automation of <br />
                membership renewals and payments
              </span>
            </div>
          </div>
          <div className="w-60 sm:w-80 md:w-72 lg:w-75 h-auto pt-3 rounded-sm bg-neutral-50 flex flex-col items-center transition duration-75 ease-in-out hover:scale-110">
            <img src="/Icon (2).svg" alt="" className="mb-2" />
            <h1 className="text-center text-2xl font-semibold mt-2 text-gray-800">
              Clubs And <br />
              Groups
            </h1>
            <div className="text-center text-gray-500 mt-3">
              <span>
                Our membership management <br />
                software provides full automation of <br />
                membership renewals and payments
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-30 xl:mt-8">
          <div className="flex w-full sm:w-80 md:w-96 lg:w-96 h-auto mt-8 xl:mt-0 rounded-lg transition duration-75 hover:scale-110">
            <img
              src="/Frame 35.svg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-center xl:text-left mt-8 xl:mt-0 xl:ml-10 text-2xl sm:text-3xl text-gray-800 font-semibold">
            <h1>
              The unseen of spending three <br />
              years at Pixelgrade <br />
            </h1>
            <div className="text-sm sm:text-base mt-4 text-gray-500">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed <br />
                accumsan quam vitae est varius fringilla. Pellentesque placerat
                vestibulum lorem sed <br />
                porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                risus pretium auctor. Etiam <br />
                quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
                elementum pulvinar odio.
              </span>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-5 mt-5">
              <div className="text-sm mt-7 pt-2 text-center text-amber-50 w-30 h-10 rounded-sm bg-green-600 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10">
                <button className="">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-evenly font-semibold">
          <div className="text-center xl:text-left mt-15 text-3xl text-gray-800">
            <h1>
              Helping a local <br />{" "}
              <span className="text-green-600">business reinvent itself</span>
            </h1>
            <div className="text-sm mt-3 text-gray-500">
              <span>We reached here with our hard work and dedication</span>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-5 mt-15">
            <div className="flex flex-row items-center">
              <img src="/members.svg" alt="" className="w-11 h-7" />
              <h2 className="ml-3 text-gray-700">
                2,245,341 <br />
                <span className="text-gray-500 text-sm">Members</span>
              </h2>
            </div>
            <div className="flex flex-row items-center">
              <img src="/Clubs.svg" alt="" className="w-11 h-10" />
              <h2 className="ml-3 text-gray-700">
                46,328 <br />
                <span className="text-gray-500 text-sm">Clubs</span>
              </h2>
            </div>
            <div className="flex flex-row items-center">
              <img src="/Event Bookings.svg" alt="" className="w-11 h-7" />
              <h2 className="ml-3 text-gray-700">
                828,867 <br />
                <span className="text-gray-500 text-sm">Event Bookings</span>
              </h2>
            </div>
            <div className="flex flex-row items-center">
              <img src="/payments.svg" alt="" className="w-11 h-7" />
              <h2 className="ml-3 text-gray-700">
                1,926,436 <br />
                <span className="text-gray-500 text-sm">Payments</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center mt-10 xl:pt-8 xl:pb-30">
          <div className="flex w-full sm:w-80 md:w-96 lg:w-96 h-auto mt-8 xl:mt-0 rounded-lg transition duration-75 hover:scale-110">
            <img
              src="/pana.svg"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-center xl:text-left mt-8 xl:mt-0 xl:ml-10 text-2xl sm:text-3xl text-gray-800 font-semibold">
            <h1>
              How to design your site footer like
              <br />
              we did <br />
            </h1>
            <div className="text-sm sm:text-base mt-4 text-gray-500">
              <span>
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt <br />
                molestie, massa nunc varius arcu, at scelerisque elit erat a
                magna. Donec quis erat at <br />
                libero ultrices mollis. In hac habitasse platea dictumst.
                Vivamus vehicula leo dui, at porta <br />
                nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                non aliquet urna tincidunt. Integer <br />
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi <br />
                ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum
                id gravida.
              </span>
            </div>
            <div className="flex flex-col xl:flex-row items-center gap-5 mt-5">
              <div className="text-sm mt-7 pt-2 text-center text-amber-50 w-30 h-10 rounded-sm bg-green-600 transition duration-300 ease-in-out hover:scale-90 sm:w-40 sm:h-10">
                <button className="">Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:pt-8 xl:pb-30">
          <div className="flex w-full sm:w-80 md:w-96 lg:w-96 h-auto mt-4 xl:mt-0 rounded-lg">
            <img
              src="/image 9.svg"
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text-center xl:text-left ml-4 mb-4 text-base sm:text-lg text-gray-500">
            <span className="font-semibold">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus <br />
              tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
              ornare, tristique quam in, gravida <br />
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie <br />
              mi blandit. Suspendisse cursus tellus sed augue ultrices, quis
              tristique nulla sodales. Suspendisse <br />
              eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
              Quisque malesuada enim sapien, <br />
              vitae placerat ante feugiat eget. Quisque vulputate odio neque,
              eget efficitur libero condimentum <br />
              id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </span>
            <div className="text-balance text-green-600 mt-3 font-semibold">
              <span>Tim Smith</span>
            </div>
            <div className="text-balance text-gray-400 mt-1">
              <span>British Dragon Boat Racing Association</span>
            </div>
            <div className="flex flex-wrap justify-center xl:justify-start gap-8 mt-7">
              <div className="transition duration-75 ease-in-out hover:scale-110">
                <img src="/Logo-Clients.svg" alt="" className="w-10 h-auto" />
              </div>
              <div className="transition duration-75 ease-in-out hover:scale-110">
                <img
                  src="/Logo-Clients (1).svg"
                  alt=""
                  className="w-10 h-auto"
                />
              </div>
              <div className="transition duration-75 ease-in-out hover:scale-110">
                <img
                  src="/Logo-Clients (2).svg"
                  alt=""
                  className="w-10 h-auto"
                />
              </div>
              <div className="transition duration-75 ease-in-out hover:scale-110">
                <img
                  src="/Logo-Clients (3).svg"
                  alt=""
                  className="w-10 h-auto"
                />
              </div>
              <div className="transition duration-75 ease-in-out hover:scale-110">
                <img
                  src="/Logo-Clients (4).svg"
                  alt=""
                  className="w-10 h-auto"
                />
              </div>
              <div className="transition duration-75 ease-in-out hover:scale-110">
                <img
                  src="/Logo-Clients (5).svg"
                  alt=""
                  className="w-10 h-auto"
                />
              </div>
              <div className="flex items-center rounded-sm pl-6 text-green-600 mb-0.5 font-semibold hover:text-green-500">
                <span>Meet all customers</span>
                <img src="/Right.svg" alt="" className="ml-3 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-700">
            Caring is the new marketing
          </h1>
          <div className="text-gray-500 mt-2">
            <span>
              The Nextcent blog is the best place to read about the latest
              membership insights, <br />
              trends and more. See who's joining the community, read about how
              our community <br />
              is increasing their membership income and lots more.
            </span>
          </div>
          <div className="flex flex-wrap justify-center mt-5 gap-30 sm:gap-30">
            {/** Card 1 */}
            <div className="relative sm:w-80 md:w-96">
              <img src="/image 18.svg" alt="" className="w-80 h-auto" />
              <div className="absolute top-1/2 transform -translate-y-1/2 left-5 lg:left-5 sm:left-5 md:left-5 w-70 mt-35 rounded-sm bg-neutral-100 pt-3 text-xl text-gray-600">
                Creating Streamlined <br />
                Safeguarding Processes with <br />
                OneRen
                <div className="flex items-center justify-center rounded-sm pl-2 pt-3 text-green-600 mb-0.5 font-semibold hover:text-green-500">
                  <span>Read more</span>
                  <img src="/Right.svg" alt="" className="mt-1 ml-2 w-6 h-6" />
                </div>
              </div>
            </div>
            {/** Card 2 */}
            <div className="relative sm:w-80 md:w-96">
              <img src="/image 18.svg" alt="" className="w-80 h-auto" />
              <div className="absolute top-1/2 transform -translate-y-1/2 left-5 lg:left-5 sm:left-5 md:left-5 w-70 mt-35 rounded-sm bg-neutral-100 pt-3 text-xl text-gray-600">
                What are your safeguarding <br />
                responsibilities and how can <br />
                you manage them?
                <div className="flex items-center justify-center rounded-sm pl-2 pt-3 text-green-600 mb-0.5 font-semibold hover:text-green-500">
                  <span>Read more</span>
                  <img src="/Right.svg" alt="" className="mt-1 ml-2 w-6 h-6" />
                </div>
              </div>
            </div>
            {/** Card 3 */}
            <div className="relative sm:w-80 md:w-96">
              <img src="/image 18.svg" alt="" className="w-80 h-auto" />
              <div className="absolute top-1/2 transform -translate-y-1/2 left-5 lg:left-5 sm:left-5 md:left-5 w-70 mt-35 rounded-sm bg-neutral-100 pt-3 text-xl text-gray-600">
                Revamping the Membership <br />
                Model with Triathlon <br />
                Australia
                <div className="flex items-center justify-center rounded-sm pl-2 pt-3 text-green-600 mb-0.5 font-semibold hover:text-green-500">
                  <span>Read more</span>
                  <img src="/Right.svg" alt="" className="mt-1 ml-2 w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-40 flex items-center justify-center text-center">
            <div className="flex content-center text-5xl font-semibold text-gray-800">
              Pellentesque suscipit <br />
              fringilla libero eu.
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex items-center justify-center bg-green-600 w-35 h-12 mt-10 mb-10 text-neutral-50 rounded-sm hover:bg-green-500">
              Get a Demo
              <img
                src="/seta-direita.png"
                alt=""
                className="ml-2 mt-1 w-4 h-4 mr-2"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
