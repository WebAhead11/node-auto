
const search = document.getElementById("searchId");
const submit = document.getElementById("submitId");
const list = document.getElementById("list");
const output = document.getElementById("output");
var clickedOnList = false;

/** create the full list before typing anything */
    fetchAll();

search.addEventListener("keydown",event=>{
 //   console.log("search: keydown event")
    /** here this keydown event listener is used to solved the problem of 
     * clicking twice on a list item before it disapears*/

    if(event.key){
        // user typed characters into textField
        clickedOnList = false;
    }
    else{
        // user chose an option from list
        clickedOnList = true;
    }
})

search.addEventListener("input",(event)=>{
  //  console.log("search: input event")
    fetchData(event.target.value)
    .then(filteredData =>{
        if(!clickedOnList) // don't show another list after user clicked on an item from list
            autocomplete(filteredData) ;
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

    fetchAll(); // after submitting results, create a list of all data again
    
  });
  function showOutput(name){
 //   console.log("showOutput")
    // according to name, bring the rest of info
    if(name=="")
        return;
    fetchData(name)
    .then(filteredData =>{
        if(filteredData[0]){
            const currentObj = filteredData[0];

            const nameElem = document.createElement("h1");
            nameElem.className="text-name"
            const capitalElem = document.createElement("h1");
            capitalElem.className = "text-capital";
            const latElem = document.createElement ("h1");
            latElem.className="text-lat"
            const longElem = document.createElement("h1");
            longElem.className="text-long"
            const abbrElem = document.createElement("h1");
            abbrElem.className="text-abbr"

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

    })
    .catch(err=>{
        alert(err);
    })
  }

  function fetchAll(){
  //    console.log("fetchAll")
    list.innerHTML = "";
    return fetch("http://localhost:3000/data")
    .then(response=>response.json())
    .then(data=>{
    autocomplete(data);
})
.catch(err=>{
    alert(err);
})
 
  }
  function fetchData(name){
  //  console.log("fetchData")
      list.innerHTML = "";
      return fetch("http://localhost:3000/data")
    .then(response=>response.json())
    .then((data)=>{
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
 //   console.log("autocomplete")
    const names = data.map(obj=>obj.name);
    names.forEach(name=>{
        const option = document.createElement("option");
        option.value = name;
        list.appendChild(option);
    })
  }