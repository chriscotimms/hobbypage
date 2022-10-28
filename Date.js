const date = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

document.getElementById("JS").innerHTML = date.toLocaleString('en-GB', options);