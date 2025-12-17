document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const course = document.getElementById("course").value
    const terms = document.getElementById("terms").checked
    const genderInput = document.querySelector('input[name="gender"]:checked')

    const error = document.getElementById("error")
    const result = document.getElementById("result")

    error.innerText = ""
    result.innerHTML = ""

    if (name === "") {
        error.innerText = "Name should not be empty"
        return
    }

    if (email === "") {
        error.innerText = "Email should be valid"
        return
    }

    if (!genderInput) {
        error.innerText = "Gender must be selected"
        return
    }

    if (course === "") {
        error.innerText = "Course must be selected"
        return
    }

    if (!terms) {
        error.innerText = "Terms checkbox must be checked"
        return
    }

    result.innerHTML = `
        <div class="success">Registration Successful!</div>
        <div class="output">Name: ${name}</div>
        <div class="output">Email: ${email}</div>
        <div class="output">Gender: ${genderInput.value}</div>
        <div class="output">Course: ${course}</div>
    `
})
