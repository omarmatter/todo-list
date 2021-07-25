const btn = document.querySelector("#add");
const text = document.querySelector("#itam");
const list = document.querySelector("#list");
// const delet = document.querySelector('#delete');
btn.addEventListener ('click', function () {
  const btndelete = document.createElement("button");
  const complete = document.createElement("button");

  var txt = text.value;
  if (txt == "") {
    alert("Please Enter Items");
  } else {
   const li = document.createElement("li");
    btndelete.classList.add("btn");
    btndelete.classList.add("btn-danger");
    btndelete.innerHTML = '<i class="fa fa-trash-alt"></i>';
    complete.classList.add("btn");
    complete.classList.add("btn-primary");
    complete.innerHTML='<i class="fa fa-check"></i>';
    li.innerHTML = txt;
    li.append(btndelete);
    li.append(complete);

    list.insertBefore(li, list.childNodes[0]);
  }
  btndelete.addEventListener("click", function () {
    console.log(this.parentNode.parentNode.removeChild(this.parentNode));
  });

  complete.addEventListener("click",function(){
   this.parentNode.classList.add('complete');
   this.classList.add('hidden')
});
});