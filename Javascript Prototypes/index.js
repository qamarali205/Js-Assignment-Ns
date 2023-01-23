Array.prototype.includesOneof = function (list) {

    for (let i = 0; i < this.length; i++) {
        if (list.length === 0 || this.length == 0) {
            return false;
        }
        if (Array.isArray(list[0]) && Array.isArray(this[0])) {
            for (let j = 0; j < list.length; j++) {
                let array1 = this[i];
                let array2 = list[j];
                if (array1.length === array2.length && array1.every((value, index) => value === array2[index]))
                    return true;
            }
        }

        if (this[0].constructor === Object) {
            console.log()
            for (let j = 0; j < Object.keys.length; j++) {

                let array1 = this[i];
                let array2 = list[j];
                //console.log(JSON.stringify(array1) === JSON.stringify(array2));
                if (Object.keys(array1).length === Object.keys(array2).length && JSON.stringify(array1) === JSON.stringify(array2))
                    return true;
            }

        }
        if (list.includes(this[i])) {
            return true;
        }
    }
    return false;

}


const arr=[1, 2, 3, 4, 5, 6]
console.log(arr.includesOneof([2, 8, 10])) //true
console.log(arr.includesOneof([10, 11, 12]))//false
console.log(arr.includesOneof([]))//false

const arr2 = [{name:"James Bond",code:'OO7'},{name:"Edward Donne",code:"OO1"}]
console.log(arr2.includesOneof([{name:"Edward Donne",code:"OO1"}])) //true
console.log(arr2.includesOneof([{name:"James Bond",code:'OO7',organization: 'MI6'}])) //false


const arr3 =[[1,22,33,4],[4,55,6,772]];
console.log(arr3.includesOneof([[1,22,33,4]])) // true
console.log(arr3.includesOneof([[4,55,6,772]])) // false