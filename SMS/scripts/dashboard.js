let data=JSON.parse(localStorage.getItem("students"))||[];
console.log(data)
append(data)
function append(data){
    console.log("yes");
   
    let container=document.getElementById("container");
    container.innerHTML=null;
    data.forEach(function(el,index){
        console.log(el);
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=el.image;
        let p=document.createElement("p");
        p.innerText=el.name;
        let course=document.createElement("p");
        course.innerText=el.course;
        let unit=document.createElement("p");
        unit.innerText=el.unit;
        let batch=document.createElement("p");
        batch.innerText=el.batch;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.style.backgroundColor="red";
        btn.addEventListener("click",function(){
            remove(index);
        });
        div.append(img,p,course,unit,batch,btn);
        document.getElementById("container").append(div);
    })
}

function remove(index){
    let data=JSON.parse(localStorage.getItem("students"))||[];

    let newData=data.filter(function(el,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !== index;
        }
    });
    localStorage.setItem("students",JSON.stringify(newData));
    append(newData);
   window.location.reload();
}


function calculate(){
    let data=JSON.parse(localStorage.getItem("students"))||[];
    let obj={};
    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;
        }
    }
    for(let i=0;i<data.length;i++){
        obj[data[i].batch]++;
    }
    console.log(obj)
    let navbar = document.getElementById("navbar");
    navbar.innerHTML=null;
    for(let key in obj){
        let div=document.createElement("div");
        //   div.style.margin=auto;
        let batch=document.createElement("p");
         batch.innerText=` ${key}-  ${obj[key]}`;
        div.append(batch)
        document.getElementById("navbar").append(div)
    }
    console.log(obj);
}
calculate();