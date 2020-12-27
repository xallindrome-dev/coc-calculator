let multiplier = 8;
let time = 9; // default in minutes
let waitHours = 7;

const getReducedHours = (time) => ((time * multiplier) - time) / 60;

const calculateHours = (hours) => {
    //let numOfBoosts = Math.floor(v.hoursElapsed / boostWaitHours);
    let numOfBoosts = Math.floor(hours / waitHours);
    //console.log('numOfBoosts', numOfBoosts);

    let totalBoostHours = ((time / 60) * numOfBoosts) / 60;
    //console.log('totalBoostHours', totalBoostHours);

    return totalBoostHours;
}

const boost = {
    calculateHours,
    getReducedHours,
    var: {
        multiplier,
        waitHours,
        time
    }
}

export default boost;