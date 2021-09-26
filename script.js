const baseUrl = "http://192.168.0.38";
const state = document.getElementById("state");
const on = document.getElementById("on");
const off = document.getElementById("off");

const fetchOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

on.addEventListener("click", () => {
  turnOn();
});

off.addEventListener("click", () => {
  turnOff();
});

window.onload = () => {
  getState();
};

async function turnOn() {
  let response = await fetch(baseUrl + "/on");
  let data = await response.json();
  console.log(data);
  getState();
  return data;
}

async function turnOff() {
  let response = await fetch(baseUrl + "/off");
  let data = await response.json();
  console.log(data);
  getState();
  return data;
}

async function getState() {
  await fetch(baseUrl + "/state", fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.state === 0) {
        state.innerHTML = "aus";
      } else {
        state.innerHTML = "an";
      }
    });
}
