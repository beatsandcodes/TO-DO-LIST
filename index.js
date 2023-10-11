import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let newItemsToday =[];
let newItemsWork=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  let today  = new Date();
  let currentDay= today.toLocaleDateString("en-US", options); 
  res.render("list.ejs", { currentDay, todayTasks: newItemsToday})
  });
  
app.get('/work', (req, res) => {
  let options = { weekday: 'long', month: 'long', day: 'numeric' };
  let today  = new Date();
  let currentDay= today.toLocaleDateString("en-US", options); 
  res.render("work.ejs", { currentDay, workTasks: newItemsWork})
});

app.post('/work', (req, res) => {
  let newItemWork = req.body.newItemWork;
  newItemsWork.push(newItemWork);
  res.redirect('/work')
}); 
  
app.post('/', (req, res) => {
  let newItemToday = req.body.newItemToday;
  newItemsToday.push(newItemToday);
  res.redirect('/')
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  