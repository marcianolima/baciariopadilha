var data = [

    { "loc": [-25.55073024, -49.24468156], "title": "Assentamento Em Regularização" },
    { "loc": [-25.51942285, -49.28447502], "title": "Assentamento Em Regularização" },
    { "loc": [-25.53934634, -49.24774545], "title": "Loteamento Clandestino Sem Regularização" },
    { "loc": [-25.55306933, -49.27176216], "title": "Assentamento Sem Regularização" },
    { "loc": [-25.5472582, -49.24497507], "title": "Assentamento Sem Regularização" },
    { "loc": [-25.51980822, -49.28772933], "title": "Assentamento Sem Regularização" },
    { "loc": [-25.51900482, -49.28393635], "title": "Assentamento Em Regularização" },
    { "loc": [-25.50457203, -49.26821814], "title": "Assentamento Sem Regularização" },
    { "loc": [-25.51510124, -49.27153242], "title": "Assentamento Sem Regularização" },
    { "loc": [-25.51510124, -49.27153242], "title": "Assentamento Sem Regularização" },
    { "loc": [-25.53912311, -49.24795329], "title": "Assentamento Sem Regularização" },

];

var markersLayer = new L.LayerGroup(); //layer contain searched elements

map.addLayer(markersLayer);
for (i in data) {
    var title = data[i].title, //value searched
        loc = data[i].loc, //position found
        marker = new L.Marker(new L.latLng(loc), { title: title, icon: redIcon }); //se property searched
    marker.bindPopup('<table><tr><td colspan="2"><strong>Tipo de conflito: </td></strong><td>' + title + '</td></tr></table>');
    markersLayer.addLayer(marker);
}

layer_reasdeConflito_6.on("click", function(event) {
    // Assuming the clicked feature is a shape, not a point marker.
    map.fitBounds(event.layer.getBounds());
});

layer_reasdeConflito_6.on("add", function(event) {
    map.addLayer(markersLayer);
});
layer_reasdeConflito_6.on("remove", function(event) {
    map.removeLayer(markersLayer);
});