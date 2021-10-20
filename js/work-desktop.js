const gallery = document.getElementById('gallery');
// const image = document.createElement('img');
// image.src = 'img/art/1.jpg';
// gallery.appendChild(image);

const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [1,2,3,4,5,6,7,8,9];
// const selectedImage = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `img/art/${i}.jpg`;
  image.alt = `Image number ${i} from gallery.`;
  image.classList.add('galleryImg');

  image.addEventListener('click', () =>{
    popup.style.position = 'fixed';
    popup.style.transform = `translateY(0)`
    selectedImage.src = `img/art/${i}.jpg`;
  });

  gallery.appendChild(image);
});

popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = '';
  popup.alt = '';
})
