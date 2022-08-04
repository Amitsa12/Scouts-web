const { request } = require('express');
var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);


///// Save new camper

async function saveCamperTamar(details){ // save new camper to mongo- gdud tamar
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("tribe").collection("users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveCamperTamar = saveCamperTamar;

  async function saveCamperShaked(details){ // save new camper to mongo- gdud shaked
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("tribe").collection("users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveCamperShaked = saveCamperShaked;

  async function saveCamperGefen(details){ // save new camper to mongo- gdud gefen
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("tribe").collection("users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveCamperGefen = saveCamperGefen;


  async function saveUser(details){ // save new general user to mongo
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("tribe").collection("users");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.saveUser = saveUser;


  ///// get new camper

  async function getTamarTask(){  //pull from the mongo the tasks in gdud tamar
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("tribe");
    let collection = db.collection("tamar");
    let res = await collection.find({}).toArray();
    client.close();
    return res;
  }
  exports.getTamarTask = getTamarTask;

  async function getShakedTask(){  //pull from the mongo the tasks in gdud shaked
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("tribe");
    let collection = db.collection("shaked");
    let res = await collection.find({}).toArray();
    client.close();
    return res;
  }
  exports.getShakedTask=getShakedTask;

  async function getGefenTask(){  //pull from the mongo the tasks in gdud gefen
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("tribe");
    let collection = db.collection("gefen");
    let res = await collection.find({}).toArray();
    client.close();
    return res;
  }
  exports.getGefenTask=getGefenTask;


///// Save new task

  async function SaveTaskTamar(details){ // save new task to mongo- gdud tamar
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("tribe").collection("tamar");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveTaskTamar = SaveTaskTamar;

  async function SaveTaskShaked(details){ // save new task to mongo- gdud shaked
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("tribe").collection("shaked");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveTaskShaked = SaveTaskShaked;

  async function SaveTaskGefen(details){ // save new task to mongo- gdud gefen
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var col = client.db("tribe").collection("gefen");
    var result = await col.insertOne(details);
    client.close();
    return result;
  }
  exports.SaveTaskGefen = SaveTaskGefen;


  ///// Delete task
  async function deleteTaskTamar(details){ // get a  task required to delete from mongo- gdud tamar and return it 
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var dbo = client.db("tribe");
    var myquery = { name: details };
    let collection= dbo.collection('tamar');
    let res=await collection.deleteOne(myquery);
    client.close();
    return res;
  };
  exports.deleteTaskTamar = deleteTaskTamar;

  async function deleteTaskShaked(details){ //  get a  task required to delete from mongo- gdud shaked and return it 
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var dbo = client.db("tribe");
    var myquery = { name: details };
    let collection= dbo.collection('shaked');
    let res=await collection.deleteOne(myquery);
    client.close();
    return res;
  };
  exports.deleteTaskShaked = deleteTaskShaked;

  async function deleteTaskGefen(details){ //  get a  task required to delete from mongo- gdud gefen and return it 
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var dbo = client.db("tribe");
    var myquery = { name: details };
    let collection= dbo.collection('gefen');
    let res=await collection.deleteOne(myquery);
    client.close();
    return res;
  };
  exports.deleteTaskGefen = deleteTaskGefen;

  async function getTamarUsers(){  // get tamar users
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("tribe");
    let collection = db.collection("users");
    var query= {gdud:"tamar"};
    let res = await collection.find(query).toArray();
    client.close();
    return res;
  };
  exports.getTamarUsers = getTamarUsers;

  async function deleteUsers(details){  //delete tamar users 
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    var dbo = client.db("tribe");
    var myquery = { ID: details };
    let collection= dbo.collection('users');
    let res=await collection.deleteOne(myquery);
    client.close();
    return res;
  };
  exports.deleteUsers = deleteUsers;


async function getShakedUsers(){  // get shaked users
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("tribe");
  let collection = db.collection("users");
  var query= {gdud:"shaked"};
  let res = await collection.find(query).toArray();
  client.close();
  return res;
};
exports.getShakedUsers = getShakedUsers;


async function getGefenUsers(){  // get gefen users
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("tribe");
  let collection = db.collection("users");
  var query= {gdud:"gefen"};
  let res = await collection.find(query).toArray();
  client.close();
  return res;
};
exports.getGefenUsers = getGefenUsers;

async function getManager(){  // get manager users
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("tribe");
  let collection = db.collection("users");
  var query= {type:"admin"}
  let res = await collection.find(query).toArray();
  client.close();
  return res;
};
exports.getManager = getManager;

async function SaveManager(details){  // save new manager to mongo
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("tribe").collection("users");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.SaveManager = SaveManager;


async function loginUser(details){ // Verify login by the unique ID
  var client = new MongoClient(uri, {useUnifiedTopology: true});
  await client.connect();
  var query = { ID: String(details.ID), password: String (details.password) };
  var col = client.db("tribe").collection("users");
  var result = await col.findOne(query);
  client.close();
  console.log(result)
  return result;
}
exports.loginUser=loginUser;
