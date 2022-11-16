// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

                  ///First and foremost I begin to set up my TDD for jest with "describe" and "it" statments. |sequenceNums| will be the function used later.
                  ///The "it" statement will return the correct numbers of the Fibonacci sequence.
                  ///I was required to look at the numbers right off the bat to figure out what this sequence was all about, I discovered the numbers were the sum of the 
                  ///previous one. In this case, every element in the arrays.
                  ///I was able to get a solid failure stating: ReferenceError: sequenceNums is not defined. Next I construct my function.
                  /// I did some research to shine a light on what iteration was needed for this problem, and most websites were pointing to for loops, 
                  ///which I had suspected.
                  /// I'm trying to set up the for loop to iterate over each element and add the previous element. 

// a) Create a test with expect statements for each of the variables provided.
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
     

describe("sequenceNums",() => {
        it ("returns an array that length containing the numbers of the Fibonacci sequence", () =>{
          expect(sequenceNums(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
          expect(sequenceNums(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
      })
                  // TEST RESULTS: Failed        ReferenceError: sequenceNums is not defined
                  //           Test Suites: 1 failed, 1 total
                  //           Tests:       1 failed, 1 total


// b) Create the function that makes the test pass.

    
let fibArr = (array) => {
  for(let i= 2; i< fibLength1.length; i++);
  for(let i= 2; i< fibLength2.length; i++);
}



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

          ///I begin to set up the Jest test with "describe" and name a future variable |studious| that I will create later.
          ///The it statement will state: return the two varibales, which are arrays, numbers from least to greatest.
          ///I get a Failed test I was looking for, with a reference error stating "studious" is undefined.
          /// Next, I create a template of a function using "studious", and fall very short of getting close to a decent answer.
          ///Looking at the Object.values(), I try to pass the two variables (studyMinutesWeek1/2) through and use the built in method
          ///.sort() in order to output the array of numbers in a correct sequence from least to greatest.
          /// Moving the syntax around, the Terminal states that the variables are not a function, or .sort is not a function.

// a) Create a test with expect statements for each of the variables provided.
          describe("studious", () => {
            it("returns an array of the values sorted from least to greatest",() => {
              expect(studious(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
              expect(studious(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
            })
          })

                // TEST RESULTS: Failed        ReferenceError: studius is not defined
                                  //           Test Suites: 1 failed, 1 total
                                  //           Tests:       1 failed, 1 total


const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.


const studious = () => {
  return  Object.values(studyMinutesWeek1.sort())
  return  Object.values(studyMinutesWeek2.sort())
}
 


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

              ///First, setting up the Jest TDD framework, I create a variable I will declare in the future called |addAccounts|, IT statements will return
              /// three arrays with an accumulating sum. One out of the three will output and empty array.
              ///There is a Failed test which is what I'm watching out for in terminal: ReferenceError: addAccounts is not defined. I proceed to write the function to solve.
              ///I choose to use the .map() method in order to iterate through each element in every array, simultaneously adding the elements.
              ///I did my best to facilitate this by using square brackets around 0,1,2,3 indexes, and using the addition sign "+" to command .map() to add the elements.
              //Through much frustration and different configurations, the expected outputs are not coming throught in terminal.

// a) Create a test with expect statements for each of the variables provided.

describe("addAccounts",() => {
  it("returns an array of the accumulating sum. An empty array should return an empty array",() => {
    expect(addAccounts(accountTransactions1)).toEqual("[100, 83, 60, 51]")
    expect(addAccounts(accountTransactions2)).toEqual("[250, -89, 100, -96]")
    expect(addAccounts(accountTransactions3)).toEqual("[]")
  })
})
// TEST RESULTS: Failed        ReferenceError: addAccounts is not defined
                                  //           Test Suites: 1 failed, 1 total
                                  //           Tests:       1 failed, 1 total

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass

const addAccounts = (array) => {
  return array.map(accountTransactions1[0+1+2+3])
  return array.map(accountTransactions2[0+1+2+3])
  return array.map(accountTransactions3[0+1+2+3])

}
