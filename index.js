function getTimeDifference(currentTime, oldTime) {
    const mTimeDifference  = Math.abs(currentTime - oldTime); // Time in Milliseconds
    const sTimeDifference    = mTimeDifference / 1000 // Time in Seconds
    const yearDifference   = Math.floor(sTimeDifference / 31536000); // 31536000 - Average Seconds in one Year
    const monthDifference  = Math.floor((sTimeDifference % 31536000) / 2592000); // 2592000 - Average Seconds in one Month (30 Days)
    const dayDifference    = Math.floor((sTimeDifference % 2592000) / 86400); // 86400 - Seconds in one Day
    const hourDifference   = Math.floor((sTimeDifference % 86400) / 3600); // 3600 - Seconds in one Hour
    const minuteDifference = Math.floor((sTimeDifference % 3600) / 60); // 60 - Seconds in one Minute
    const secondDifference = Math.floor(sTimeDifference % 60);
    return {
        year   : yearDifference,
        month  : monthDifference,
        day    : dayDifference,
        hour   : hourDifference,
        minute : minuteDifference,
        second : secondDifference
    };
}
