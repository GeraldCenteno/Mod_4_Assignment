//define JSON payload
const studentGrades = {"grades": [
  {"lastName": "Dandy", "firstName": "Jim", "grade": 93},
  {"lastName": "Sue", "firstName": "Sally", "grade": 78},
  {"lastName": "Anday", "firstName": "Handay", "grade": 59},
  {"lastName": "Alford", "firstName": "Cynthia", "grade": 100},
  {"lastName": "Hanson", "firstName": "Dondi", "grade": 99},
  {"lastName": "Kirkpatrick", "firstName": "Ken", "grade": 94},
  {"lastName": "Tormanen", "firstName": "Harlan", "grade": 97},
  {"lastName": "Felix", "firstName": "Tom", "grade": 89},
  {"lastName": "Bergman", "firstName": "Don", "grade": 88},
  {"lastName": "Smith", "firstName": "Doug", "grade": 79},
]};

  //create a variable to access studentGrades table
  const table = document.getElementById("midtermGrades");

  //extract data from JSON and place into table
  let i = 0;
  //start loop
  for(i = 0; i < studentGrades.grades.length; i++){
  //define row
    const row = document.createElement("tr");

  //define cells
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");

  //extract data into cells
    cell1.textContent = studentGrades.grades[i].lastName;
    cell2.textContent = studentGrades.grades[i].firstName;
    cell3.textContent = studentGrades.grades[i].grade;

  //assign classes to cells to align cells to headers
    cell1.classList.add("left");
    cell2.classList.add("middle");
    cell3.classList.add("right");

  //populate cells
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);

  //write cell to table
    table.appendChild(row);
}