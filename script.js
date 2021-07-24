const btn = document.querySelector("#add");
const text = document.querySelector("#itam");
const list = document.querySelector("#list");
// const delet = document.querySelector('#delete');
btn.onclick = function () {
  const btndelete = document.createElement("button");

  var txt = text.value;
  if (txt == "") {
    alert("Please Enter Items");
  } else {
    li = document.createElement("li");
    btndelete.classList.add("btn");
    btndelete.classList.add("btn-danger");
    btndelete.innerHTML = '<i class="fa fa-trash-alt"></i>';

    li.innerHTML = txt;
    li.appendChild(btndelete);

    list.insertBefore(li, list.childNodes[0]);
  }
  btndelete.addEventListener("click", function () {
    console.log(this.parentNode.parentNode.removeChild(this.parentNode));
  });
};
