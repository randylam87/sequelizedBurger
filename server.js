const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const routes = require("./controllers/burgers_controller.js");
const PORT = process.env.PORT || 1337;
const app = express();
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.text({
    type: 'text/html'
}));

app.use(express.static(path.join(__dirname, '/public')));

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use("/", routes);

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});