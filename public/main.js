const search = document.getElementById("searchId");
const submit = document.getElementById("submitId");
const list = document.getElementById("list");
const output = document.getElementById("output");

search.addEventListener("input",(event)=>{
    fetchData(event.target.value)
    .then(filteredData =>{
        autocomplete(filteredData) 
    })
        .catch(err=>{
            alert(err);
        });
});

submit.addEventListener("click", function(e) {
    output.innerHTML = "";
    e.preventDefault();
    const name = search.value;
    showOutput(name);
    search.value = "";
  });
  function showOutput(name){
    // according to name, bring the rest of info
    fetchData(name)
    .then(filteredData =>{
        if(filteredData[0]){
            const currentObj = filteredData[0];

            const nameElem = document.createElement("h2");
            const capitalElem = document.createElement("h2");
            const latElem = document.createElement("h2");
            const longElem = document.createElement("h2");
            const abbrElem = document.createElement("h2");

            nameElem.innerHTML = name;
            abbrElem.innerHTML = currentObj.abbr;
            capitalElem.innerHTML = currentObj.capital;
            latElem.innerHTML = currentObj.lat;
            longElem.innerHTML = currentObj.long;
            
            output.appendChild(abbrElem);
            output.appendChild(nameElem);
            output.appendChild(capitalElem);
            output.appendChild(latElem);
            output.appendChild(longElem);
        }
        

        

        // const nameElem = document.createElement("h2");
        // nameElem.innerHTML = name;

        // const nameElem = document.createElement("h2");
        // nameElem.innerHTML = name;

        // const nameElem = document.createElement("h2");
        // nameElem.innerHTML = name;

        // output.appendChild(nameElem);
        
    })
    .catch(err=>{
        alert(err);
    })
  }

  function fetchData(name){
      list.innerHTML = "";
      return fetch("http://localhost:3000/data")
    .then(response=>response.json())
    .then((data)=>{
        // Change here
        const filteredData = filterData(data,name);
        return filteredData;
    })
    .catch((err)=>{
        alert(err);
    }) 

  }

  function filterData(data,name){
      const filteredDataObjs = data.filter(obj => obj.name.toLowerCase().startsWith(name.toLowerCase()));
      return filteredDataObjs;
  }
  function autocomplete(data){
    const names = data.map(obj=>obj.name);
    names.forEach(name=>{
        const option = document.createElement("option");
        option.innerHTML = name;
        list.appendChild(option);
    })
  }