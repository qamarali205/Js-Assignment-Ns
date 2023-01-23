// Your code here
Array.prototype.average = function () {
    const length = this.length;
    let avg = 0;
    for(const val of this) {
        avg += val;
    }
    return avg/length;
}