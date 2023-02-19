import Homepage from "./pages/home";

const app = document.querySelector("#app");

router.on("/", () => render(Homepage, app));
router.resolve();