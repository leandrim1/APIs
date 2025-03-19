import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { useTranslation } from "react-i18next";

interface WeatherData {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface WeatherProps {
  weather: WeatherData;
}

function ApiTempo({ weather }: WeatherProps) {
  const [t] = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center p-5 text-white rounded-lg ">
      <form className="flex flex-col md:flex-row items-center justify-center gap-10 bg-green-700 p-5 w-90 rounded-lg shadow-md md:w-150">
        <div className="text-lg font-semibold">
          {new Date(weather.date).toLocaleString()}
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold">
              {Math.round(weather.temperatureC)}
              <TbTemperatureCelsius className="inline-block text-2xl ml-2" />
            </h2>
          </div>
          <div className="flex items-center mt-2">
            <h2 className="text-4xl font-bold">
              {Math.round(weather.temperatureF)}
              <TbTemperatureFahrenheit className="inline-block text-2xl ml-2" />
            </h2>
          </div>
        </div>
        <div className="text-center text-lg mt-2">{t(weather.summary)}</div>
      </form>
    </div>
  );
}

export default ApiTempo;
