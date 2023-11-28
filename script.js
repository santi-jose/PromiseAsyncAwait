
function addStudentToClass(student){
    return new Promise(async (resolve, reject) =>{
        // create random delay of 1 to 3000 milliseconds. setTimeout params in milliseconds
        // Math.random() * 3000 -> [0 inclusive, 3000 exclusive)
        // + 1 -> [1 inclusive, 3001 exclusive]
        // Math.floor() -> [1 inclusive, 3000 inclusive]
        let delay = Math.floor(((Math.random() * 3000) + 1));
        
        try{
            // if our student's age is less than 18, throw new error
            if(student.age < 18){
                throw new Error(`Student ${student.name} is too young for this class.`);
            }
            // otherwise await for promies to resolve after 1 to 3 seconds
            await setTimeout(() =>{
                resolve(`Promise resolved after ${delay/1000} second(s). ${student.name} successfully added to class.`);
            }, delay)
        }catch(error){
            reject(`Promise rejected with an error: \n${error}`);
        }
    });
}

async function registerStudent(student) {
    try{
        // try to add student to class
        const result = await addStudentToClass(student);
        console.log (result); // log the result
    }catch(error){ // catch any errors and 
        console.error(error);
    }
}

// student data
const students = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 17},
    {name: "Charlie", age: 19}
]

// call registerStudent on all students
for(const student of students){
    registerStudent(student);
}

