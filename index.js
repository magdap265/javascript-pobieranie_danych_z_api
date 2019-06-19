fetch("http://lrodak:3001/api/users")
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        var userTable = document.getElementById("usersTable");
        var row = userTable.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        cell0.innerHTML = "Nazwa";
        cell1.innerHTML = "Grupa";
        for (var i = 0; i < data.length; i++) {
            var rowData = userTable.insertRow();
            var cell0 = rowData.insertCell(0);
            var cell1 = rowData.insertCell(1);
            cell0.innerHTML = data[i].name;
            cell1.innerHTML = data[i].group.name;
        }
    });