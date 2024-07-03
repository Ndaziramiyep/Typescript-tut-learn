var Action_list = /** @class */ (function () {
    function Action_list() {
        this.List = [];
        this.new_record = document.getElementById("record");
        this.button_element = document.getElementById("btn");
        this.list_display = document.getElementById("list");
        this.button_element.addEventListener("click", this.addTask);
    }
    Action_list.prototype.addTask = function () {
        var v = this.new_record.value;
        var record = this.new_record.value.trim();
        if (record === " ")
            return;
        var listElement = document.createElement("li");
        listElement.textContent = this.new_record.value;
        console.log(v);
        this.list_display.appendChild(listElement);
    };
    return Action_list;
}());
new Action_list();
