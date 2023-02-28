class School{
    constructor(){
        this.students=[];
    }
    add(student){
        this.students.push(student);
    }
   get latest(){
        return this.students[this.students.length-1];
    }
}