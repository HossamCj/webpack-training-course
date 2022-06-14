const getUsersModule= () =>
    import(/* webpackChunkName: "usersApi" */"./common/usersAPI")

const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    getUsersModule().then(({ getUsers }) => {
        getUsers().then((json) => console.log(json))
    })
})
