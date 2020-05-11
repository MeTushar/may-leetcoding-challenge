/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] == newColor) return image;
    function fillColor(image, sr, sc, newColor, currentColor) {
        if(sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length || image[sr][sc] != currentColor) {
            return;
        }
        image[sr][sc] = newColor;
        fillColor(image, sr-1, sc, newColor, currentColor);
        fillColor(image, sr+1, sc, newColor, currentColor);
        fillColor(image, sr, sc-1, newColor, currentColor);
        fillColor(image, sr, sc+1, newColor, currentColor);
        
    }
    fillColor(image, sr, sc, newColor, image[sr][sc]);
    return image;
};