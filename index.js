function superbowlWin(record) {
    const foundSeason = record.find(function(objArr) {
        return objArr.result === "W"
    })
    if (foundSeason) {
        return foundSeason.year
    }
}