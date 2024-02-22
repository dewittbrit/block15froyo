    // Criterion: Functionality
    // The user's input string is split into an array of strings.
   

    // Criterion: Functionality
    // A loop is used to iterate through the array of flavors.
    
        // Criterion: Functionality
        // An object is used to keep count of how many orders there are of each flavor.
       
      
    // Criterion: Code Style
    // The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
   

const userInputString = prompt(
    "Please enter froyo flavors by commas."
)

const stringArray = userInputString.split(",");

console.log(stringArray);

function count(stringArray){
    const map = {};
    for (let i = 0; i < stringArray.length; i++){
        if (map[stringArray[i]]){
            map[stringArray[i]]++;
        } else {
            map[stringArray[i]] = 1;
        }
    }
    return map;
}

console.log(count(stringArray));