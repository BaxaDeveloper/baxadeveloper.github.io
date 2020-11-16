import React from 'react'
import CurrentDay from "./CurrentDay/CurrentDay";
import OtherDay from "./OtherDay/OtherDay";
import Spinner from "../UI/Spinner"
import './Content.scss'

function Content({currentDayInfo}) {

    const {all, otherDaysList} = currentDayInfo

    return (
        <div className={'content'}>
            {!all.isLoading && !otherDaysList.isLoading ? (
                <>
                    <CurrentDay item={all.data}/>
                    <OtherDay items={otherDaysList.data}/>
                </>
            ) : (
                <div><Spinner /></div>
            )}
        </div>
    )
}

export default Content