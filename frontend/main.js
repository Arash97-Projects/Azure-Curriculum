
const functionApiUrl = "https://azureresumearash.azurewebsites.net/api/GetResumeCounter?code=b0affvgJMg7eXYo38vqJCTsUUMoIdoyF_y10P6EjVJzXAzFu1q4NPg=="
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';


window.addEventListener('DOMContentLoaded', (event)=> {
    getVisitCount();
})



const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });

    return count;
    
}