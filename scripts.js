let div = document.getElementById("fetchArea");
let div2 = document.getElementById("JSONstring");

let url = 'https://jsonplaceholder.typicode.com/users/'
let number = (Math.floor(Math.random() * 10) + 1);
let fullURL = url + number;
let status;

//Fetch makes a http request 

fetch(fullURL).then( (response) => { //the URL is passed into fetch statement, which returns a promise. Since it is a promise based object you get back in response you can then chain on .then and .catch so you can do more. 
    if (response.status == 200){
        return response.json(); //This will turn the file retrieved into a JSON format if there is no error. This JSON data is then passed to the next .then to use.
    }else {
        throw new Error("Status is not valid."); //This creates a new error that is provided to the .catch, and if there is an error in any of the then or fetch method it will go to .catch
    }
}).then( (data) => {
    console.log(data); //The 'data' can then be used in any way you like as it is in the JSON format.
    let jsonDATA = JSON.stringify(data); //This just creates a string of the JSON data.
    div.innerText = `The user's name is ${data.name} but their online username is ${data.username}. \nTo contact this user please do so by email (${data.email}) or telephone (${data.phone}).`;
    console.log(jsonDATA);
    div2.innerText = jsonDATA;
}).catch((error) => {
    console.log(`Error: ${error}`);
});

