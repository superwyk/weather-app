/**
 * 天气详情
 * @returns
 */

import { Link } from 'react-router-dom';
import Iconfont from 'src/components/Iconfont';
import LineChart from 'src/components/LineChart';
import Swiper from 'src/components/Swiper';
import http from 'src/modules/services';
import useRequest from 'src/hooks/useRequest';
import clear_to_light_rain from 'src/static/img/clear_to_light_rain.png';
import light_rain from 'src/static/img/light_rain.png';
import thunderstorm from 'src/static/img/thunderstorm.png';
import CurrentWeather from '../components/CurrentWeather';
import './index.css';

const WEATHER_TYPE = {
    clear_to_light_rain,
    light_rain,
    thunderstorm
};

function Detail() {
    const { response } = useRequest(() => http.get('/weather/live'));
    const { response: futureDayRes } = useRequest(() => http.get('/weather/future/day'));
    const { response: futureWeekRes } = useRequest(() => http.get('/weather/future/week'));
    const { data = {} } = (response || {}) as { data: any };
    const { data: futureDayData = [] } = (futureDayRes || {}) as { data: any[] };
    const { data: futureWeekData = [] } = (futureWeekRes || {}) as { data: any[] };

    return (
        <div className="detail">
            <div className="main">
                <header className="header">
                    <div>
                        <Link className="back" to="/">
                            <Iconfont type="a-zuojiantouzhixiangzuojiantou" />
                        </Link>
                    </div>
                    <div className="current-weather">
                        <CurrentWeather type={data.weather_type} />
                    </div>
                </header>
                <div className="weather-box">
                    <div className="current-location">
                        {(data.location || ('' as string)).split('，').map((item: string, index: number) => (
                            <div className="current-location-item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="current-temperature">
                        <span className="large">{data.temperature}</span>
                        <span className="small">°C</span>
                    </div>
                    <div className="current-base">
                        <div className="current-base-label precipitation">
                            <Iconfont type="huabanfuben" />
                            {data.rainfall}
                        </div>
                        <div className="current-base-label humidity">
                            <Iconfont type="icon-temperature" />
                            {data.humidity}
                        </div>
                        <div className="current-base-label wind">
                            <Iconfont type="feng" />
                            {data.wind_speed}
                        </div>
                    </div>
                </div>
                <LineChart className="line" data={futureDayData} />
                <div className="future-day-weather">
                    <Swiper data={futureDayData}>
                        {(item) => (
                            <div className="temperature-item">
                                <div className="temperature">
                                    <span className="large">{item.value}</span>
                                    <span className="small">°C</span>
                                </div>
                                <div className="time">{item.label}</div>
                            </div>
                        )}
                    </Swiper>
                </div>
                <div className="future-week-weather">
                    {futureWeekData.map((item, index) => (
                        <div className="list-item" key={index}>
                            <div className="date">{item.weekday}</div>
                            <div className="icon">
                                <img
                                    src={WEATHER_TYPE[(item.weather_type as keyof typeof WEATHER_TYPE) || 'light_rain']}
                                    alt="current-weather"
                                />
                            </div>
                            <div className="temperature">
                                <span className="max-temperature">
                                    <span className="large">{item.max_temperature}</span>
                                    <span className="small">°C</span>
                                </span>
                                <span className="min-temperature">
                                    <span className="large">{item.min_temperature}</span>
                                    <span className="small">°C</span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Detail;
