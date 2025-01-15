var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Zonificacin_1 = new ol.format.GeoJSON();
var features_Zonificacin_1 = format_Zonificacin_1.readFeatures(json_Zonificacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonificacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonificacin_1.addFeatures(features_Zonificacin_1);
var lyr_Zonificacin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonificacin_1, 
                style: style_Zonificacin_1,
                popuplayertitle: 'Zonificación',
                interactive: false,
    title: 'Zonificación<br />\
    <img src="styles/legend/Zonificacin_1_0.png" /> Zona I<br />\
    <img src="styles/legend/Zonificacin_1_1.png" /> Zona II<br />\
    <img src="styles/legend/Zonificacin_1_2.png" /> Zona III<br />\
    <img src="styles/legend/Zonificacin_1_3.png" /> <br />'
        });
var format_Inmuebles_2 = new ol.format.GeoJSON();
var features_Inmuebles_2 = format_Inmuebles_2.readFeatures(json_Inmuebles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inmuebles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inmuebles_2.addFeatures(features_Inmuebles_2);
var lyr_Inmuebles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inmuebles_2, 
                style: style_Inmuebles_2,
                popuplayertitle: 'Inmuebles',
                interactive: true,
    title: 'Inmuebles<br />\
    <img src="styles/legend/Inmuebles_2_0.png" /> ÁLVARO OBREGÓN<br />\
    <img src="styles/legend/Inmuebles_2_1.png" /> AZCAPOTZALCO<br />\
    <img src="styles/legend/Inmuebles_2_2.png" /> BENITO JUÁREZ<br />\
    <img src="styles/legend/Inmuebles_2_3.png" /> COYOACÁN<br />\
    <img src="styles/legend/Inmuebles_2_4.png" /> CUAJIMALPA<br />\
    <img src="styles/legend/Inmuebles_2_5.png" /> CUAUHTÉMOC<br />\
    <img src="styles/legend/Inmuebles_2_6.png" /> GUSTAVO A. MADERO<br />\
    <img src="styles/legend/Inmuebles_2_7.png" /> IZTACALCO<br />\
    <img src="styles/legend/Inmuebles_2_8.png" /> IZTAPALAPA<br />\
    <img src="styles/legend/Inmuebles_2_9.png" /> MAGDALENA CONTRERAS<br />\
    <img src="styles/legend/Inmuebles_2_10.png" /> MIGUEL HIDALGO<br />\
    <img src="styles/legend/Inmuebles_2_11.png" /> MILPA ALTA<br />\
    <img src="styles/legend/Inmuebles_2_12.png" /> NAUCALPAN<br />\
    <img src="styles/legend/Inmuebles_2_13.png" /> TLÁHUAC<br />\
    <img src="styles/legend/Inmuebles_2_14.png" /> TLALPAN<br />\
    <img src="styles/legend/Inmuebles_2_15.png" /> VENUSTIANO CARRANZA<br />\
    <img src="styles/legend/Inmuebles_2_16.png" /> XOCHIMILCO<br />\
    <img src="styles/legend/Inmuebles_2_17.png" /> <br />'
        });

lyr_Positron_0.setVisible(true);lyr_Zonificacin_1.setVisible(true);lyr_Inmuebles_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Zonificacin_1,lyr_Inmuebles_2];
lyr_Zonificacin_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FENOMENO': 'FENOMENO', 'TAXONOMIA': 'TAXONOMIA', 'R_P_V_E': 'R_P_V_E', 'INTENSIDAD': 'INTENSIDAD', 'DETALLES': 'DETALLES', 'NOMBRE': 'NOMBRE', 'FUENTE': 'FUENTE', 'MAGNI_UNI': 'MAGNI_UNI', 'MAGNI_NUM': 'MAGNI_NUM', 'CALLE_Y_NU': 'CALLE_Y_NU', 'COLONIA': 'COLONIA', 'CVE_MUN': 'CVE_MUN', 'ALCALDIA': 'ALCALDIA', 'ENTIDAD': 'ENTIDAD', 'AREA_M2': 'AREA_M2', 'PERIME_M': 'PERIME_M', 'ALTITUD': 'ALTITUD', });
lyr_Inmuebles_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'ANEXOS': 'ANEXOS', 'DOMICILIO': 'DOMICILIO', 'AFORO': 'AFORO', 'METRAJE': 'METRAJE', 'ZONA GEOT�': 'ZONA GEOT�', 'ZONA': 'ZONA', 'ALCALDÍA': 'ALCALDÍA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Zonificacin_1.set('fieldImages', {'OBJECTID': 'Range', 'FENOMENO': 'TextEdit', 'TAXONOMIA': 'TextEdit', 'R_P_V_E': 'TextEdit', 'INTENSIDAD': 'TextEdit', 'DETALLES': 'TextEdit', 'NOMBRE': 'TextEdit', 'FUENTE': 'TextEdit', 'MAGNI_UNI': 'TextEdit', 'MAGNI_NUM': 'TextEdit', 'CALLE_Y_NU': 'TextEdit', 'COLONIA': 'TextEdit', 'CVE_MUN': 'TextEdit', 'ALCALDIA': 'TextEdit', 'ENTIDAD': 'TextEdit', 'AREA_M2': 'TextEdit', 'PERIME_M': 'TextEdit', 'ALTITUD': 'TextEdit', });
lyr_Inmuebles_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'ANEXOS': 'TextEdit', 'DOMICILIO': 'TextEdit', 'AFORO': 'Range', 'METRAJE': 'TextEdit', 'ZONA GEOT�': 'TextEdit', 'ZONA': 'TextEdit', 'ALCALDÍA': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_Zonificacin_1.set('fieldLabels', {'OBJECTID': 'no label', 'FENOMENO': 'no label', 'TAXONOMIA': 'no label', 'R_P_V_E': 'no label', 'INTENSIDAD': 'no label', 'DETALLES': 'no label', 'NOMBRE': 'no label', 'FUENTE': 'no label', 'MAGNI_UNI': 'no label', 'MAGNI_NUM': 'no label', 'CALLE_Y_NU': 'no label', 'COLONIA': 'no label', 'CVE_MUN': 'no label', 'ALCALDIA': 'no label', 'ENTIDAD': 'no label', 'AREA_M2': 'no label', 'PERIME_M': 'no label', 'ALTITUD': 'no label', });
lyr_Inmuebles_2.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'ANEXOS': 'inline label - visible with data', 'DOMICILIO': 'inline label - visible with data', 'AFORO': 'inline label - visible with data', 'METRAJE': 'inline label - visible with data', 'ZONA GEOT�': 'inline label - visible with data', 'ZONA': 'inline label - visible with data', 'ALCALDÍA': 'inline label - visible with data', 'LATITUD': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', });
lyr_Inmuebles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});