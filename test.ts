// interface St_Attributes{
//     id: number,
//     name:string,
//     subject_name:string;
//     subject_code:number
// }

class Student{
    id: number;
    name:string;
    subject_name:string;
    subject_code:number;
    constructor(id:number,name:string,subname:string,subcode:number){
          let id1 = Date.now().toString();
          console.error(name+id1+subname+subcode);
    }
}

new Student()
