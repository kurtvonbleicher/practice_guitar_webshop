/* loader script */

const loaderSpinner = document.getElementsByClassName("loader")[0];
const mainContainer = document.getElementsByClassName("main")[0];

const setLoaderOpacity = (opacity) => {
  loaderSpinner.style.opacity = opacity;
}

const hideLoader = () => {
  setLoaderOpacity(0);

  setTimeout(() => {
    loaderSpinner.style.display = "none"
    mainContainer.style.display = "block"
    setLoaderOpacity(1);
  }, 2000)
}

hideLoader()

let valami = 0