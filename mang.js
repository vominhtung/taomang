let x = 0;
let array = Array();

function add_element_to_array() {
    array[x] = document.getElementById("value").value;
    alert("Element: " + array [x] + "Added at index " + x);
    x++;
    document.getElementById("value").value = " ";
}

function display_array() {
    let e = "<hr/>";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}