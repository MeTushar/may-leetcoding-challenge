/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length < 3) {
        return true;
    }
    let slope = (coordinates[1][1] - coordinates[0][1])/(coordinates[1][0] - coordinates[0][0]);
    
    for(let i=1; i < coordinates.length - 1; i++) {
        let m = (coordinates[i+1][1] - coordinates[i][1])/(coordinates[i+1][0]-coordinates[i][0]);
        if(m != slope) {
            return false;
        }
    }
    return true;
};