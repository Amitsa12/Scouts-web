function fetchPage(whatPage) {
    fetch(whatPage)
        .then(response => response.text())
        .then(data => document.getElementById("mainContent").innerHTML = data);
}

function showtamar() { //create table for gdud tamar task
    fetch("/getTamarTask")
      .then((response) => response.text())
      .then((data) => {
        var TaskTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th></th>
              <th>name</th>
              <th>date</th>
              <th>Status</th>
              </tr>
      </table>`;
        TaskTypes.forEach((element) => {
          myTables += `
          <form action="/deleteTamar">
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="date" value="${element.date}">${element.date}</td>
                          <td><button onclick="deleteTaskTamar()">mark as completed</button></td>
                      </tr>
                      </form>
                      </table>
                      
                  `;
        });
        document.getElementById("tamar").innerHTML = myTables;

      });
  }
  function openFormTamar() {
    document.getElementById("myFormTamar").style.display = "block";
  }
  function closeFormTamar() {
    document.getElementById("myFormTamar").style.display = "none";
  }

  function showshaked() { //create table for gdud shaked task
    fetch("/getShakedTask")
      .then((response) => response.text())
      .then((data) => {
        var TaskTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th></th>
              <th>name</th>
              <th>date</th>
              <th>Status</th>
              </tr>
      </table>`;
        TaskTypes.forEach((element) => {
          myTables += `
          <form action="/deleteShaked">
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="date" value="${element.date}">${element.date}</td>
                          <td><button onclick="deleteTaskShaked()">mark as completed</button></td>
                      </tr>
                      </form>
                      </table>
                      
                  `;
        });
        document.getElementById("shaked").innerHTML = myTables;

      });
  }
  function openFormShaked() {
    document.getElementById("myFormShaked").style.display = "block";
  }
  function closeFormShaked() {
    document.getElementById("myFormShaked").style.display = "none";
  }

function showgefen() { //create table for gdud gefen task
  fetch("/getGefenTask")
    .then((response) => response.text())
    .then((data) => {
      var TaskTypes = JSON.parse(data);
      var myTables = `<table class="styled-table" >
            <tr>
              <th></th>
              <th>name</th>
              <th>date</th>
              <th>Status</th>
              </tr>
    </table>`;
      TaskTypes.forEach((element) => {
        myTables += `
        <form action="/deleteGefen">
                <table class="styled-table" >
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td><input type="hidden" name="date" value="${element.date}">${element.date}</td>
                        <td><button onclick="deleteTaskGefen()">mark as completed</button></td>
                    </tr>
                    </form>
                    </table>
                    
                `;
      });
      document.getElementById("gefen").innerHTML = myTables;

    });
}
function openFormGefen() {
  document.getElementById("myFormGefen").style.display = "block";
}
function closeFormGefen() {
  document.getElementById("myFormGefen").style.display = "none";
}

function showTamarusers() { //create table tamar
  fetch("/getTamarUsers")
    .then((response) => response.text())
    .then((data) => {
      var TaskTypes = JSON.parse(data);
      var myTables = `<table class="styled-table" >
            <tr>
            <th></th>
            <th>name</th>
            <th>ID</th>
            <th>gdud</th>
            <th>Delete</th>
            </tr>
    </table>`;
      TaskTypes.forEach((element) => {
        myTables += `
        <form action="/deleteUsers">
                <table class="styled-table" >
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td><input type="hidden" name="ID" value="${element.ID}">${element.ID}</td>
                        <td><input type="hidden" name="gdud" value="${element.gdud}">${element.gdud}</td>
                        <td><button onclick="deleteUsers()">Delets this user</button></td> 
                    </form>
                    </table>
                    
                `;
      });
      document.getElementById("users").innerHTML = myTables;

    });
}

////////////////////////////////////////////////

function showShakedusers() { //create table shaked
  fetch("/getShakedUsers")
    .then((response) => response.text())
    .then((data) => {
      var TaskTypes = JSON.parse(data);
      var myTables = `<table class="styled-table" >
            <tr>
            <th></th>
            <th>name</th>
            <th>ID</th>
            <th>gdud</th>
            <th>Delete</th>
            </tr>
    </table>`;
      TaskTypes.forEach((element) => {
        myTables += `
        <form action="/deleteUsers">
                <table class="styled-table" >
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td><input type="hidden" name="ID" value="${element.ID}">${element.ID}</td>
                        <td><input type="hidden" name="gdud" value="${element.gdud}">${element.gdud}</td>
                        <td><button onclick="deleteUsers()">Delets this user</button></td> 
                    </tr>
                    </form>
                    </table>
                    
                `;
      });
      document.getElementById("users").innerHTML = myTables;

    });
}

//////////////////////////////

function showGefenusers() { //create table gefen
  fetch("/getGefenUsers")
    .then((response) => response.text())
    .then((data) => {
      var TaskTypes = JSON.parse(data);
      var myTables = `<table class="styled-table" >
            <tr>
            <th></th>
            <th>name</th>
            <th>ID</th>
            <th>gdud</th>
            <th>Delete</th>
            </tr>
    </table>`;
      TaskTypes.forEach((element) => {
        myTables += `
        <form action="/deleteUsers">
                <table class="styled-table" >
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td><input type="hidden" name="ID" value="${element.ID}">${element.ID}</td>
                        <td><input type="hidden" name="gdud" value="${element.gdud}">${element.gdud}</td>
                        <td><button onclick="deleteUsers()">Delets this user</button></td> 
                    </tr>
                    </form>
                    </table>
                    
                `;
      });
      document.getElementById("users").innerHTML = myTables;

    });
}

function showmanager() { //create table gefen
  fetch("/getManager")
    .then((response) => response.text())
    .then((data) => {
      var TaskTypes = JSON.parse(data);
      var myTables = `<table class="styled-table" >
            <tr>
            <th></th>
            <th>name</th>
            <th>ID</th>
            <th>Delete</th>
            </tr>
    </table>`;
      TaskTypes.forEach((element) => {
        myTables += `
        <form action="/deleteUsers">
                <table class="styled-table" >
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td><input type="hidden" name="ID" value="${element.ID}">${element.ID}</td>
                        <td><button onclick="deleteUsers()">Delets this admin</button></td> 
                    </tr>
                    </form>
                    </table>
                    
                `;
      });
      document.getElementById("users").innerHTML = myTables;

    });
}
