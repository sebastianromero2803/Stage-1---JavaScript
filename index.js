// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let docs = [];
// There is the function to get data.
async function getData() {
  return await fetch('https://api.plos.org/search?q=title:DNA')
    .then((response) => response.json())
    .then((json) => {
      docs = json.response.docs;
    });
}

/* 1. Develop a function that prints by console the data filtering by "article_type" and get all
      the data that are different from "Research Article".
           - Extra points, receive the value to filter by parameters. */

async function FilterByArticleType(filterBy, value) {
  await getData();
  let articles = docs.filter((article) => article[filterBy] == value);

  for (let i = 0; i < articles.length; i++) console.log(articles[i]);
}
//FilterByArticleType( 'article_type', 'Research Article' );

/* 2. Develop a function that prints by console all "author_display" with "score" greater
      than "6.0".
           - Extra point, receive the value to be filtered by parameters. */

async function AuthorsScoreGreater(valueGreaterThan) {
  await getData();
  let articles = docs.filter((article) => article.score > valueGreaterThan);

  for (let i = 0; i < articles.length; i++) {
    console.log(articles[i]);
    for (let j = 0; j < articles[i].author_display.length; j++)
      console.log(articles[i].author_display[j]);
  }
}
//AuthorsScoreGreater(6);

/* 3. Develop a function that gets the record with id "10.1371/journal.pgen.1006605"
      update "article_type" to "Newspaper" and print this by console. */

async function GetIdUpdateType(articleId, updateValue) {
  await getData();
  let index = docs.findIndex((article) => article.id === articleId);
  docs[index].article_type = updateValue;
  console.log(docs[index]);
}
//GetIdUpdateType('10.1371/journal.pgen.1006605', 'Newspaper');

/* 4. Develop a function that gets all the "article_type" without repeating and print it by
      console. */

async function GetArticleUpdateType() {
  await GetIdUpdateType('10.1371/journal.pgen.1006605', 'Newspaper');
  let articlesTypes = Array.from(
    new Set(docs.map((article) => article.article_type))
  );
  for (let i = 0; i < articlesTypes.length; i++) console.log(articlesTypes[i]);
}
//GetArticleUpdateType();

/* 5. Develop a function that concatenates all the "journal" and prints them by console.
           - Extra point, print all the "journal" without repeating. */

async function ConcatJournals() {
  await getData();
  let articlesJournals = Array.from(
    new Set(docs.map((article) => article.journal.toLowerCase()))
  );
  console.log(articlesJournals);
}
//ConcatJournals();

/* 6. Develop a function that removes a property of the array "docs" and prints the new
      array by console.
            - Extra point, receive the property to be removed by parameter. */

async function RemoveProperty(property) {
  await getData();
  docs.forEach((article) => {
    delete article[property];
  });
  for (let i = 0; i < docs.length; i++) console.log(docs[i]);
}
//RemoveProperty('article_type')

/* 7. Develop a function that prints by console only the records from id
      "10.1371/journal.pone.0047101" to "10.1371/journal.pgen.1000047". */

async function PrintRecords() {
  await getData();
  for (let i = 0; i < docs.length; i++) {
    let idNumber = docs[i].id.split('.').slice(-1);
    if (idNumber >= 47101 && idNumber <= 1000047) console.log(docs[i]);
  }
}
//PrintRecords();

/* 8. Develop a function that creates an array from the given "docs" and add the following
      array to it and print it to the console. */

