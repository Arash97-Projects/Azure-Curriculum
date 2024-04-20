# Azure-Curriculum

My personal project: resume hosted on Azure

# First steps

- Frontend folder contains the website.
- main.js contains the visitor counter code.

```js
const functionApi = "Your API Here";

window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const getVisitCount = () => {
  let count = 0;
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });

  return count;
};
```


# C#
```

namespace Company.Function
{
    public static class GetResumeCounter
    {
        [FunctionName("GetResumeCounter")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName:"Azureresume", containerName:"counter", Connection = "AzureResumeConnectionString", Id = "1", PartitionKey = "1")] Counter counter,
            [CosmosDB(databaseName:"Azureresume", containerName:"counter", Connection = "AzureResumeConnectionString", Id = "1", PartitionKey = "1")] out Counter updatedCounter,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            updatedCounter = counter;
            updatedCounter.Count += 1;

            var jsonToRetun = JsonConvert.SerializeObject(counter);

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK){

                Content = new StringContent(jsonToRetun, Encoding.UTF8, "application/json")
            };
        }
    }
}


```


```
using Newtonsoft.Json;

namespace Company.Function
{

    public class Counter 
    {
        [JsonProperty(PropertyName ="id")]
        public string Id {get; set;}
        [JsonProperty(propertyName: "count")]
        public int Count { get;set;}

    }
}
```


