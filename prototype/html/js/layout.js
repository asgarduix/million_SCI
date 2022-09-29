// include-menu-structure
async function includeMenu() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.querySelectorAll(".menu-list");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeMenu();
                }
            }
            xhttp.open("GET", file, false);
            xhttp.send();
            /* Exit the function: */
            return
        }
    }
}

includeMenu().then(() => {
    const pageId = document.getElementById('canvas');
    const pageClass = pageId.getAttribute("class");
    const pageName = pageClass.split('-')[0];
    document.querySelector(`.menu-list a[href^=${pageName}]`) ?.classList ?.add('menu-list-active');
});

// include-header-structure 
async function includeHeader() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.querySelectorAll(".header-list");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html-header");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html-header");
                    includeMenu();
                }
            }
            xhttp.open("GET", file, false);
            xhttp.send();
            /* Exit the function: */
            return
        }
    }
}

includeHeader();

// include-aside-structure 
async function includeAside() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.querySelectorAll(".aside-list");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html-aside");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html-aside");
                    includeMenu();
                }
            }
            xhttp.open("GET", file, false);
            xhttp.send();
            /* Exit the function: */
            return
        }
    }
}

includeAside();

// include-content-structure 
async function includeContent() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.querySelectorAll(".content-block");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html-content");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html-content");
                    includeMenu();
                }
            }
            xhttp.open("GET", file, false);
            xhttp.send();
            /* Exit the function: */
            return
        }
    }
}

includeContent();

// include-content-structure 
async function includeTab() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.querySelectorAll(".tab-list");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html-tab");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html-tab");
                    includeMenu();
                }
            }
            xhttp.open("GET", file, false);
            xhttp.send();
            /* Exit the function: */
            return
        }
    }
}

includeTab();
includeTab().then(() => {
    const pageId = document.getElementById('canvas');
    const pageClass = pageId.getAttribute("class");
    const {pageName} = /(?<pageName>[a-zA-Z]+[\d]+-[\d]+-[a-zA-Z]+-[a-zA-Z]+)/.exec(pageClass).groups
    // const pageName = pageClass;
    // const pageNameAction = pageClass.split("-")[0];
    document.querySelector(`.tab-list a[href^=${pageName}]`) ?.classList ?.add('tab-active');
});
//////////////////////////////////////////////////////////////////////
var $canvas = document.getElementById("canvas");
var $menu = document.getElementById("left_menu");
var $cont = document.getElementById("right_content");

// menu-show/hide ////////////////////////////////////////////////////////////////////////
function menuToggle() {
    if ($menu.classList) {
        $menu.classList.toggle("menu-close");
    }

    if ($cont.classList) {
        $cont.classList.toggle("right-fluid");
    }
}

$('.menu-btn a').click(function() {
    $(this).toggleClass('menu-active');
});

// aside-menu-show/hide ////////////////////////////////////////////////////////////////////////
var divs = ["aside_func1", "aside_func2", "aside_func3", "aside_func4", "aside_func5"];
var visibleDivId = null;


function asideToggle(divId) {
    if (visibleDivId === divId) {
        //visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId && div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

// bootstrap-tooltip ////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $('.tabulator-cell').each(function() {
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('data-placement', 'left');
    });
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        html: true
    });
});

// input-field-entry-number-only ////////////////////////////////////////////////////////////////////////
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

// query-sbu-row-group-trigger ////////////////////////////////////////////////////////////////////////
function querySubRowTrigger() {
    var querySubRowStatus = document.getElementById("querySubRow");
    if (querySubRowStatus.style.display === "none") {
        querySubRowStatus.style.display = "block";
        document.querySelector('.query-more-link').setAttribute('attr', 'open');
    } else {
        querySubRowStatus.style.display = "none";
        document.querySelector('.query-more-link').setAttribute('attr', 'close');
    }
}

// query-sbu-row-group-trigger ////////////////////////////////////////////////////////////////////////
function collapseTrigger() {
    var collapseStatus = document.querySelector(".collapseTable");
    if (collapseStatus.style.display === "none") {
        collapseStatus.style.display = "block";
        document.querySelector('.collapse-btn').setAttribute('attr', 'close');
    } else {
        collapseStatus.style.display = "none";
        document.querySelector('.collapse-btn').setAttribute('attr', 'open');
    }
}