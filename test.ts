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
          this.id=id;
          this.name=name;
          this.subject_name=subname;
          this.subject_code=subcode;
        //   id = Date.now();
        //   name = "Patrick";
        //   subname ="Mathematics"
        //   subcode = 1234;
          console.error(name+id+subname+subcode);
    }
}

new Student(Date.now(),"Patrick","Mathematics",1234);
