const images = ['cloud0.jpeg', 'cloud1.jpeg', 'cloud2.jpeg', 'cloud3.jpeg', 'cloud4.jpeg', 'cloud5.jpeg', 'cloud6.jpeg']
const todaysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.classList.add("bgImage");
bgImage.src = `img/${todaysImage}`;
document.body.appendChild(bgImage);