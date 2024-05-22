
const ramenAPI = 'http://localhost:3000/ramens'
const ramenMenu = document.getElementById('ramen-menu')
const newRamenForm = document.getElementById('new-ramen')
  fetch(ramenAPI)
    .then(res => res.json())
    .then(renderRamens);
  
  function renderRamens(ramens) {
    ramens.forEach(renderRamen);
  }


  function renderRamen(ramen) {
    const ramenImage = document.createElement('img')
    ramenImage.src = ramen.image;
    ramenMenu.append(ramenImage)
    
    ramenImage.addEventListener('click', () => ramenClick(ramen))
  }
  
  function ramenClick(ramen) {
    document.getElementById('detail-image').src = ramen.image;
    document.getElementById('detail-name').textContent = ramen.name;
    document.getElementById('detial-restaurant').textContent = ramen.restaurant;
    document.getElementById('rating-display').textContent = ramen.rating;
    document.getElementById('comment-display').textContent = ramen.comment;
  }

  document.getElementById('new-ramen').addEventListener('submit', newRamenClick)

  function newRamenClick(e) {
    e.preventDefault();
    const newRamen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
    }
    renderRamen(newRamen)
    e.target.reset()
  }