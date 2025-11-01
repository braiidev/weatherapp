import { images } from "./listBg.js";

const Temporizer = (e) => {
    const timeout = setTimeout(() => {
        e();
        clearTimeout(timeout);
    }, 1000)
}

function getHighResImage(url) {
    if (typeof url !== "string") return null;
    return url.replace(/_\d+\.(jpg|png|jpeg|webp)$/, "_1280.$1");
    //   return url.replace("_150.jpg", "_1280.jpg");
}

class changeBackground {
    constructor(element, time = 1) {
        this.element = element;
        this.$tapeA = this.element.querySelector('#tapeA');
        this.$tapeB = this.element.querySelector('#tapeB');
        this.switching = 'init'
        this.time = time;
        this.running = false;
        this.maxIndex = 195;
        this.minIndex = 0;
        this.index = () => (Math.floor(Math.random() * (this.maxIndex - this.minIndex + 1)) + this.minIndex);
    }
    getImage(index) {
        const { id, imageURL, views, likes } = images[index]
        return getHighResImage(imageURL);
    }
    setImage(index) {
        if (!this.running) return
        if (this.switching === 'init') {
            this.switching = 'A'
            const tapeA = this.getImage(index)
            const tapeB = this.getImage(index + 1 > this.maxIndex ? this.minIndex : index + 1)
            this.$tapeA.style.backgroundImage = `url(${tapeA})`
            this.$tapeA.style.opacity = 1
            this.$tapeB.style.backgroundImage = `url(${tapeB})`
            this.$tapeB.style.opacity = 0
            return
        }
        if (this.switching === 'A') {
            this.switching = 'B'
            this.$tapeA.style.opacity = 0
            this.$tapeB.style.opacity = 1
            Temporizer(() => {
                const tapeA = this.getImage(index)
                this.$tapeA.style.backgroundImage = `url(${tapeA})`
            })
            return
        }
        if (this.switching === 'B') {
            this.switching = 'A'
            this.$tapeA.style.opacity = 1
            this.$tapeB.style.opacity = 0
            Temporizer(() => {
                const tapeB = this.getImage(index)
                this.$tapeB.style.backgroundImage = `url(${tapeB})`;
            })
            return
        }

    }
    start() {
        this.running = true
        this.setImage(this.index())
        this.update()
    }
    update() {
        this._interval = setInterval(() => {
            this.running = true
            this.setImage(this.index())
        }, this.time * 1000 * 60);
    }
    stop() {
        this.running = false;
        clearInterval(this._interval);
    }
}

export default changeBackground;