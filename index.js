const express = require('express')
const app = express()

app.get('/', (req, res) => res.redirect('embed.html'))
app.use(express.static('wwwroot'))

app.listen(3080, () => console.log('App listening on port 3080!'))