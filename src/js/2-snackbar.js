import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
  position: "topRight",
  timeout: 3000,
  resetOnHover: true,
  transitionIn: "flipInX",
  transitionOut: "flipOutX"
});

// let isShown = false;
const form = document.querySelector(".form");

form.addEventListener("submit", promiseGenerator);

function promiseGenerator(e) {
  e.preventDefault();
  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      }
      else{
      reject(delay);}
    }, delay);
    form.reset();
  })
    .then(value => iziToast.success({message: `✅ Fulfilled promise in ${delay}ms`}))
    .catch(error => iziToast.error({message: `❌ Rejected promise in ${delay}ms`}));
}