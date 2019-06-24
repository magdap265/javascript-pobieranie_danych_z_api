// fetch("http://lrodak:3001/api/users")
//     .then((resp) => resp.json()) // Transform the data into json
//     .then(function(data){ 
         let data=[
             {name:"imie",group:{name:"administratorzy"}},
             {name:"imie1", group:{name:"administratorzy"}}];
        let userTable = document.getElementById("usersTable");
        let row = userTable.insertRow();
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        cell0.innerHTML = "Nazwa";
        cell1.innerHTML = "Grupa";
        for (const user of data) {
            let rowData = userTable.insertRow();
            let cell0 = rowData.insertCell(0);
            let cell1 = rowData.insertCell(1);
            cell0.innerHTML = user.name;
            cell1.innerHTML = user.group.name;
        }
        //for (let i = 0; i < data.length; i++) {        
        //     let rowData = userTable.insertRow();
        //     let cell0 = rowData.insertCell(0);
        //     let cell1 = rowData.insertCell(1);
        //     cell0.innerHTML = data[i].name;
        //     cell1.innerHTML = data[i].group.name;
        // }
    // });