// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

function makedata(data) {
  data.forEach(function(siteReport) {
    // console.log(siteReport);
    var row = tbody.append("tr");
  
    Object.entries(siteReport).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

var button = d3.select("#filter-btn");



// Select the form
var form = d3.select("#form");
  
  // Create event handlers 
button.on("click", runEnter);
// form.on("submit",runEnter);
console.log("hello 46");
d3.selectAll("#filter-btn").on("click", runEnter);
// Complete the event handler function for the form



function runEnter() {
  tbody.selectAll("tr").remove();
  let filteredData = tableData;
  console.log("hello world");

  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime")

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  if(inputValue) {
    filteredData = filteredData.filter(area => area.datetime === inputValue);
  }
  console.log(filteredData);
  console.log('hello90');
  makedata(filteredData);
  console.log("hello92");
}
makedata(tableData);

