import React from 'react'

export default class Calendar extends React.Component {
    getDate() {
        const dayNames = ['Sunday','Monday','Tuesday',
                        'Wednesday','Thursday','Friday',
                        'Saturday']
        const monthNames = ['January','February','March',
                            'April','May','June','July',
                            'August','September','October',
                            'November','December']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthNames[date.getMonth()]
        const year = date.getFullYear() + 543
        const time = date.getTime()
        const todayOverallTime = ((time + 25200000) % 86400000) / 1000
        const todaySecond = Math.floor(todayOverallTime % 60)
        const todayMinute = Math.floor((todayOverallTime / 60) % 60)
        const todayHour = Math.floor(((todayOverallTime / 60) / 24) % 24)
        return `Date ${weekDay} on ${day} ${month} ${year} 
        \n | 
        Current Time: 
        ${todayOverallTime}
        ${todayHour}:${todayMinute}:${todaySecond}
        UTC+7 `
    }

    render() {
        return <div>{this.getDate()}</div>
    }
}