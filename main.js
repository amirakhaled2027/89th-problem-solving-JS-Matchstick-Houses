

function matchHouses(houseNum) {
    let matchesSum = (houseNum * 6) - (houseNum - 1);
    return matchesSum;
}
console.log(matchHouses(1));
console.log(matchHouses(4));
console.log(matchHouses(87));