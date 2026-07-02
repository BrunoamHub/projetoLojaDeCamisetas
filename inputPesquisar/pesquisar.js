const searchInput = document.getElementById('inputPesquisa');

// console.log(searchInput);

searchInput.addEventListener('input', (event) => {
  const value = formatString(event.target.value);

  const items = document.querySelectorAll('.items .item');
  const noResults = document.getElementById('no_results');

  const textoInput = searchInput.innerHTML;

  let hasResults = false;

  items.forEach((item) => {
    // console.log(item.textContent);

    if (formatString(item.textContent).indexOf(value) !== -1) {
      item.style.display = 'flex';
      item.style.visibility = 'visible';
      hasResults = true;
    } else {
      item.style.visibility = 'hidden';
      item.style.display = 'none';
      hasResults = false;
    }
  });

  items.forEach((itemList) => {
    if (value === '') {
      // items.classList.remove('open');
      // console.log('Em branco');
      itemList.style.display = 'none';
      console.log(noResults);
    }
  });
});

function formatString(value) {
  return value
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
