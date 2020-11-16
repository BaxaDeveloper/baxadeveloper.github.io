import React, {Fragment} from 'react'
import moment from 'moment';
import {weather} from '../../../Services/';

import './CurrentDay.scss'

function CurrentDay({item}) {
    return (
        <div className={'current-day'}>
            {Array.isArray(item.weather) && (
                <Fragment>
                    <h2 className="title">
                        {item.name}
                    </h2>
                    <div className="date">
                        {moment.unix(item.dt).format('dddd DD MMMM')}
                    </div>
                    <div className="current-day__block">
                        <div className="block-main">
                            <div className={`weather-icon weather-icon-${weather.name(item.weather[0].id)}`}/>
                            <div className="text">
                                <span
                                    className='temp'>{item.main.temp > 0 ? '+' : ''}{item.main.temp.toFixed(0)}°</span>
                                <span className={'desc'}>{item.weather[0].description}</span>
                            </div>
                        </div>

                        <div className="right-block">
                            <div className="item">
                                <div className="label">{item.main.temp_max}°</div>
                                <div className="desc">Hight</div>
                            </div>
                            <div className="item">
                                <div className="label">{item.wind.speed}Mph</div>
                                <div className="desc">Wind</div>
                            </div>
                            <div className="item">
                                <div className="label">{moment.unix(item.sys.sunrise).format('hh:mm')}</div>
                                <div className="desc">Sunrise</div>
                            </div>
                            <div className="item">
                                <div className="label">{item.clouds.all}%</div>
                                <div className="desc">Rain</div>
                            </div>
                            <div className="item">
                                <div className="label">{item.main.temp_min}°</div>
                                <div className="desc">Low</div>
                            </div>

                            <div className="item">
                                <div className="label">{moment.unix(item.sys.sunset).format('hh:mm')}</div>
                                <div className="desc">Sunset</div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )}
        </div>
    )
}

export default CurrentDay;