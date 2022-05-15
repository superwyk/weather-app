/**
 * 模拟接口返回数据
 */

import { createMock } from 'src/utils/mock';
const apiDatas = {
    '/weather/live': {
        errcode: 0,
        errmsg: '成功',
        data: {
            location: '杭州市，浙江省',
            temperature: 15,
            weather_type: 'day_wind',
            wind_type: '强风',
            cloud_type: '多云',
            time: '周日，11 am',
            rainfall: '6%',
            humidity: '90%',
            wind_speed: '19km/h'
        }
    },
    '/weather/future/day': {
        errcode: 0,
        errmsg: '成功',
        data: [
            {
                label: '10 am',
                value: 10
            },
            {
                label: '11 am',
                value: 22
            },
            {
                label: '12 am',
                value: 16
            },
            {
                label: '1 pm',
                value: 26
            },
            {
                label: '2 pm',
                value: 12
            },
            {
                label: '3 pm',
                value: 26
            },
            {
                label: '4 pm',
                value: 18
            },
            {
                label: '5 pm',
                value: 26
            },
            {
                label: '6 pm',
                value: 12
            },
            {
                label: '7 pm',
                value: 18
            },
            {
                label: '8 pm',
                value: 26
            },
            {
                label: '9 pm',
                value: 12
            }
        ]
    },
    '/weather/future/week': {
        errcode: 0,
        errmsg: '成功',
        data: [
            {
                weekday: '周一',
                weather_type: 'light_rain',
                max_temperature: 13,
                min_temperature: 10
            },
            {
                weekday: '周二',
                weather_type: 'thunderstorm',
                max_temperature: 16,
                min_temperature: 9
            },
            {
                weekday: '周三',
                weather_type: 'clear_to_light_rain',
                max_temperature: 23,
                min_temperature: 15
            },
            {
                weekday: '周四',
                weather_type: 'light_rain',
                max_temperature: 26,
                min_temperature: 17
            },
            {
                weekday: '周五',
                weather_type: 'thunderstorm',
                max_temperature: 30,
                min_temperature: 18
            },
            {
                weekday: '周六',
                weather_type: 'clear_to_light_rain',
                max_temperature: 25,
                min_temperature: 16
            }
        ]
    }
};

const http = createMock(apiDatas);

export default http;
