let input = document.querySelector("#uploadImage");
let img = document.querySelector(".image img");
let predict = document.querySelector(".predict");
input.addEventListener("change",function(e){
    preview(e);
});

function preview(e){
    e.preventDefault();
    let reader = new FileReader();
    reader.onload = function(x){
        img.setAttribute("src",x.target.result);
    };
    reader.readAsDataURL(input.files[0]);
    predict.style.display = "flex";
}
