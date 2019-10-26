// from data.js
var tableData = data;


// assigning Variables

var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var tableBody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (dataInput) => {
  dataInput.forEach(sightings => {
    var row = tableBody.append("tr");
    columns.forEach(column => row.append("td").text(sightings[column])
    )
  });
}

//Creating the table

populate(data);


var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
// Complete the click handler for the form
button.on("click", function () {
  var inputDate = d3.select("#datetime");
  var filterData = inputDate.property("value");
  
  console.log(filterData);

sightings = tableData.filter(r => r.datetime === filterData);

  tableBody.html("");
  sightings.forEach(function (aliens) {
    console.log(aliens)
    var row = tableBody.append("tr");
    Object.entries(aliens).forEach(function ([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    })
  })
});