import day_clouds from 'src/static/img/day_clouds.png';
import day_rain from 'src/static/img/day_rain.png';
import day_snow from 'src/static/img/day_snow.png';
import day_storm from 'src/static/img/day_storm.png';
import day_sun from 'src/static/img/day_sun.png';
import day_wind from 'src/static/img/day_wind.png';
import night_clouds from 'src/static/img/night_clouds.png';
import night_moon from 'src/static/img/night_moon.png';
import night_rain from 'src/static/img/night_rain.png';
import night_snow from 'src/static/img/night_snow.png';
import night_storm from 'src/static/img/night_storm.png';
import night_wind from 'src/static/img/night_wind.png';

const CURRENT_WEATHER = {
    day_clouds,
    day_rain,
    day_snow,
    day_storm,
    day_sun,
    day_wind,
    night_clouds,
    night_moon,
    night_rain,
    night_snow,
    night_storm,
    night_wind
};

export type CURRENT_WEATHER_TYPE = keyof typeof CURRENT_WEATHER;

function CurrentWeather({ type }: { type: CURRENT_WEATHER_TYPE }) {
    const current = CURRENT_WEATHER[type || 'day_clouds'];
    return <img src={current} alt="current-weather" />;
}

export default CurrentWeather;
