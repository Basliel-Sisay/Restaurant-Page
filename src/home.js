export function homepage(){
    const head = document.createElement('h1');
    head.textContent = 'Big Burger';
    const image = document.createElement('img');
    image.src = "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg";
    image.alt= "A big tasty burger";
    image.width = 500;
    const welcome = document.createElement('p');
    welcome.innerHTML='Welcome to Big Burger <br> <br> Sink your teeth into the most flavorful and delicious burgers in town. Every bite is a taste of happiness, made fresh just for you. <br>From classic favorites to bold new creations, Big Burger is where flavor comes alive and every meal is an experience.<br> Come hungry and leave smiling!'
    const special = document.createElement('h3');
    special.textContent='What makes us special';
    const feature = document.createElement('p');
    feature.innerHTML='We use only the finest, locally sourced ingredients, from crisp vegetables to premium cuts of beef. <br> Each burger is crafted with care to ensure the perfect balance of flavor and quality.  <br>At Big Burger, freshness and taste come together in every bite.'
    const content = document.querySelector('#content');
    content.appendChild(head);
    content.appendChild(image);
    content.appendChild(welcome);
    content.appendChild(special);
    content.appendChild(feature);
}


