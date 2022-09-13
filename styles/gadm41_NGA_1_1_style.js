var size = 0;
var placement = 'point';

var style_gadm41_NGA_1_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#8a5353";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("admin1Name_en") !== null) {
        labelText = String(feature.get("admin1Name_en"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(138,83,83,1.0)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
