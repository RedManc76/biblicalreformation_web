const API_KEY = 'ee78fa7f093ae48f039244b30c9100a02e73f142';
const API_URL = 'https://api.esv.org/v3/passage/text/';

function getEsvText(passage) {
  const params = new URLSearchParams({
    q: passage,
    'include-headings': false,
    'include-footnotes': false,
    'include-verse-numbers': false,
    'include-short-copyright': false,
    'include-passage-references': false
  });

  const headers = new Headers({
    'Authorization': `Token ${'ee78fa7f093ae48f039244b30c9100a02e73f142'}`
  });

  const url = new URL('https://api.esv.org/v3/passage/text/');
  url.search = params;

  return fetch(url, { headers })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const passages = data.passages;
    return passages[0] ? passages[0].trim() : 'Error: Passage not found';
  })
  .catch(error => {
    console.error('Error:', error);
    return 'Error: An error occurred while fetching data.';
  });
}