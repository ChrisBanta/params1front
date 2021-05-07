console.log("Works")

document.addEventListener('DOMContentLoaded', () => {
    console.log('%cDom Content Loaded and Parsed!', 'color:magenta')

    function getExistingUserData() {
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(console.log)
    }

    getExistingUserData()

    const NEWUSERFORM = document.getElementById('add-new-user')

    NEWUSERFORM.addEventListener('submit', event => {
        event.preventDefault()
        console.log(NEWUSERFORM)

    })
    })

    