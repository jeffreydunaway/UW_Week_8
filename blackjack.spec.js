// Jasmine src = https://jasmine.github.io/pages/getting_started.



// To Do

// 1. Create unit tests with Jasmine to test the following cases:

// 10, 9 passed in to function should return false
// Ace, 6 passed in to function should return true
// 10, 6, Ace passed in to function should return false
// 2, 4, 2, 5 passed in should return true

// testing for dealerShouldDraww()



// Rember that the data being passed must be the in the same format as 
// the data being passed in the script you're testing 
// for example: 
// const card_3 = {suit: 'hearts', val: 11, displayVal: 'Ace'} != const card_3 = 11 || const card_3 = 'Ace'
// const card_3 = {suit: 'hearts', val: 11, displayVal: 'Ace'} != const card_3 = 11 || const card_3 = 'Ace'

// meaning that the inputs must match the ones from the script

const card_1 = {suit: 'hearts', val: 10, displayVal: 'Jack'}
const card_2 = {suit: 'hearts', val: 9, displayVal: 9}

const card_3 = {suit: 'hearts', val: 11, displayVal: 'Ace'}
const card_4 =  {suit: 'hearts', val: 6, displayVal: 6}

const card_5 = {suit: 'hearts', val: 10, displayVal: 10}
const card_6 = {suit: 'hearts', val: 6, displayVal: 6}
const card_7 = {suit: 'hearts', val: 11, displayVal: 'Ace'}

const card_8 = {suit: 'hearts', val: 2, displayVal: 2}
const card_9 = {suit: 'hearts', val: 4, displayVal: 4}
const card_10 = {suit: 'hearts', val: 2, displayVal: 2}
const card_11 = {suit: 'hearts', val: 5, displayVal: 5}




// this line is the description of the test ie the name of the test
describe("Test for dealerShouldDraw()", ()=>{
    // what the test does
    it('Test 1: The hand less or equal to 17, Hand = [10 ,9], expect().toBe(false)', ()=>{
            // the test
            let points = [card_1,  card_2]
            let result = dealerShouldDraw(points)

            // the expected result 
            expect(result).toBe(false)
    });
})


describe("Test for dealerShouldDraw()", ()=>{
    it('Test 2: The hand less or equal to 17, Hand = [Ace = 11 ,6], expect().toBe(true)', ()=>{
        let points = [card_3, card_4]
        let result = dealerShouldDraw(points)
        expect(result).toBe(true)
    });
});

describe("Test for dealerShouldDraw()", ()=>{
    // Don't forget you can also nest these statements inside the test
    // this makes more sense if your testing the same function
    // therefore if youre testing dealerShouldDraw() and calcPoints(), you should split
    // the test otherwise it makes more sense to keep em nested
    // each 'it()' statement is independendent from each other

    it('Test 3: The hand less or equal to 17, Hand = [10, 6, Ace = 11], expect().toBe(false)', ()=>{
        let points = [card_5, card_6, card_7]
        let result = dealerShouldDraw(points)
        expect(result).toBe(false)
    });
    it('Test 4: The hand less or equal to 17, Hand = [2, 4, 2, 5]', ()=>{
        let point = [card_8, card_9, card_10, card_11]
        let result = dealerShouldDraw(point)
        expect(result).toBe(true)
    })
});
