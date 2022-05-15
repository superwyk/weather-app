/**
 * 首页
 * @returns
 */
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Iconfont from 'src/components/Iconfont';
import http from 'src/modules/services';
import useRequest from 'src/hooks/useRequest';
import CurrentWeather from '../components/CurrentWeather';
import Logo from './components/Logo';
import './index.css';

function Home() {
    const { response } = useRequest(() => http.get('/weather/live'));
    const { data = {} } = (response || {}) as { data: any };

    return (
        <div className="home">
            <div className="main">
                <header className="header">
                    <Logo />
                </header>
                <div className="weather-box">
                    <div className="current-weather">
                        <CurrentWeather type={data.weather_type} />
                    </div>
                    <div className="current-location">{data.location}</div>
                    <div className="current-live">
                        <div>
                            <p className="current-live__temperature">
                                <span className="large">{data.temperature}</span>
                                <span className="small">°C</span>
                            </p>
                            <p className="current-live__date">{data.time}</p>
                        </div>
                        <div>
                            <p className="current-live__wind">
                                <span>{data.wind_type}</span>
                            </p>
                            <p className="current-live__clouds">
                                <span>{data.cloud_type}</span>
                            </p>
                        </div>
                    </div>
                    <div className="weather-detail">
                        <Link to="/detail">详情</Link>
                    </div>
                    <div className="current-base">
                        <div className="current-base-list">
                            <div className="list-item">
                                <div>
                                    <Iconfont type="huabanfuben" />
                                    降雨量
                                </div>
                                <div>{data.rainfall}</div>
                            </div>
                            <div className="list-item">
                                <div>
                                    <Iconfont type="icon-temperature" />
                                    湿度
                                </div>
                                <div>{data.humidity}</div>
                            </div>
                            <div className="list-item">
                                <div>
                                    <Iconfont type="feng" />
                                    风速
                                </div>
                                <div>{data.wind_speed}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="menu">
                        <Link className="menu-item" to="/">
                            <Iconfont type="home-fill" />
                            <span>Home</span>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;
