function ChangeBackground(photos) {
    const rand = () => Math.floor(Math.random() * photos.length);
    const i = rand();
    const { src: { landscape }, alt: name, photographer } = photos[i];
    document.body.style.backgroundImage = `url(${landscape})`;
    document.body.dataset.name = `${name} by ${photographer}`;
}

fetch('assets/data/image_data.json')
    .then(response => response.json())
    .then(data => {
        const { photos } = data;
        ChangeBackground(photos);
        setInterval(() => ChangeBackground(photos), 60000);
    })
    .catch(err => console.error("Error al cargar datos."));
