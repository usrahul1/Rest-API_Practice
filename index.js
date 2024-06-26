const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express()
const port = 8000

app.get("/users", (req, res) => {
    const html = `
    <ul> 
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html)
})

//Routes - all
app.get("/api/users", (req, res) => {
    return res.json(users)
})

app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})
.post((req, res) => console.log("still not done"))
.patch((req, res) => console.log("still not done"))
.delete((req, res) => console.log("still not done"))

app.listen(port, () => console.log(`Server running at port ${port}`))
