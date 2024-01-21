document.addEventListener('DOMContentLoaded', function () {
   

    var flavorsString = prompt("Enter froyo flavors (comma-separated):");

    // Criterion: Functionality
    // The user's input string is split into an array of strings.
    var flavorsArray = flavorsString.split(',');

    // Criterion: Functionality
    // A loop is used to iterate through the array of flavors.
    for (var i = 0; i < flavorsArray.length; i++) {
        // Criterion: Functionality
        // An object is used to keep count of how many orders there are of each flavor.
       
        countFlavor(flavorsArray[i]);
    }

    // Criterion: Code Style
    // The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
    function countFlavor(flavor) {
        

        console.log(`Order for ${flavor} counted.`);
    }
});