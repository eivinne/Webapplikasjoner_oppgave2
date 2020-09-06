window.onload = start;

const myObj = [{id: 1, data: "text"},{id:2, data:"text2"}];

function start() {  

    const main = document.createElement("main");

    document.body.appendChild(main);

    const p = document.createElement("P");

    p.innerHTML = "Jeg trener på JavaScript";

    p.className = "paragraphClass";
    p.id = "paragraph";

    p.style.margin = "0px 0px 30px 0px"
    main.appendChild(p);

    const selectBox = document.createElement("select");

    for(i = 0; i < myObj.length; i++) {
        const option = document.createElement("option");
        option.value = myObj[i].id;
        option.innerHTML = myObj[i].data

        selectBox.appendChild(option);
    }
    
    selectBox.style.maxWidth = "500px";
    selectBox.style.marginLeft = "48%";

    main.appendChild(selectBox);

    const testButton = document.createElement("button");
    testButton.innerHTML = "Test";
    testButton.onclick = test;

    const resetButton = document.createElement("button");
    resetButton.innerHTML = "Reset";
    resetButton.onclick = reset;

    main.appendChild(testButton);
    main.appendChild(resetButton);

    const ul = document.createElement("ul");
    
    for(i = 0; i < 4; i++) {
        const li = document.createElement("li");
        
        const deleteBtn = document.createElement("button");
        deleteBtn.onclick = "deleteList(this)";
        deleteBtn.innerHTML = "Delete";
        li.appendChild(deleteBtn);
        ul.appendChild(li);
    }

    main.appendChild(ul);

}

function deleteList() {
    alert("hei");
}

function reset() {
    const p = document.getElementById("paragraph");
    p.innerHTML = "yolo";

}

function test() {
    const p = document.getElementById("paragraph");

    const string = p.innerHTML;

    const temp = string.split(" ");
    for(i = 0; i < temp.length; i++) {
        const word = temp[i];
        
        if(word != " ") {
            const wordSplit = word.split("");
            wordSplit.shift();

            const newWord = wordSplit.join("");

            temp[i] = newWord + " ";
        }
    }
    const newTemp = temp.join("");
    const newString = newTemp.split("");
    const reversed = newString.reverse();
    const output = reversed.join("");
    
    p.innerHTML = output;
}