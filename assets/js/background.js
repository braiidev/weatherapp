import { request } from "./fetchTool.js";

function ChangeBackground(photos) {
  const rand = () => Math.floor(Math.random() * photos.length);
  const i = rand();
  const {
    src: { landscape },
    alt: name,
    photographer,
  } = photos[i];
  document.body.style.backgroundImage = `url(${landscape})`;
  document.body.dataset.name = `${name} by ${photographer}`;
}

const url = "assets/data/image_data.json";
request({ url }, (data) => {
  const { photos } = data;
  ChangeBackground(photos);
  setInterval(() => ChangeBackground(photos), 60000);
});
