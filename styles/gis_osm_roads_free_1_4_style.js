var size = 0;
var placement = 'point';
function categories_gis_osm_roads_free_1_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '[\'primary\', \'primary_link\', \'motorway\', \'trunk\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(245,162,122,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'miter', width: 11}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,211,127,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'miter', width: 6}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'secondary_link\', \'secondary\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(217,206,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'miter', width: 9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,190,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'miter', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '[\'tertiary\', \'tertiary_link\']':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(204,204,204,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'miter', width: 7}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'miter', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_gis_osm_roads_free_1_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("fclass");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_gis_osm_roads_free_1_4(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
