function sum (numA,numB){
    return numA + numB;
}

function multiplication (numA, numB){
    return numA * numB
}

// Testing Frameworks
function test (message, cb){
try{
    cb();
    console.log(`✅`, message);
} catch (error) {
    console.error(error);
    console.log(`❌`, message)
}
}


// Assertion Libarary
function expect(actual){
    return{
        toEqual: function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}


function testAdd(){
    result = sum(2,4);
    expected = 6;
    expect(result).toEqual(expected);
}
test("adding 2 and 4", testAdd);

test('sum 10 + 10 to be equal 19', ()=>{
    expect(sum(10, 10)).toEqual(19)
})

test('sum 10 + 15 to be equal 25', ()=>{
    expect(sum(10, 15)).toEqual(25)
})

test('sum 10 + 20 to be equal 29', ()=>{
    expect(sum(10, 20)).toEqual(29)
})

test('sum 10 + 25 to be equal 35', ()=>{
    expect(sum(10, 25)).toEqual(35)
})



function testMul(){
    result = multiplication(2,4);
    expected = 8;
    expect(result).toEqual(expected);
}
test("multiplying 2 and 4", testAdd);

test('multiplication 10 * 2 to be equal 19', ()=>{
    expect(multiplication(10, 2)).toEqual(19)
})

test('multiplication 10 * 3 to be equal 30', ()=>{
    expect(multiplication(10, 3)).toEqual(30)
})

test('multiplication 10 * 4 to be equal 39', ()=>{
    expect(multiplication(10, 4)).toEqual(39)
})

test('multiplication 10 * 5 to be equal 50', ()=>{
    expect(multiplication(10, 5)).toEqual(50)
})