async function ConcatArray() {
  await getData();
  let arrayToAdd = [
    {
      id: '10.1371/journal.pone.0177149',
      journal: 'Wall Street',
      eissn: '1932-6203',
      publication_date: '2017-05-03T00:00:00Z',
      article_type: 'Newspaper',
      author_display: [
        'Irina Bruck',
        'Nalini Dhingra',
        'Matthew P. Martinez',
        'Daniel L. Kaplan',
      ],
      abstract: [
        '\nDpb11 is required for the initiation of DNA replication in budding yeast. We found that Dpb11 binds tightly to single-stranded DNA (ssDNA) or branched DNA structures, while its human homolog, TopBP1, binds tightly to branched-DNA structures. We also found that Dpb11 binds stably to CDK-phosphorylated RPA, the eukaryotic ssDNA binding protein, in the presence of branched DNA. A Dpb11 mutant specifically defective for DNA binding did not exhibit tight binding to RPA in the presence of DNA, suggesting that Dpb11-interaction with DNA may promote the recruitment of RPA to melted DNA. We then characterized a mutant of Dpb11 that is specifically defective in DNA binding in budding yeast cells. Expression of dpb11-m1,2,3,5,ΔC results in a substantial decrease in RPA recruitment to origins, suggesting that Dpb11 interaction with DNA may be required for RPA recruitment to origins. Expression of dpb11-m1,2,3,5,ΔC also results in diminished GINS interaction with Mcm2-7 during S phase, while Cdc45 interaction with Mcm2-7 is like wild-type. The reduced GINS interaction with Mcm2-7 may be an indirect consequence of diminished origin melting. We propose that the tight interaction between Dpb11, CDK-phosphorylated RPA, and branched-DNA may be required for the essential function of stabilizing melted origin DNA in vivo. We also propose an alternative model, wherein Dpb11-DNA interaction is required for some other function in DNA replication initiation, such as helicase activation.\n',
      ],
      title_display:
        'Dpb11 may function with RPA and DNA to initiate DNA replication',
      score: 7.018296,
    },
    {
      id: '10.1371/journal.pgen.1006699',
      journal: 'Wall Street',
      eissn: '1553-7404',
      publication_date: '2017-02-10T00:00:00Z',
      article_type: 'Newspaper',
      author_display: [
        'Concetta Cuozzo',
        'Antonio Porcellini',
        'Tiziana Angrisano',
        'Annalisa Morano',
        'Bongyong Lee',
        'Alba Di Pardo',
        'Samantha Messina',
        'Rodolfo Iuliano',
        'Alfredo Fusco',
        'Maria R. Santillo',
        'Mark T. Muller',
        'Lorenzo Chiariotti',
        'Max E. Gottesman',
        'Enrico V. Avvedimento',
      ],
      abstract: [''],
      title_display:
        'Correction: DNA Damage, Homology-Directed Repair, and DNA Methylation',
      score: 7.018296,
    },
  ];
  for (let i = 0; i < arrayToAdd.length; i++)
    docs.splice(docs.length, 0, arrayToAdd[i]);
  console.log(docs);
}
//ConcatArray();

/* 9. Develop a function that takes the odd positions of the given array "docs" then with the new
      array obtained it must be modified so that the list of objects has the following format.
            a) "title" must be equal to concatenate "journal" and "title_display".
            b) "score" must be equal to "score".
            c) "article_type" must be equal to "article_type".
            d) "authors" must be equal to concatenate the array "author_display" separated by "-".
            e) “id” must be equal to “id”.
      Create a function to sort in descending order that receives the array to be sorted and the
      property to be sorted as parameters and print the new sorted array in the console.
      Call this new function to organize the new array obtained. */

/* NOTA IMPORTANTE: por alguna razón esta última no corre acá pero sí lo hace en la consola de Chrome */

async function ReformatArray() {
  await getData();
  let array = [];

  for (let i = 0; i < docs.length; i++) {
    if (i % 2) {
      let currentArticle = docs[i];
      array.push(currentArticle);
      let sourceTitle = {
        title: currentArticle.journal.concat(
          ' - ',
          currentArticle.title_display
        ),
      };
      Object.assign(array[array.length - 1], sourceTitle);
      let sourceAuthors = {
        authors: currentArticle.author_display.join('-'),
      };
      Object.assign(array[array.length - 1], sourceAuthors);
    }
  }
  array.forEach((article) => {
    delete article['journal'],
      delete article['title_display'],
      delete article['author_display'],
      delete article['eissn'],
      delete article['abstract'],
      delete article['publication_date'];
  });
  return array;
}

function SortArray(array, property) {
  arraySorted = array.sort((a, b) => (a[property] > b[property] ? 1 : -1));
  console.log(arraySorted);
}

async function ArrayToSort() {
  let arrayToSort = await ReformatArray();
  SortArray(arrayToSort, 'id');
}
ArrayToSort();
