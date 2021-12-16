function submitData(event){
  event.preventDefault()
  let name = document.getElementById('input-name').value
  let email = document.getElementById('input-email').value
  let phone = document.getElementById('input-phone').value
  let subject = document.getElementById('input-subject').value
  let message = document.getElementById('input-message').value



  if (name == '' || email == '' || phone == '' || subject == '' || message ==''){
    alert ("form harus diisi")
  }


  let emailReceiver = 'alvinrikardo9@gmail.com'
  let a = document.createElement('a')
  a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Halo i am ${name}, ${message}`
  a.click()

}