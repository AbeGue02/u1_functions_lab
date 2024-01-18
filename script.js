// Exercise 1 & 2
const login = (name, isLoggedIn) => {
    isLoggedIn ? console.log(`Hello ${name}`) : console.log("Please log in")
}

// Exercise 3
const findArea = (length, width, price, budget) => {
    const totalCost = ((length * width) * price) + 100
    totalCost > budget 
        ? console.log(`You do not have enough. You need $${totalCost - budget} more`)
        : console.log(`You have enough. You would have $${budget - totalCost} left over`)
}
//findArea(20, 30, 1.45, 1000)

// Exercise 4
const students = [
    'Alice',
    'Andy',
    'Andrew',
    'Casey',
    'Damian',
    'Emily',
    'Emilie',
    'Grant',
    'Howie',
    'Isabella',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Oscar',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Umberto',
    'Wade',
    'Zhe'
]

const studentsLength = () => {
    students.forEach((student) => {
        if(student.length >= 5 && ['a','e','i','o','u'].some((vowel) => {return student.charAt(0).toLowerCase() === vowel })) {
            console.log(`${student} is ${student.length} letters long`)
        }
    })
}

studentsLength()
//studentsLength()
