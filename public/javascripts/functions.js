'use strict'

let selected_url = ""

function load_page(ButtonClicked){
    let Clicked = document.getElementById(ButtonClicked)
    switch(ButtonClicked){
        case "sale_buy":
            window.location = "/api/ads";
            break;
        case "sale_items":
            window.location = "/api/ads?sale=true";
            break;
        case "buy_items":
            window.location = "/api/ads?sale=false";
            break;
    }
}

function limit(value){
    console.log(selected_url)
        let modify = selected_url + "?limit=" + value
        window.location = modify

}

const saved_search = ""

function tag_find(){
    let selected =""
    let table = document.getElementById("tag_form")
    let chks = table.getElementsByTagName("input")

    for (var n = 0; n < chks.length; n++){
        if (chks[n].checked){
            selected += chks[n].value + "-"
        }
    }
    window.location = "/api/ads?tags=" + selected
}

let direccion = ""

function skip(){
    let scape = "skip=2"
    let direccion = window.location.href
    if(direccion.indexOf(scape)){
        direccion.replace(scape, "skip=4")
    }
    window.location = direccion
}

let pasar = document.getElementById("skip_items");

function hide(){
    //document.getElementById("skip_items").classlist.remove("mostrar")
    pasar.classList.add("esconder")
}
function show(){
    //document.getElementById("skip_items").classlist.remove("esconder")
    pasar.classList.add("mostrar")
}