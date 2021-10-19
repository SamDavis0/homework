const express = require('express');
const app = express()
const port = 3000

// QUESTIONS 1 - 4
// app.get('/', (req, res) => {
//     res.send('Hello world')
// })
app.get('/cats', (req, res) => {
    res.send('<h1>MEOW</h1>')
})
app.get('/dogs', (req, res) => {
    res.send('<h1>WOOF</h1>')
})
app.get('/cats_and_dogs', (req, res) => {
    res.send('<h1>LIVIN\' TOGETHER</h1>')
})

app.get('/greet/:name', (req, res) => {
    let name = req.params.name
    res.send(`"Hello, ${name}!"`)
})

app.get('/year/:age', (req, res) => {
    let age = req.params.age
    let result = 2021 - age
    res.send(`You were born in ${result}`)
})

// WEBSITE QUESTION 5
let albums = [{
    id: 0,  
    name:"Immortal",
    publishDate:"2020",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/0/06/Lorna_Shore_-_Immortal.png",
    songTitles:["Immortal", "Death Portrait", "This is hell", "Hollow Sentence", "Warpath Of Disease", "Misery System", "Obsession", "King Ov Deception", "Darkest Spawn", "Relentless Torment"]
},
{   
    id: 1,
    name:"Flesh Coffin",
    publishDate:"2017",
    imgURL:"https://img.discogs.com/7agC1zFuIHfITfrDBs_uarGrlIE=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9832411-1487028647-6696.jpeg.jpg",
    songTitles:["Offering Of Fire", "Denounce The Light", "The Astral Wake Of Time", "Desolate Veil", "FVNERAL MOON", "Void", "Infernum", "The/Watcher", "Black Hollow", "Flesh Coffin"]
},
{   
    id: 2,
    name:"Psalms",
    publishDate:"2015",
    imgURL:"https://www.angrymetalguy.com/wp-content/uploads/2015/06/Lorna-Shore-02-300x300.jpg",
    songTitles:["Grimoire", "Harvest Of Realms", "Throne Of Worms", "White Noise", "From The Pale Mist", "Infernal Haunting", "Death Gowns", "Wretching In Torment", "Traces Of Supremacy", "Eternally Oblivion"]
}
]
let nav = `
<ul>
    <li><a href="/albums/0">Immortal</a></li>
    <li><a href="/albums/1">Flesh Coffin</a></li>
    <li><a href="/albums/2">Psalms</a></li>
</ul>
`

app.get('/', (req, res) => {
    res.send(`
    <h1><b>Lorna Shore</b></h1>
    <a href="/albums">Albums</a>
    <hr>
    <p>Lorna Shore is an American deathcore band from Warren County, New Jersey. Formed in 2010, the group currently consists of lead guitarist Adam De Micco, drummer Austin Archey, rhythm guitarist Andrew O'Connor, and vocalist Will Ramos</p>
    <img src="https://i.ytimg.com/vi/rkb6wST5HC8/maxresdefault.jpg">
    `)
    
})
app.get('/albums', (req, res) => {
    res.send(`<h1><b>ALBUMS</b></h1> <p><a href="/">Home</a></p>
        ${nav}
        <img src="https://i2.wp.com/rockallphotography.com/wp-content/uploads/2021/07/lorna.jpg?fit=1200%2C508&ssl=1">
    `)
})
app.get('/albums/:id', (req, res) => {
    let id = req.params.id
    res.send(`<h1><b>ALBUMS</b></h1> <p><a href="/">Home</a></p>
        ${nav}
        <h1>${albums[id].name}</h1>
        <p>${albums[id].publishDate}</p>
        <img src="${albums[id].imgURL}">
        <h2>Songs</h2>
        <ul>${albums[id].songTitles}</ul>
    `)
})




app.listen(3000, () => {
    console.log(`listening on port ${port}`);
})