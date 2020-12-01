window.onclick = function (event) {
  let target = event.target;

  if (target.nodeName === 'IMG') {
    window.location = target.src;
  }
};

for (let img of document.querySelectorAll('article > p > img')) {
  let caption = img.parentElement.nextElementSibling;
  let copied_img = img.cloneNode();

  let figure = document.createElement('figure');
  let figcaption = document.createElement('figcaption');

  figcaption.innerHTML = caption.innerHTML;
  figure.append(copied_img, figcaption);
  img.replaceWith(figure);
  caption.remove();
}
