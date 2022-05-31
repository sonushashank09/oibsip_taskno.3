let input = document.getElementById("inputfield");
let add = document.getElementById("add");
let list = document.getElementById("list")

add.onclick = function() {
    if (input.value.length > 0) {
        var p = document.createElement("p");
        p.classList.add('paragraph-styling');
        p.innerText = input.value;
        p.style.fontSize = "30px";
        p.style.marginTop = "25px";
        p.style.marginLeft = "10px";
        p.style.fontFamily = "monospace"
        p.style.color = "blue"
        list.appendChild(p);
        input.value = ""

        var b = document.createElement("button");
        b.classList.add('button-styling');
        b.innerText = "Delete";
        b.style.marginLeft = "20%";
        b.style.fontSize = "25px";
        b.style.color = "white";
        b.style.backgroundColor = "red";
        b.style.borderRadius = "96px";
        b.style.position = "fixed";
        b.style.fontFamily = "monospace"
        p.appendChild(b);
        b.onclick = function() {
            list.removeChild(p);
        }
    } else {
        alert("Enter a valid To-Do input");
    }

}