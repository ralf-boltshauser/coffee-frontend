const baseUrl = "192.168.0.38";
const status = document.getElementById("status");
const on = document.getElementById("on");
const off = document.getElementById("off");
on.addEventListener("click", () => {
  turnOn();
});

off.addEventListener("click", () => {
  turnOff();
});

window.onload = () => {
  getStatus().then((data) => {
    status.innerHTML = data.status;
  });
};

function turnOn() {
  let response = await fetch(baseUrl + "/on");
  let data = await response.json();
  return data;
}

function turnOff() {
  let response = await fetch(baseUrl + "/off");
  let data = await response.json();
  return data;
}

function getStatus() {
  let response = await fetch(baseUrl + "/status");
  let data = await response.json();
  return data;
}
