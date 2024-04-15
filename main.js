console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(\"node1\") method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2");
for(let i = 0; i < node2.length; i++) {
    node2[i].textContent = "I used the getElementsByClassName(\"node2\") method to access this";
}

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const h3 = document.getElementsByTagName("h3");
for(let i = 0; i < h3.length; i++) {
    h3[i].textContent = "I used the getElementByTagName(\"h3\") method to access all of these";
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const paraElement = document.createElement("p");
paraElement.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
const parentDiv = document.getElementById("parent");
parentDiv.appendChild(paraElement);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const anchElement = document.createElement("a");
anchElement.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>
anchElement.href = "https://google.com";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentDiv.insertBefore(anchElement, paraElement);


/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const ex3ParentDiv = document.querySelector("#exercise-container3");

const ex3Par = document.createElement("p");
ex3Par.textContent = "New Child Node";

const ex3Child = document.querySelector("#N1");

ex3ParentDiv.replaceChild(ex3Par, ex3Child);

// TODO: Remove the "New Child Node"
ex3Par.remove();


/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

const parentList = document.getElementById("container");
// TODO: Create an unordered list element
const newUl = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for(let i = 0;  i < list.length; i++) {
    const tempLi = document.createElement("li");
    tempLi.textContent = list[i];
    newUl.append(tempLi);
}

// TODO: Append the unordered list to the `div#container` under exercise 4 
parentList.append(newUl);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message

// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

// This div should be a 'modal' that covers the main content on the screen

// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show() {
    const modalContainerDiv = document.createElement("div");
    const modalCardDiv = document.createElement("div");
    const modalPar = document.createElement("p");
    const closeBtn = document.createElement("button");

    modalPar.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    closeBtn.textContent = "Close";

    closeBtn.addEventListener("click", () => {
        document.body.removeChild(modalContainerDiv);
    });

    modalCardDiv.append(modalPar, closeBtn);
    modalCardDiv.classList.add("modal-card");

    modalContainerDiv.id = "modal";
    modalContainerDiv.append(modalCardDiv);

    document.body.append(modalContainerDiv);
}

const viewModalButton = document.querySelector("#btn");
viewModalButton.addEventListener("click", show);