/**
 * Created by py on 1/22/17.
 */

function checkArray(value){
    if(!Array.isArray(value)){
        throw new Error("Passed value is not array");
    }
}

function checkIndexInLimits(array, index){
    if(!Number.isInteger(index)){
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




module.exports = {
    create : create,
    add : add,
    set : set,
    get : get
}