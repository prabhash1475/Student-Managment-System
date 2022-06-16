function Student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=`FT_WEB ${b}`
}

function storeData(){
    event.preventDefault();
    //console.log("fjdsf")
    let form=document.getElementById("students_data")
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    let s1= new Student(name,course,unit,image,batch);
    // console.log(s1)
    let data=JSON.parse(localStorage.getItem("students"))||[];
    data.push(s1);
    localStorage.setItem("students",JSON.stringify(data))

   window.location.reload();
    calculate();

}



// function append(data){
//     let navbar = document.getElementById("navbar");
//     navbar.innerHTML=null;
//     data.forEach(function(el,index){
//         console.log(el);
//         let div=document.createElement("div");
//         //   div.style.margin=auto;
//         let batch=document.createElement("p");
//         batch.innerText=el.batch;
//         div.append(batch)
//         document.getElementById("navbar").append(div)
//     })
    
// }

// append(data)
// let data=JSON.parse(localStorage.getItem("students"))||[];

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
        let batch=document.createElement("p");
         batch.innerText=` ${key}-  ${obj[key]}`;
        div.append(batch)
        document.getElementById("navbar").append(div)
    }
    //console.log(obj);
}
calculate();

