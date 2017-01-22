/**
 * Created by py on 1/22/17.
 */


function checkIsArray(value){
    if(!Array.isArray(value)){
        throw new Error("Passed value is not array");
    }
}

function checkIndexInLimits(array, index){
    if(!Number.IsInteger(index)){
        throw new Error("Index should be integer");
    }

    if(index < 0 || index >= array.length){
        throw new Error("Index", index, " is of range");
    }
}


function create(array){
    checkArray(array);

    return array;
}

function get(array, index) {
    checkArray(array);
    checkIndexInLimits(array,index);

    return array[index];
}

function set(array, index, value){
    checkArray(array);
    checkIndexInLimits(array,index);

    array[index] = value;
}

function add(array, value){
    checkArray(array);

    array.push(value);
}


/*  Checks */

checkSafeArray();

function checkArraysAreEquals(arr1,arr2){
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function checkSafeArray(){

    var pass = true;

    try{

        var array = create([4,4]);
        if(!checkArraysAreEquals(array, [4,4])) pass = false;;

        add(array,4);
        if(!checkArraysAreEquals(array, [4,4,4])) pass = false;;

        set(array,0,3);
        if(!checkArraysAreEquals(array, [3,4,4])) pass = false;;

        var tmp = get(array,0);
        if(tmp != 3 || !checkArraysAreEquals(array,[3,4,4])) pass = false;

    }catch(e){
      //  console.log(e.message);
        pass = false;
    }

    try{
        var badArray = create(2);
        pass = false;
    }
    catch(e){
        //console.log(e.message);
    }
    try{
        badArray = create("array");
        pass = false;
    }
    catch(e){
        //console.log(e.message);
    }

    try{
        set(array,10,2);
        pass = false;
    }
    catch(e){
        //console.log(e.message)
    }

    try{
        set(array,-1,2);
        pass = false;
    }
    catch(e){
      //  console.log(e.message)
    }


    try{
        set(array,"tt",2);
        pass = false;
    }
    catch(e){
       // console.log(e.message)
    }

    try{
        add(t,5);
        pass = false;
    }
    catch(e){

    }

    try{
        get(t,0);
        pass = false;
    }
    catch(e){

    }

    try{
        get(array,-1);
        pass = false;
    }
    catch(e){

    }

    try{
        get(array,10);
        pass = false;
    }
    catch(e){

    }

    if(pass)console.log("PASSED");
    else console.log("FAILED");
}