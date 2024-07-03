interface Task {
    task_id : number;
    task_name : string;
}

class Action_list{
  private List : Task[] = [];
  private new_record : HTMLInputElement;
  private button_element : HTMLButtonElement;
  private list_display : HTMLOListElement;

    constructor(){
       this.new_record = <HTMLInputElement>document.getElementById("record");
       this.button_element = <HTMLButtonElement>document.getElementById("btn");
       this.list_display = <HTMLOListElement>document.getElementById("list");

       this.button_element.addEventListener("click", this.addTask);
    }

     addTask() : void {
        const record = this.new_record.value.trim();
        if(record === " ") return;
        const listElement = document.createElement("li");
        listElement.textContent = this.new_record.value;
        this.list_display.appendChild(listElement)
    }
}