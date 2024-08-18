var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_GrasslandGeospatialDataBase_1 = new ol.format.GeoJSON();
var features_GrasslandGeospatialDataBase_1 = format_GrasslandGeospatialDataBase_1.readFeatures(json_GrasslandGeospatialDataBase_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GrasslandGeospatialDataBase_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrasslandGeospatialDataBase_1.addFeatures(features_GrasslandGeospatialDataBase_1);
var lyr_GrasslandGeospatialDataBase_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrasslandGeospatialDataBase_1, 
                style: style_GrasslandGeospatialDataBase_1,
                popuplayertitle: "Grassland Geospatial DataBase",
                interactive: true,
                title: '<img src="styles/legend/GrasslandGeospatialDataBase_1.png" /> Grassland Geospatial DataBase'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GrasslandGeospatialDataBase_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GrasslandGeospatialDataBase_1];
lyr_GrasslandGeospatialDataBase_1.set('fieldAliases', {'POLY_ID': 'POLY_ID', 'ECODISTRIC (code)': 'ECODISTRIC (code)', 'ECOREGION (code)': 'ECOREGION (code)', 'ECOPROVINC (code)': 'ECOPROVINC (code)', 'ECOZONE (code)': 'ECOZONE (code)', 'ECOREGION NAME (EN)': 'ECOREGION NAME (EN)', 'ECOREGION NAME (FR)': 'ECOREGION NAME (FR)', 'Tamed Grass (ha)': 'Tamed Grass (ha)', 'Native Grass (ha)': 'Native Grass (ha)', 'Mixed Grass (ha)': 'Mixed Grass (ha)', 'Native Grass (%)': 'Native Grass (%)', 'Tamed Grass (%)': 'Tamed Grass (%)', 'Mixed Grass (%)': 'Mixed Grass (%)', });
lyr_GrasslandGeospatialDataBase_1.set('fieldImages', {'POLY_ID': 'Range', 'ECODISTRIC (code)': 'Range', 'ECOREGION (code)': 'Range', 'ECOPROVINC (code)': 'TextEdit', 'ECOZONE (code)': 'Range', 'ECOREGION NAME (EN)': 'TextEdit', 'ECOREGION NAME (FR)': 'TextEdit', 'Tamed Grass (ha)': 'TextEdit', 'Native Grass (ha)': 'TextEdit', 'Mixed Grass (ha)': 'TextEdit', 'Native Grass (%)': 'TextEdit', 'Tamed Grass (%)': 'TextEdit', 'Mixed Grass (%)': 'TextEdit', });
lyr_GrasslandGeospatialDataBase_1.set('fieldLabels', {'POLY_ID': 'header label - visible with data', 'ECODISTRIC (code)': 'header label - visible with data', 'ECOREGION (code)': 'header label - visible with data', 'ECOPROVINC (code)': 'header label - visible with data', 'ECOZONE (code)': 'header label - visible with data', 'ECOREGION NAME (EN)': 'header label - visible with data', 'ECOREGION NAME (FR)': 'header label - visible with data', 'Tamed Grass (ha)': 'header label - visible with data', 'Native Grass (ha)': 'header label - visible with data', 'Mixed Grass (ha)': 'header label - visible with data', 'Native Grass (%)': 'header label - visible with data', 'Tamed Grass (%)': 'header label - visible with data', 'Mixed Grass (%)': 'header label - visible with data', });
lyr_GrasslandGeospatialDataBase_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});