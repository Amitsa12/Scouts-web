const express = require('express')
const app = express()
const port = 3000
const mydb = require('./models/dbadaptors')

app.use(express.static('public'))

app.get('/getTamarMember', (req, res) => { // get new tamar
    var newCamper =
    {
      name: req.query.name,
      ID: req.query.ID,
      gdud:"tamar",
      phone: req.query.phone,
      password: req.query.password,
      type: "camper"
    }
    async function mysave(details) {
      await mydb.saveCamperTamar(details).then((result) => res.redirect('indexcamper.html'));
    }
    mysave(newCamper);
  
  })

app.get('/getShakedMember', (req, res) => { // get new shaked
  var newCamper =
  {
    name: req.query.name,
    gdud: "shaked",
    ID: req.query.ID,
    phone: req.query.phone,
    password: req.query.password,
    type: "camper"
  }
  async function mysave(details) {
    await mydb.saveCamperShaked(details).then((result) => res.redirect('indexcamper.html'));
  }
  mysave(newCamper);

})
 
app.get('/getGefenMember', (req, res) => { // get new gefen
  var newCamper =
  {
    name: req.query.name,
    gdud: "gefen",
    ID: req.query.ID,
    phone: req.query.phone,
    password: req.query.password,
    type: "camper"
  }
  async function mysave(details) {
    await mydb.saveCamperGefen(details).then((result) => res.redirect('indexcamper.html'));
  }
  mysave(newCamper);

})


app.get('/getuser', (req, res) => { // get new user
  var newUser =
  {
    name: req.query.name,
    type: req.query.type,
    gdud: req.query.gdud,
    ID: req.query.ID,
    phone: req.query.phone,
    password: req.query.password,
  }
  async function mysave(details) {
    await mydb.saveUser(details).then((result) => res.redirect('indexadmin.html'));
  }
  mysave(newUser);

})

app.get("/getTamarTask", (req, res) => { //
    async function getData() {
      await mydb.getTamarTask().then((result) => res.send(result));
    }
    getData();
  });

  app.get("/getGefenTask", (req, res) => { //
    async function getData() {
      await mydb.getGefenTask().then((result) => res.send(result));
    }
    getData();
  });

  app.get("/getShakedTask", (req, res) => { //
    async function getData() {
      await mydb.getShakedTask().then((result) => res.send(result));
    }
    getData();
  });

  app.get('/NewTamarTask', (req, res) => { // save new task
    var newTask =
    {
      name: req.query.name,
      date: req.query.date
    }
    async function addTaskTamar(details) {
      await mydb.SaveTaskTamar(details).then((result) => res.redirect('indexadmin.html'));
    }
    addTaskTamar(newTask);
  
  })

  app.get('/NewShakedTask', (req, res) => { // save new task
    var newTask =
    {
      name: req.query.name,
      date: req.query.date
    }
    async function addTaskShaked(details) {
      await mydb.SaveTaskShaked(details).then((result) => res.redirect('indexadmin.html'));
    }
    addTaskShaked(newTask);
  
  })

  app.get('/NewGefenTask', (req, res) => { // save new task
    var newTask =
    {
      name: req.query.name,
      date: req.query.date
    }
    async function addTaskGefen(details) {
      await mydb.SaveTaskGefen(details).then((result) => res.redirect('indexadmin.html'));
    }
    addTaskGefen(newTask);
  
  })

  app.get("/deleteTamar", (req, res) => { //delete task tamar

    var Delete = req.query.name
  
    async function getclose(details) {
      await mydb.deleteTaskTamar(details).then((result) => res.redirect('indexadmin.html'));
    }
    getclose(Delete);
  })


app.get("/deleteShaked", (req, res) => { //delete task shaked

  var Delete = req.query.name

  async function getclose(details) {
    await mydb.deleteTaskShaked(details).then((result) => res.redirect('indexadmin.html'));
  }
  getclose(Delete);
})


app.get("/deleteGefen", (req, res) => { //delete task gefen

  var Delete = req.query.name

  async function getclose(details) {
    await mydb.deleteTaskGefen(details).then((result) => res.redirect('indexadmin.html'));
  }
  getclose(Delete);
})


app.get("/getTamarUsers", (req, res) => { // get tamar users
  async function getData() {
    await mydb.getTamarUsers().then((result) => res.send(result));
  }
  getData();
});


app.get("/deleteUsers", (req, res) => { //delete tamar users

  var Delete = req.query.ID

  async function getclose(details) {
    await mydb.deleteUsers(details).then((result) => res.redirect('indexadmin.html'));
  }
  getclose(Delete);
})


app.get("/getShakedUsers", (req, res) => { // get shaked users
  async function getData() {
    await mydb.getShakedUsers().then((result) => res.send(result));
  }
  getData();
});


app.get("/getGefenUsers", (req, res) => { // get sgefen users
  async function getData() {
    await mydb.getGefenUsers().then((result) => res.send(result));
  }
  getData();
});


app.get("/getManager", (req, res) => { // get managers users
  async function getData() {
    await mydb.getManager().then((result) => res.send(result));
  }
  getData();
});


app.get("/login",async(req,res)=>{ // Verify login by id
  var User =
   {
    ID:req.query.ID,
    password :req.query.password,
  }
  async function myUser(details){
    await mydb.loginUser(details).then((result)=>{
      console.log("result:" , result);
      if (result == null){
        res.redirect('index.html');
      }
      else {
        for (const [key, value] of Object.entries(result)) {
        if (key == "type") {
          console.log(value);
          if (value.includes("admin")) {
            res.redirect('indexadmin.html');
          }
          else {
            res.redirect('indexcamper.html');
          }
        }
        }
      }
    })};
  await myUser(User);
 console.log(User)
});

app.get('/NewManager', (req, res) => { // save new admin
  var newManager =
  {
    name: req.query.name,
    ID: req.query.ID,
    phone: req.query.phone,
    password: req.query.password,
    type: "admin"
  }
  async function addManager(details) {
    await mydb.SaveManager(details).then((result) => res.redirect('indexadmin.html'));
  }
  addManager(newManager);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/getResult', (req, res) => {
  res.send('Hello World!')
})
