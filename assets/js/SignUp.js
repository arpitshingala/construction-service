async function handleSubmit(event) {
    try {
        event.preventDefault()
        let id = document.getElementById('id').value

        const obj = {
            name: '',
            mobileNumber: '',
            email: '',
            password: ''
        }
        let isSuccess = true
        if (!obj.name) {
            isSuccess = false
            document.getElementById('errorName').innerText = 'Please enter name'
        } else {
            isSuccess = true
            document.getElementById('errorName').innerText = ''
        }
        if (!obj.mobileNumber) {
            isSuccess = false
            document.getElementById('errorMobileNumber').innerText = 'Please enter mobileNumber'
        } else {
            isSuccess = true
            document.getElementById('errorMobileNumber').innerText = ''
        }
        if (!obj.email) {
            isSuccess = false
            document.getElementById('errorEmail').innerText = 'Please enter email'
        } else {
            isSuccess = true
            document.getElementById('errorEmail').innerText = ''
        }
        if (!obj.password) {
            isSuccess = false
            document.getElementById('errorPassword').innerText = 'Please enter password'
        } else {
            isSuccess = true
            document.getElementById('errorPassword').innerText = ''
        }
        if(isSuccess){
            let response = await fetch(`https://fakestoreapi.com/users/${id}`, {
                    method: 'put',
                    body: JSON.stringify(obj),
                })
            let data = await response.json()
            if (data) {
                let users = JSON.parse(localStorage.getItem('users'))
                let idx = users.findIndex((u) => u.id == id)
                if (idx > -1) {
                    users[idx].name = obj.name
                    users[idx].email = obj.email
                    users[idx].password = obj.password
                    users[idx].phone = obj.phone
                } else {
                    alert('User Not Found')
                }
            }
        }
    }catch(error){
        console.log(error.message);
    }
}