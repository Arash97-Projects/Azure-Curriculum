# Azure-Curriculum


![Azure](https://github.com/Arash97-Projects/Azure-Curriculum/assets/77542882/05dcdf4c-74b8-40f9-94a8-03f21b7db5f0)

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



# Deployment of Azure Function

  - Publish Azure function to Azure
        Select the same resource group as for CosmosDB
        Create new Azure storage account (can be done when publishing Azure function as well)
  - Edit Azure Function’s application settings with your secrets
        You can use Azure Key Vault to store them securely
  - Get Function URL
        Add URL into your JavaScript code for counter
  - Enable Cross-Origin Resource Sharing (CORS) for you function in Azure
    
# Deployment of Website to Azure

  - Install Azure static Web Apps extension for Visual Studio Code and create static web app
  - Create Azure Content Delivery Network (CDN) profile and endpoint for your website
  - Map your custom domain to CDN profile.
  - Enforce HTTPS traffic only
  - Redirect HTTP traffic to HTTPS
  - Get your website URL and edit CORS for allowed origins

# Building CI/CD pipeline

  - Create GitHub Actions workflows (Front End for static site deployment and Back End for unit testing)
  - Generate deployment credentials and add your workflow for static site




