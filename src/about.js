export function About(){
    const content = document.querySelector('#content');
    content.innerHTML='';
    const title = document.createElement('h3');
    title.innerHTML='About Big Burger';
    const desc = document.createElement('p');
    desc.innerHTML='At Big Burger, we believe every bite should be unforgettable. Born from a passion for flavor and freshness, we\'ve been serving handcrafted burgers that bring people together one juicy stack at a time. <br> <br> Our team grills each patty to perfection, toasting the buns just right and layering on fresh, locally sourced ingredients that make every burger burst with taste. Whether you\'re craving a classic cheeseburger or something bold and new, Big Burger is where comfort meets quality and every meal feels like home.';
    content.appendChild(title);
    content.appendChild(desc);
}