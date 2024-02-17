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
