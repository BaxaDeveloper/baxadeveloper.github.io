import React from 'react'
import moment from 'moment'

import { weather } from '../../../Services';
import './OtherDay.scss';

function OtherDay({ items }) {
    return (
        <div className="other_days_block">
            {items && items.map(items => (
                <div className='other-day-item' key={items.dt}>
                    <span className='weather-day'>{moment.unix(items.dt).format('dddd')}</span>
                    <div className="wrap">
                        <div className={`weather-icon-small weather-icon-${weather.name(items.weather[0].id)}`}></div>
                        <div className="text">
                            <span className='temp'>{items.main.temp > 0 ? '+' : ''}{items.main.temp.toFixed(0)}°</span>
                            <span className={'desc'}>{items.weather[0].main}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OtherDay;