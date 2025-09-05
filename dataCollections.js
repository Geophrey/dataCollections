// Part 1
console.log(
    `Part 1
    Refactor old CSV data`
);

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows=csv.split("\n")

console.log(
    `Refactored CSV Data:
    ${rows}`
);

// Part 2
console.log(
    `Part 2
    Transforming Data`
);

const cells=[];
for(let row of rows)
cells.push(row.split(","))


let superCell = [cells[0],cells[1],cells[2],cells[3],cells[4]];

console.log(superCell)

// Part 3
console.log(`Part 3`);

let obj1 = {
    ID: superCell[1][0],
    Name: superCell[1][1],
    Occupation: superCell[1][2],
    Age: parseInt(superCell[1][3])
}

let obj2 = {
    ID: superCell[2][0],
    Name: superCell[2][1],
    Occupation: superCell[2][2],
    Age: parseInt(superCell[2][3])
}
let obj3 = {
    ID: superCell[3][0],
    Name: superCell[3][1],
    Occupation: superCell[3][2],
    Age: parseInt(superCell[3][3])
}
let obj4 = {
    ID: superCell[4][0],
    Name: superCell[4][1],
    Occupation: superCell[4][2],
    Age: parseInt(superCell[4][3])
}

let arrObject = [obj1,obj2,obj3,obj4]

console.log(arrObject)

// Part 4
console.log(
    `Part 4
    Sorting, manipulating, and averaging data`
);

arrObject.pop();

let newObject1 = {
    ID: "48",
    Name: "Barry",
    Occupation: "Runner",
    Age: 25
}

let newObject2 = {
    ID: "7", 
    Name: "Bilbo", 
    Occupation: "None", 
    Age: 111
}

arrObject.splice(1, 0, newObject1);

arrObject.push(newObject2);

console.log(arrObject);

let person = null;
let ageSum = 0;

arrObject.forEach(
    (x) => {
        ageSum+=x.Age;
    }
)
let avrAge = (ageSum)/arrObject.length;

console.log(
    `Age Sum is: ${ageSum}
    Average Age is: ${avrAge}`
)


// Part 5
console.log(
    `Part 5
    Converting back to CSV`
);

let csvData = "ID,Name,Occupation,Age\n";
console.log(csvData);

arrObject.forEach(
    (x) => {
        csvData+=x.ID+",";
        csvData+=x.Name+",";
        csvData+=x.Occupation+",";
        csvData+=x.Age+"\n";
    }
)

console.log(csvData);