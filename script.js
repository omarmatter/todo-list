const btn = document.querySelector("#add");
const text = document.querySelector("#itam");
const list = document.querySelector("#list");
const time = document.querySelector("#time");

// const delet = document.querySelector('#delete');
btn.addEventListener("click", function () {
  const btndelete = document.createElement("button");
  const complete = document.createElement("button");
  const timeout = document.createElement("span");
  const timnum = document.createElement("span");
  const alert = document.createElement("span");

  var txt = text.value;
  var tim = time.value;
  if (txt == "" || tim == "") {
    alert("Please Full input");
  } else {
    const li = document.createElement("li");
    btndelete.classList.add("btn");
    btndelete.classList.add("btn-danger");
    btndelete.innerHTML = '<i class="fa fa-trash-alt"></i>';
    complete.classList.add("btn");
    complete.classList.add("btn-primary");
    complete.innerHTML = '<i class="fa fa-check"></i>';
    timeout.classList.add("time");
    timnum.innerHTML = tim;

    timeout.innerHTML = "  Time out :(" + timnum.outerHTML + "m)";

    li.innerHTML = txt + timeout.outerHTML;
    li.append(btndelete);
    li.append(complete);

    list.insertBefore(li, list.childNodes[0]);

    setTimeout(() => {
      const Class_name = li.className.split(" ")[0];
      if (Class_name == "complete") return;
      timerFaild(li);
    }, tim * 60000);

    setInterval(() => {
      change(timnum.innerText, li);
    }, 60000);
  }

  btndelete.addEventListener("click", function () {
    console.log(this.parentNode.parentNode.removeChild(this.parentNode));
  });

  complete.addEventListener("click", function () {
    console.log(this.parentNode.classList.add("complete"));
    this.classList.add("hidden");
  });

  function timerFaild(li) {
    console.log(li.classList.add("timeout"));
  }
  function change(num, li) {
    var i = --num;
    if (i == -1) {
      return;
    } else timnum.innerText = i;
    timeout.innerHTML = "  Time out :(" + timnum.outerHTML + "m)";
    li.innerHTML = txt + timeout.outerHTML;
    li.append(btndelete);
    li.append(complete);
  }
});
