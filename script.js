let q1 = document.getElementById("q1"); 
if(q1 != undefined){
q1.addEventListener("change", () => {
    let q1_radios = document.getElementsByName("q1");
    for(let i = 0; i < q1_radios.length; i++){
        if(q1_radios[i].checked){
            localStorage.setItem("q1",q1_radios[i].value)     
        }
    }
})
}
let q2 = document.getElementById("q2"); 
if(q2 != undefined){
q2.addEventListener("change", () => {
    let q2_radios = document.getElementsByName("q2");
    for(let i = 0; i < q2_radios.length; i++){
        if(q2_radios[i].checked){
            localStorage.setItem("q2",q2_radios[i].value)     
        }
    }
})
}
let q3 = document.getElementById("q3"); 
if(q3 != undefined){
q3.addEventListener("change", () => {
    let q3_radios = document.getElementsByName("q3");
    for(let i = 0; i < q3_radios.length; i++){
        if(q3_radios[i].checked){
            localStorage.setItem("q3",q3_radios[i].value)     
        }
    }
})
}
let q4 = document.getElementById("q4"); 
if(q4 != undefined){
q4.addEventListener("change", () => {
    let q4_radios = document.getElementsByName("q4");
    for(let i = 0; i < q4_radios.length; i++){
        if(q4_radios[i].checked){
            localStorage.setItem("q4",q4_radios[i].value)     
        }
    }
})
}
let q5 = document.getElementById("q5"); 
if(q5 != undefined){
q5.addEventListener("change", () => {
    let q5_radios = document.getElementsByName("q5");
    for(let i = 0; i < q5_radios.length; i++){
        if(q5_radios[i].checked){
            localStorage.setItem("q5",q5_radios[i].value)     
        }
    }
})
}
let q6 = document.getElementById("q6"); 
if(q6 != undefined){
q6.addEventListener("change", () => {
    let q6_radios = document.getElementsByName("q6");
    for(let i = 0; i < q6_radios.length; i++){
        if(q6_radios[i].checked){
            localStorage.setItem("q6",q6_radios[i].value)     
        }
    }
})
}
let q7 = document.getElementById("q7"); 
if(q7 != undefined){
q7.addEventListener("change", () => {
    let q7_radios = document.getElementsByName("q7");
    for(let i = 0; i < q7_radios.length; i++){
        if(q7_radios[i].checked){
            localStorage.setItem("q7",q7_radios[i].value)     
        }
    }
})
}
let q8 = document.getElementById("q8"); 
if(q8 != undefined){
q8.addEventListener("change", () => {
    let q8_radios = document.getElementsByName("q8");
    for(let i = 0; i < q8_radios.length; i++){
        if(q8_radios[i].checked){
            localStorage.setItem("q8",q8_radios[i].value)     
        }
    }
})
}

let results = document.getElementById("results");
if (results != undefined){
    let q1 = localStorage.getItem("q1")
    let q2 = localStorage.getItem("q2")
    let q3 = localStorage.getItem("q3")
    let q4 = localStorage.getItem("q4")
    let q5 = localStorage.getItem("q5")
    let q6 = localStorage.getItem("q6")
    let q7 = localStorage.getItem("q7")
    let q8 = localStorage.getItem("q8")

    console.log(q1)
    console.log(q2)
    console.log(q3)
    console.log(q4)
    console.log(q5)
    console.log(q6)
    console.log(q7)
    console.log(q8)


    let points = 0; 
    if (q1 == "Sadness"){
        points += 1;  
    } else {
        points += 0; 
    }
    if (q2 == "Hate"){
        points += 1; 
    } else {
        points += 0; 
    }

    if (q3 == "Contempt"){
        points += 1; 
    } else {
        points += 0; 
    }
    if (q4 == "Anger"){
        points += 1;  
    } else {
        points += 0; 
    }
    if (q5 == "Grudge"){
        points += 1;  
    } else {
        points += 0; 
    } if (q6 == "Tension"){
        points += 1;  
    } else {
        points += 0; 
    }
    if (q7 == "Lonesomeness"){
        points += 1;  
    } else {
        points += 0; 
    }
    if (q8 == "Concern"){
        points += 1;  
    } else {
        points += 0; 
    }
     
    console.log(points)

    let results = document.getElementById("results");
    results.innerHTML = `Results: ${points}`; 
    
}



let reset = document.getElementById("reset");
if (reset != undefined){
reset.addEventListener("click", () => {
    localStorage.clear()
})
}