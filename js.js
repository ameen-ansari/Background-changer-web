let body = document.getElementsByClassName('body')[0];
let rendom = document.getElementsByClassName('random')[0];
let input = document.getElementsByClassName('input')[0];
rendom.addEventListener('click',()=>{
let a = Math.floor(Math.random(1)*255)
let b =Math.floor(Math.random(1)*255)
let c =Math.floor(Math.random(1)*255)
ab=a.toString()
cd=b.toString()
ef=c.toString()
let changer1 =(ab+" "+cd+" "+ef)
let  changer2=(cd+" "+ef+" "+ab)
let  changer3=(ef+" "+ab+" "+cd)
    body.style.backgroundColor = `rgb(${changer1})`
    console.log(`rgb(${changer1})`);
    rendom.style.backgroundColor = `rgb(${changer2})`
    input.style.backgroundColor = `rgb(${changer3})`
    rendom.style.border = `none`
    console.log(`rgb(${changer2})`);
    input.style.visibility = "visible"
    input.value = "rgb  =  " + changer1
})

