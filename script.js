document.addEventListener("DOMContentLoaded", function() {
    //task 1 -----------------------------------start--------------------------------------------------
    let showContentDataTag;
    function tabsChoice(event) {
        let clickTab = event.target;
        event.target.classList.add('tabsSelected');
        showContentDataTag = event.target.dataset.target;
        
        event.target.parentNode.childNodes.forEach(e => {
            if (e.tagName === "LI") {
                if (clickTab !== e) {
                    //e.dataset.activetab = "off";
                    e.classList.remove('tabsSelected');
                }
                //else e.dataset.activetab = "on";
            } 
        })

        let tabsContentWrapper = document.querySelector('.tabsContentWrapper');
        console.log("получили врапер контента");
        console.log(tabsContentWrapper);
        tabsContentWrapper.childNodes.forEach(e => {
            if (e.tagName === "LI") {
                if (e.dataset.target !== showContentDataTag) {
                    //e.classList.remove('tabsContent');
                    e.classList.remove('tabsContentShow');
                    e.classList.add('tabsContentNone');
                }
                else {
                    e.classList.add('tabsContentShow');
                }

            }
        })
    }
    let tabs = document.querySelector(".tabs");
    tabs.addEventListener('click', tabsChoice);
    //task 1 -----------------------------------end--------------------------------------------------
    
    //task 2 -----------------------------------start--------------------------------------------------
    //version 1
    let paintTableTask2 = document.querySelector(".task2 > .painTable");
    paintTableTask2.onclick = function (event) {
        this.target = event.target.closest("td");
        let color = window.getComputedStyle(this.target).backgroundColor;

        if (color === "rgba(0, 0, 0, 0)") this.target.style.backgroundColor = 'red';
        else this.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    //version 2
    let paintTableTask2v2 = document.querySelector(".task2v2 > .painTable");
    let selectedTd;
    paintTableTask2v2.onclick = function(event) {
        let target = event.target.closest("td");
        if (target) highlight(target);
    }
    function highlight(node) {
        if (selectedTd === node){
          selectedTd.classList.remove("task2v2-highlight");
          selectedTd = '';
          return;
        }
        if (selectedTd) selectedTd.classList.remove("task2v2-highlight");
        selectedTd = node;
        selectedTd.classList.add("task2v2-highlight");
    }
    //task 2 -----------------------------------end----------------------------------------------------


    //task 3 -----------------------------------start--------------------------------------------------

    let tableActive;
    let paintTableTask3 = document.querySelector(".task3 > .painTable");

    paintTableTask3.addEventListener('click', function() {
        if (!tableActive) {
            tableActive = true;
            tableActivePuzzle15 = false;
            paintTableTask3.style.border = "4px black solid";

        }
        else {
            tableActive = false;
            paintTableTask3.style.border = "1px black solid";
        }
    });
    task3();
    function task3 () {
        let NAVIGATION = [37, 38, 39, 40];
        document.body.addEventListener("keydown", function(event) {

            if ((-1 != NAVIGATION.indexOf(event.keyCode)) && tableActive) {
                event.preventDefault();

                let rows;
                let cells;
                let currentCell;
                for (let i = 0; i < paintTableTask3.rows.length; i++) {
                    for (let j = 0; j < paintTableTask3.rows[i].cells.length; j++) {
                        let classCurrentCell = paintTableTask3.rows[i].cells[j].getAttribute("class");
                        if (classCurrentCell) {
                            rows = i;
                            cells = j;
                            currentCell = paintTableTask3.rows[i].cells[j];
                            classCurrentCell = "";
                        }
                    }
                }

                if (event.keyCode === 37) {//37
                    let cellsTemp = cells - 1;
                    if (cellsTemp < 0) cellsTemp = 0;
                    paintTableTask3.rows[rows].cells[cellsTemp].classList.toggle("move");
                    paintTableTask3.rows[rows].cells[cells].classList.toggle("move");
                }
                if (event.keyCode === 38) {//38
                    let rowsTemp = rows - 1;
                    if (rowsTemp < 0) rowsTemp = 0;
                    paintTableTask3.rows[rowsTemp].cells[cells].classList.toggle("move");
                    paintTableTask3.rows[rows].cells[cells].classList.toggle("move");
                }
                if (event.keyCode === 39) {//39
                    let cellsTemp = cells + 1;
                    if (cellsTemp > 3) cellsTemp = 3;
                    paintTableTask3.rows[rows].cells[cellsTemp].classList.toggle("move");
                    paintTableTask3.rows[rows].cells[cells].classList.toggle("move");
                }
                if (event.keyCode === 40) {//40
                    let rowsTemp = rows + 1;
                    if (rowsTemp > 3) rowsTemp = 3;
                    paintTableTask3.rows[rowsTemp].cells[cells].classList.toggle("move");
                    paintTableTask3.rows[rows].cells[cells].classList.toggle("move");
                }
            }
        });
    }

    //document.body.removeEventListener("keydown", function());
    //task 3 -----------------------------------end----------------------------------------------------


    //Additional task puzzle15 -----------------------------------start--------------------------------

    let tableActivePuzzle15;
    let tablePuzzle15 = document.querySelector(".puzzle15 > .table");

    tablePuzzle15.addEventListener('click', function() {
        if (!tableActivePuzzle15) {
            tableActivePuzzle15 = true;
            tablePuzzle15.style.border = "4px black solid";

        }
        else {
            tableActivePuzzle15 = false;
            tablePuzzle15.style.border = "1px black solid";
        }
    });
    puzzle15();
    function puzzle15 () {
        let NAVIGATION = [37, 38, 39, 40];
        document.body.addEventListener("keyup", function(event) {

            if ((-1 != NAVIGATION.indexOf(event.keyCode)) && tableActivePuzzle15) {
                event.preventDefault();

                let rows;
                let cells;
                let currentCell;
                for (let i = 0; i < tablePuzzle15.rows.length; i++) {
                    for (let j = 0; j < tablePuzzle15.rows[i].cells.length; j++) {
                        let classCurrentCell = tablePuzzle15.rows[i].cells[j].getAttribute("class");
                        if (classCurrentCell) {
                            rows = i;
                            cells = j;
                            currentCell = tablePuzzle15.rows[i].cells[j];
                            classCurrentCell = "";
                        }
                    }
                }
                if (event.keyCode === 39) {//37
                    let cellsTemp = cells - 1;
                    if (cellsTemp < 0) cellsTemp = 0;
                    tablePuzzle15.rows[rows].cells[cellsTemp].classList.toggle("move");
                    tablePuzzle15.rows[rows].cells[cells].classList.toggle("move");

                    tablePuzzle15.rows[rows].cells[cells].innerHTML = tablePuzzle15.rows[rows].cells[cellsTemp].textContent;
                    tablePuzzle15.rows[rows].cells[cellsTemp].innerHTML = "";
                }
                if (event.keyCode === 40) {//38
                    let rowsTemp = rows - 1;
                    if (rowsTemp < 0) rowsTemp = 0;
                    tablePuzzle15.rows[rowsTemp].cells[cells].classList.toggle("move");
                    tablePuzzle15.rows[rows].cells[cells].classList.toggle("move");

                    tablePuzzle15.rows[rows].cells[cells].textContent = tablePuzzle15.rows[rowsTemp].cells[cells].textContent;
                    tablePuzzle15.rows[rowsTemp].cells[cells].textContent = "";
                }
                if (event.keyCode === 37) {//39
                    let cellsTemp = cells + 1;
                    if (cellsTemp > 3) cellsTemp = 3;
                    tablePuzzle15.rows[rows].cells[cellsTemp].classList.toggle("move");
                    tablePuzzle15.rows[rows].cells[cells].classList.toggle("move");

                    tablePuzzle15.rows[rows].cells[cells].innerHTML = tablePuzzle15.rows[rows].cells[cellsTemp].textContent;
                    tablePuzzle15.rows[rows].cells[cellsTemp].innerHTML = "";
                }
                if (event.keyCode === 38) {//40
                    let rowsTemp = rows + 1;
                    if (rowsTemp > 3) rowsTemp = 3;
                    tablePuzzle15.rows[rowsTemp].cells[cells].classList.toggle("move");
                    tablePuzzle15.rows[rows].cells[cells].classList.toggle("move");

                    tablePuzzle15.rows[rows].cells[cells].textContent = tablePuzzle15.rows[rowsTemp].cells[cells].textContent;
                    tablePuzzle15.rows[rowsTemp].cells[cells].textContent = "";
                }
            }
        });
    }
    //Additional task puzzle15 -----------------------------------end----------------------------------

    //Pointer to cursor -----------------------------------start---------------------------------------
    let cursorField = document.querySelector(".cursorField");
    let cursor = document.querySelector(".cursor");


    cursorField.onmouseout = whereCursorOff;
    cursorField.onmousemove = cursorField.onmousedown = whereCursor;

    function whereCursor(event) {
        cursorField.style.backgroundColor = "red";
        let positionFieldX = cursorField.getBoundingClientRect().x;
        let positionFieldY = cursorField.getBoundingClientRect().y;
        let centerFieldX = positionFieldX + parseInt(window.getComputedStyle(cursorField).width)/2;
        let centerFieldY = positionFieldY + parseInt(window.getComputedStyle(cursorField).height)/2;
        let xMouseBlock = event.x - centerFieldX;
        let yMouseBlock = (event.y - centerFieldY) * -1;
        let angle = Math.atan(Math.abs(xMouseBlock)/Math.abs(yMouseBlock));
        if (xMouseBlock < 0) angle = -angle;
        if (yMouseBlock < 0) angle = Math.PI - angle;
        console.log("Center "+centerFieldX + " : " + centerFieldY);
        console.log("Cursore "+event.x + " : " + event.y);
        console.log("MouseBlock "+xMouseBlock+ " : " + yMouseBlock);
        console.log("angle: "+(angle / (Math.PI/180)));
        cursor.style.transform = 'rotate(' + angle + 'rad)';
    }
    function whereCursorOff(event) {
        cursorField.style.backgroundColor = "inherit";
        cursor.style.transform = 'rotate(' + 0 + 'deg)';
    }
    //Pointer to cursor -----------------------------------end-----------------------------------------

})