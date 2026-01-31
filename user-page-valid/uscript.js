let user = document.querySelector("#name");
let pass = document.querySelector("#pass");
let passconfig = document.querySelector("#pssconfig");
let message = document.querySelector(".msg");
let myform = document.querySelector(".section");

myform.addEventListener("submit", (e) => {
    e.preventDefault();

     if (user.value === "" || pass.value === "" || passconfig.value === "") {
        message.innerHTML = "⚠️ لطفا همه فیلدها را پر کنید";
        myform.classList.add("msg-error");
        return;
    }

     if (pass.value !== passconfig.value) {
        message.innerHTML = "❌ رمزها با هم مطابقت ندارند";
        myform.classList.add("msg-error");
        return;
    }

     message.innerHTML = "✅ ورود با موفقیت انجام شد";
    myform.classList.add("msg-success");

    setTimeout(() => {
        myform.classList.remove("msg-success");
        myform.classList.remove("msg-error");
        message.innerHTML = "";
        myform.reset();
    }, 3000);
});
