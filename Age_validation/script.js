 function Check() {
            const inputElement = document.getElementById("txt-input");
            const showElement = document.getElementById("show-text");
            const resultBox = document.getElementById("result-box");
            
             let age = inputElement.value.trim();
            const ageNumber = Number(age);
            
             resultBox.classList.remove("success", "error", "warning");
            
             if (age === "") {
                showElement.innerHTML = "⚠️ لطفاً سن خود را وارد کنید";
                resultBox.classList.add("warning");
                inputElement.focus();
                return;
            }
            
            if (isNaN(ageNumber) || ageNumber <= 0 || ageNumber > 120) {
                showElement.innerHTML = "❌ سن معتبر وارد کنید (بین 1 تا 120 سال)";
                resultBox.classList.add("error");
                inputElement.select();
                return;
            }
            
             let message = "";
            
            if (ageNumber >= 18) {
                message = `✅ <b>خوش آمدید!</b><br>سن شما ${ageNumber} سال است و اجازه دسترسی دارید`;
                resultBox.classList.add("success");
                
                 setTimeout(() => {
                    resultBox.style.transform = "scale(1.02)";
                    setTimeout(() => {
                        resultBox.style.transform = "scale(1)";
                    }, 200);
                }, 100);
                
            } else {
                const yearsLeft = 18 - ageNumber;
                message = `❌ <b>دسترسی غیرمجاز!</b><br>سن شما ${ageNumber} سال است. ${yearsLeft} سال دیگر منتظر بمانید`;
                resultBox.classList.add("error");
            }
            
            showElement.innerHTML = message;
        }
        
        function Reset() {
            document.getElementById("txt-input").value = "18";
            document.getElementById("show-text").innerHTML = "در حال انتظار برای ورود سن...";
            
            const resultBox = document.getElementById("result-box");
            resultBox.classList.remove("success", "error", "warning");
            
            document.getElementById("txt-input").focus();
        }
        
         document.getElementById("txt-input").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                Check();
            }
        });
        
         document.getElementById("txt-input").addEventListener("input", function() {
            if (this.value.length > 3) {
                this.value = this.value.slice(0, 3);
            }
        });
        
         window.onload = function() {
            document.getElementById("txt-input").focus();
        };