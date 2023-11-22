var elForm = document.querySelector(".form")
var elNumber = document.querySelector(".number")
var elName = document.querySelector(".name")
var elSurname = document.querySelector(".surname")
var  elError = document.querySelector(".error")



var elPlastnumber = document.querySelector(".plastnumber")
var elKiriting = document.querySelector(".kiriting")


elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    var surname = elSurname.value.trim()
    var neme = elName.value.trim()
    var number =elNumber.value.trim()
    
    if(isNaN(number || number <= 0)){
        elError.textContent = "Raqam qabul qilamiz!"
        return
    }


    elPlastnumber.textContent = number;
    elKiriting.textContent = neme + "" + "." + surname;
})