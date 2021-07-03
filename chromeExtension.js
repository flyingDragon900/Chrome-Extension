let myLeads = []
let tabs = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
};
// TAB BUTTON
tabBtn.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href='${leads[i]}' target='_blank'> 
            ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
};

// INPUT BUTTON
inputBtn.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
});
// DELETE BUTTON
deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    myLeads = ""
    render(myLeads)
});

/*
 ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
       const li = document.createElement("li")
       li.textContent = myLeads[i]
       ulEl.append(li)
    myLeads = JSON.parse(myLeads)
console.log(myLeads);

myLeads.push("www.secondlead.com")
console.log(myLeads);

myLeads = JSON.stringify(myLeads)
console.log(myLeads);
localStorage.setItem("myLeads","www.examplelead.com")
console.log(localStorage.getItem("myLeads"));
*/
