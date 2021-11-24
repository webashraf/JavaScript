document.body.style.backgroundColor ='tomato';
let description = document.querySelectorAll('.rticle h2');
for (let i = 0; i < description.length; i++) {
    const element = description[i];
    console.log(element);
    element.setAttribute('title', 'Hello This Is Title.');
    element.style.backgroundColor = 'Orange';
    element.style.margin = '6px';
    element.style.padding = '8px';
    element.style.border = '1px double #111';
    element.style.borderRadius = '10px';
    console.log(element.innerHTML);
    element.innerHTML = 'Hello This is JavaScript Change For Practice perpouse.'
}