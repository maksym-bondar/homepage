const LOADER_SRC = "./assets/images/loader.gif";

const timeout = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const showContent = () => {
  const page = document.querySelector(".page");
  const loader = document.querySelector(".loader-wrapper");

  page.classList.add("show");
  loader.classList.add("hide");
};

document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector(".loader").setAttribute("src", LOADER_SRC);
  await timeout(6000);
  showContent();
});
