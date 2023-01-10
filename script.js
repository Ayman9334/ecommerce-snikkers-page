let cat = document.getElementById('cat')
const x = document.getElementById('X')
let nig = document.getElementById('nig')
let bigpic = document.getElementById('bigpic')
let nubprod = document.getElementById('nub-prod')
let nowpic = 1
function showmenu(){
    cat.style.transform = 'translateX(250px)'
    nig.style.visibility = 'visible'
}
x.addEventListener("click",()=>{
    cat.style.transform = 'translateX(0)'
    nig.style.visibility = 'hidden'
})


function change_big(id){
    bigpic.innerHTML = `<img src="./images/${id}.jpg">`
    nowpic = Number(id[14]) 
    j = document.querySelectorAll('.sec-pics div')
    for (i of j){
        i.classList.remove('now')
    }
    document.getElementById(id).classList.add('now')
}

function nextprod(Si){
    if(nowpic == 4 && Si){
        nowpic = 1
    }else if(nowpic == 1 && !Si){
        nowpic = 4
    }else if (Si){
        nowpic += 1
    }else{
        nowpic -= 1
    }
    id = 'image-product-' + nowpic
    bigpic.innerHTML = `<img src="./images/${id}.jpg">`
}

const addord = (Si) => (Si)?(nubprod.innerText = Number(nubprod.innerText)+1):((nubprod.innerText>0)?(nubprod.innerText = Number(nubprod.innerText)-1):'')