
const galleryContainer = document.getElementById('photoGallery');
const showGalleryBtn = document.getElementById('showGallery');
const shuffleGalleryBtn = document.getElementById('shuffleGallery');
    
const images = [
  'https://media.licdn.com/dms/image/D4D12AQF6mW4EuB-99Q/article-cover_image-shrink_720_1280/0/1692951785182?e=2147483647&v=beta&t=I6_1-aBTAg0fihJHret-C4hRNuffBu8JyrqKfXsm74w',
  'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://miro.medium.com/v2/resize:fit:1400/0*7VyEZgzwUhQMeBqb',
  'https://media.licdn.com/dms/image/D4D12AQGkhVu2gh8X6g/article-cover_image-shrink_600_2000/0/1716287814954?e=2147483647&v=beta&t=ED8s7ACPwHL_6r9e_9SsHwqzrqpG_1Gkng8sPu7umPo',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8EqESTsUMXNSe9S5XGQE4MlVHCJ1zkEU59A&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ25-OifFTYpbd7gNeeX0_Mow6LOpfP6xzwQ&s',
  'https://www.forbes.com/advisor/wp-content/uploads/2022/06/codingbootcamps.jpeg.jpg',
  'https://www.discoverengineering.org/wp-content/uploads/2023/12/mj_11283_3.jpg',
  'https://www.shutterstock.com/image-photo/igniting-innovation-harnessing-power-coding-260nw-2425426569.jpg'
];
  
// Gauna nuotraukas is array su 2s pauze
const getImages = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(images);
    }, 2000);
  });
};
  
// Sukuria galerija
const createGallery = async () => {
  galleryContainer.innerHTML = ""
  const galleryImg = await getImages();

  galleryImg.forEach(imgsrc => {
    imgElement = document.createElement('img')
    imgElement.src = imgsrc;
    galleryContainer.append(imgElement);
  })
  enlargeImage()
};
  
// Shufflina naudojant Fisher-Yates Algorithm
const shuffleGallery = () => {
  let galImg = document.querySelector('#photoGallery')
  let galArray = Array.from(galImg.querySelectorAll('img'))

  for (let i = galArray.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [galArray[i], galArray[j]] = [galArray[j], galArray[i]];
  }
  galArray.forEach(img => {
    galImg.append(img);
  })
};
  
// Padidina img
const enlargeImage = () => {
  let galImg = document.querySelectorAll('#photoGallery img')
  galImg.forEach(img =>{
    img.addEventListener('dblclick', () =>{
      img.classList.toggle('enlarged')
    })
  })
};
showGalleryBtn.addEventListener('click', createGallery);
shuffleGalleryBtn.addEventListener('click', shuffleGallery);
