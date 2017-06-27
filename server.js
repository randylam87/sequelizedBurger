const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const routes = require("./controllers/burgers_controller.js");
const PORT = process.env.PORT || 1337;
const app = express();
const sequelize = require('sequelize');

app.use(express.static(path.join(__dirname, '/public')));

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(bodyParser.text({
    type: 'text/html'
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
}); 