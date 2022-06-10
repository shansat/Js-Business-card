let data = [
    {
        name: "Rajesh",
        age: 35,
    },
    {
        name: "Sachin",
        age: 42,
    },{
        name: "Srinivas",
        age: 27,
    },{
        name: "John",
        age: 61,
    },{
        name: "Jitesh",
        age: 29,
    },{
        name: "Abdul",
        age: 34,
    },{
        name: "San Chi",
        age: 52,
    },{
        name: "Pathirana",
        age: 23,
    },

]

let info = document.querySelector('#info')

let details = data.map((Item) => {
    return ('<div>' + Item.name + ' ' + 'is ' + Item.age + ' years old.' + '</div>')
})

info.innerHTML = details.join('\n');