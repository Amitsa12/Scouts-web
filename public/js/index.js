function fetchPage(whatPage) {
    fetch(whatPage)
        .then(response => response.text())
        .then(data => document.getElementById("mainContent").innerHTML = data);
}



  function showtamarcamper() { //create table for gdud tamar tasks
    fetch("/getTamarTask")
      .then((response) => response.text())
      .then((data) => {
        var TaskTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th></th>
              <th >name</th>
              <th>date</th>
                   </tr>
      </table>`;
        TaskTypes.forEach((element) => {
          myTables += `
                       
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="date" value="${element.date}">${element.date}</td>
                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("tamar").innerHTML = myTables;
      });
  }



  function showshakedcamper() { //create table for gdud shaked tasks
    fetch("/getShakedTask")
      .then((response) => response.text())
      .then((data) => {
        var TaskTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th></th>
              <th >name</th>
              <th>date</th>
                   </tr>
      </table>`;
        TaskTypes.forEach((element) => {
          myTables += `
                       
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="date" value="${element.date}">${element.date}</td>
                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("shaked").innerHTML = myTables;
      });
  }

  function showgefencamper() { //create table for gdud gefen tasks
    fetch("/getGefenTask")
      .then((response) => response.text())
      .then((data) => {
        var TaskTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th></th>
              <th >name</th>
              <th>date</th>
                   </tr>
      </table>`;
        TaskTypes.forEach((element) => {
          myTables += `
                       
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                          <td><input type="hidden" name="date" value="${element.date}">${element.date}</td>
                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("gefen").innerHTML = myTables;
      });
  }

