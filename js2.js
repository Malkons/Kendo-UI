function hex(c) {
  var s = "0123456789abcdef";
  var i = parseInt(c);
  if (i == 0 || isNaN(c))
    return "00";
  i = Math.round(Math.min(Math.max(0, i), 255));
  return s.charAt((i - i % 16) / 16) + s.charAt(i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex(rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* Remove '#' in color hex string */
function trim(s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }

/* Convert a hex string to an RGB triplet */
function convertToRGB(hex) {
  var color = [];
  color[0] = parseInt((trim(hex)).substring(0, 2), 16);
  color[1] = parseInt((trim(hex)).substring(2, 4), 16);
  color[2] = parseInt((trim(hex)).substring(4, 6), 16);
  return color;
}

//generates a list of gradiant color
function generateColor(colorStart, colorEnd, colorCount) {

  // The beginning of your gradient
  var start = convertToRGB(colorStart);

  // The end of your gradient
  var end = convertToRGB(colorEnd);

  // The number of colors to compute
  var len = colorCount;

  //Alpha blending amount
  var alpha = 0.0;

  var saida = [];

  for (i = 0; i < len; i++) {
    var c = [];
    alpha += (1.0 / len);

    c[0] = start[0] * alpha + (1 - alpha) * end[0];
    c[1] = start[1] * alpha + (1 - alpha) * end[1];
    c[2] = start[2] * alpha + (1 - alpha) * end[2];

    saida.push(convertToHex(c));

  }

  return saida;

}

//function to figure out how many unique values there are in a given category in the carData.js
function populateArray(key) {
  $("#legend").empty();
  legendArray = [];
  legendColorArr = [];
  for (var i = 0; i < carData.length; i++) {
    if (legendArray.indexOf(carData[i][key]) === -1) {
      legendArray.push(carData[i][key])
    }
  };
  legendArray.sort(); 
  
  //shows the number of unique numbers in the array, the lowest value and the highest value
  console.log("Num of elements in array: " + legendArray.length + ", " + " Elements in array: " + legendArray);
  $("#low").html("Low: " + Math.min.apply(Math, legendArray));
  console.log("Low: " + Math.min.apply(Math, legendArray));
  $("#high").html("High: " + Math.max.apply(Math, legendArray));
  console.log("High: " + Math.max.apply(Math, legendArray));
 
  //created the gradiant legend and puts in on the webpage
  var img = $("<img>");
  img.attr("src", "images/gradiant1.png");
  img.addClass("gradiant");
  img.appendTo("#legend");

  //fires the createColorArray and passes the the number of unique elements
  createColorArray(legendArray.length);
};

//creates a number of hexadecimal colors, based on the number of elements in the legendArray and pushes them into the legendColorArr
function createColorArray(length) {
  var tmp = generateColor('#654321', '#fff700', length);

  //adds the '#' to the hexcode
  for (cor in tmp) {
    legendColorArr.push("#" + tmp[cor]);
  }

  //once all colors are in the array, draws the chart with the appropriate colors
  console.log(legendColorArr);
  drawChart();
};
