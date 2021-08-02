const a1 = {x: 1};
const b1 = {x: 2, y: 2};
const c1 = {x: 12, y: 12};
const d1 = {x: 35, y: 36};

function add(...rest) {
    const temporaryArray = [];
    const finallyObject = {};
    const receivingArray = [...rest];

    receivingArray.forEach(ob => {
        Object.entries(ob).map(el => temporaryArray.push(el))
    });

    temporaryArray.forEach(el => {
        for(let i = 0; i < 1; i++){
            if(finallyObject.hasOwnProperty[el[0]]){
                finallyObject[el[0]] = el[1]; 
            } else {
                let count = finallyObject[el[0]] || 0;
                finallyObject[el[0]] = count + el[1];	
            }     
        }
    });
    return finallyObject;
}

console.log(add(a1, b1, c1, d1))

const a = { z: 4, t: 6};
const b = {x: 1, y: 2, z: 4, t: 6, r: 4};
const c = {x: 1, y: 2, z: 4, t: 6};
const d = {x: 1, y: 2, t: 6, r: 4};
const e = {t: 6, x: 1, z: 4};

function intersection(...rest) {
    const receivingArray = [...rest];
    const keys = Object.keys(...rest);
    const finallyObject = {};
    const arrayKeysInitial = [];
    const temporaryObject = {};
    const temporaryArray = [];

    receivingArray.forEach(ob => {
        temporaryArray.push(Object.entries(ob));
        arrayKeysInitial.push(Object.keys(ob));
    })

    const firstArray = temporaryArray.splice(0, 1);

    firstArray.forEach(el => {
        for(let i = 0; i < firstArray.length; i++){
            for(let j = 0; j < firstArray[i].length; j++) {
	            temporaryObject[el[j][0]] = el[j][1];
            }
        }           
    })

    temporaryArray.forEach(el => {
        for(let i = 0; i < el.length; i++){
            for(let j = 0; j < el.length; j++){
                if(temporaryObject.hasOwnProperty(el[i][0]) && temporaryObject[el[j][0]] === el[j][1]) {
                    finallyObject[el[j][0]] = el[j][1];
                }
            }
        }
    })

    arrayKeysInitial.forEach(array => {
        for(let i = 0; i < array.length; i++) {
            for(let v of keys) {
                if(!array.includes(v)) {
                    delete finallyObject[v] ;
                }
            }
        }
    })

    return finallyObject
}

console.log('Intersection :', intersection(a, b, c, d, e))




















