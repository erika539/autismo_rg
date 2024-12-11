var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Casosdeautismo_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Casos de autismo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Casosdeautismo_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5866370.782492, -3848781.745057, -5795418.439990, -3733048.510507]
                            })
                        });
var format_Localidades_2 = new ol.format.GeoJSON();
var features_Localidades_2 = format_Localidades_2.readFeatures(json_Localidades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_2.addFeatures(features_Localidades_2);
var lyr_Localidades_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_2, 
                style: style_Localidades_2,
                popuplayertitle: "Localidades",
                interactive: true,
                title: '<img src="styles/legend/Localidades_2.png" /> Localidades'
            });
var format_Clincas_3 = new ol.format.GeoJSON();
var features_Clincas_3 = format_Clincas_3.readFeatures(json_Clincas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clincas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clincas_3.addFeatures(features_Clincas_3);
var lyr_Clincas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clincas_3, 
                style: style_Clincas_3,
                popuplayertitle: "Clinícas",
                interactive: true,
                title: '<img src="styles/legend/Clincas_3.png" /> Clinícas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Casosdeautismo_1.setVisible(true);lyr_Localidades_2.setVisible(true);lyr_Clincas_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Casosdeautismo_1,lyr_Localidades_2,lyr_Clincas_3];
lyr_Localidades_2.set('fieldAliases', {'id': 'id', 'objectid': 'objectid', 'tipo': 'tipo', 'nome_zona': 'nome_zona', 'zona': 'zona', 'localidade': 'localidade', 'incidencia': 'incidencia', 'cura': 'cura', 'abandono': 'abandono', 'obito_tb': 'obito_tb', 'p_cura': 'p_cura', 'p_abandono': 'p_abandono', 'p_obito': 'p_obito', 'area_km': 'area_km', 'alagamento': 'alagamento', });
lyr_Clincas_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'localidades': 'localidades', 'Nome': 'Nome', 'Endereço': 'Endereço', });
lyr_Localidades_2.set('fieldImages', {'id': 'TextEdit', 'objectid': 'TextEdit', 'tipo': 'TextEdit', 'nome_zona': 'TextEdit', 'zona': 'TextEdit', 'localidade': 'TextEdit', 'incidencia': 'Range', 'cura': 'Range', 'abandono': 'Range', 'obito_tb': 'Range', 'p_cura': 'TextEdit', 'p_abandono': 'TextEdit', 'p_obito': 'TextEdit', 'area_km': 'TextEdit', 'alagamento': 'CheckBox', });
lyr_Clincas_3.set('fieldImages', {'X': '', 'Y': '', 'localidades': '', 'Nome': '', 'Endereço': '', });
lyr_Localidades_2.set('fieldLabels', {'id': 'no label', 'objectid': 'no label', 'tipo': 'no label', 'nome_zona': 'no label', 'zona': 'no label', 'localidade': 'header label - visible with data', 'incidencia': 'no label', 'cura': 'no label', 'abandono': 'no label', 'obito_tb': 'no label', 'p_cura': 'no label', 'p_abandono': 'no label', 'p_obito': 'no label', 'area_km': 'no label', 'alagamento': 'no label', });
lyr_Clincas_3.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'localidades': 'header label - always visible', 'Nome': 'no label', 'Endereço': 'no label', });
lyr_Clincas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});