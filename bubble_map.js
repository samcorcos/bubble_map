if (Meteor.isClient) {
  Template.map.rendered = function() {
    var width = 960,
    height = 600;

    var path = d3.geo.path()
    .projection(null);

    var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

    d3.json("counties.json", function(error, us) {
      if (error) return console.error(error);

      svg.append("path")
      .datum(topojson.mesh(us))
      .attr("d", path);
    });
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
