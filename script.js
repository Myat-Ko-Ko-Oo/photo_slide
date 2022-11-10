photo_array =[
    {
        id:1,
        descri:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusamus ipsam et, minus quasi iure sed rerum, alias nam veniam saepe quo consequuntur nostrum beatae, eos quae aspernatur aperiam dolor.",
        header:"Slide01",
        image:"https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
        button:"btn_1"
    },
    {
        id:2,
        descri:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusamus ipsam et, minus quasi iure sed rerum, alias nam veniam saepe quo consequuntur nostrum beatae, eos quae aspernatur aperiam dolor.",
        header:"Slide02",
        image:"https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        button:"btn_2"
    },
    {
        id:3,
        descri:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusamus ipsam et, minus quasi iure sed rerum, alias nam veniam saepe quo consequuntur nostrum beatae, eos quae aspernatur aperiam dolor.",
        header:"Slide03",
        image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        button:"btn_3"
    },
    {
        id:4,
        descri:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusamus ipsam et, minus quasi iure sed rerum, alias nam veniam saepe quo consequuntur nostrum beatae, eos quae aspernatur aperiam dolor.",
        header:"Slide04",
        image:"https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        button:"btn_4"
    },
    {
        id:5,
        descri:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas accusamus ipsam et, minus quasi iure sed rerum, alias nam veniam saepe quo consequuntur nostrum beatae, eos quae aspernatur aperiam dolor.",
        header:"Slide05 ",
        image:"https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        button:"btn_5"
    }
]


image_container = document.querySelector(".image_container")
navigation  = document.querySelector(".navigation")

for(el of photo_array){
    pt_id=el.id
    pt_desc=el.descri
    pt_head=el.header
    pt_image=el.image
    pt_button=el.button

image_container.innerHTML+=`<div class="image_slide" id="${pt_id}">    
<img src="${pt_image}">
    <div class="info">
    <h1 class="header">${pt_head}</h1>
    <p class="descri"> ${pt_desc}</p>

</div>

</div>`

navigation.innerHTML += `
<button class="btn ${pt_button}"></button>`

btns = document.querySelectorAll(".btn")
image_slide = document.querySelectorAll(".image_slide")



btns.forEach((el,i) => {

    el.addEventListener("click",()=>{
        for(el of btns){
            el.classList.remove("active")
        }
        for(el of image_slide){
            el.classList.remove("active")
        }
        btns[i].classList.add("active")
        image_slide[i].classList.add("active")

    })


});

btns[0].click()
}

let i =0
auto = ()=>{
// for(el of btns){
//     el.click()
//     console.log(el)
// }
// btns[i].click()

if(i<image_slide.length-1){
    btns[i].click()
    i++}
else{
    i=0
}

btns[i].click()


}



setInterval(() => {
    auto()
}, 7000);

