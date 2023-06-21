document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const searchResults = document.getElementById('search-results');
    const container = document.querySelector('.container');
    const searchContainer = document.querySelector('.search-container');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        search(query);
    });

    searchInput.addEventListener('keyup', function(event) {
        if (event.keyCode === 13) {
            const query = searchInput.value.trim();
            search(query);
        }
    });

    function search(query) {
        fetch('websites.txt')
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Error: ' + response.status);
            })
            .then(websites => {
                const websiteList = websites.split('\n');
                const results = websiteList
                    .map(website => ({
                        website: website.trim(),
                        matchScore: calculateMatchScore(query, website.trim())
                    }))
                    .filter(result => result.matchScore > 0)
                    .sort((a, b) => b.matchScore - a.matchScore);

                if (results.length === 0) {
                    const estimation = estimateMostLikelyResult(query, websiteList);
                    if (estimation) {
                        results.push(estimation);
                    }
                }

                displaySearchResults(results);
                animateSearchContainer();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function calculateMatchScore(query, website) {
        const queryWords = query.toLowerCase().match(/\b\w+\b/g) || [];
        const websiteWords = website.toLowerCase().match(/\b\w+\b/g) || [];
        const totalQueryWords = queryWords.length;

        const matchedWords = queryWords.filter(word => websiteWords.some(websiteWord => websiteWord.includes(word)));
        const matchedWordsCount = matchedWords.length;

        return totalQueryWords > 0 ? (matchedWordsCount / totalQueryWords) * 100 : 0;
    }

    function estimateMostLikelyResult(query, websiteList) {
        const queryWords = query.toLowerCase().match(/\b\w+\b/g) || [];
        let maxMatchScore = 0;
        let mostLikelyResult = null;

        for (const website of websiteList) {
            const websiteWords = website.toLowerCase().match(/\b\w+\b/g) || [];
            let matchScore = 0;

            for (const queryWord of queryWords) {
                if (websiteWords.some(websiteWord => websiteWord.includes(queryWord))) {
                    matchScore++;
                }
            }

            if (matchScore > maxMatchScore) {
                maxMatchScore = matchScore;
                mostLikelyResult = { website, matchScore };
            }
        }

        return mostLikelyResult;
    }

    function displaySearchResults(results) {
        searchResults.innerHTML = '';
        if (results.length > 0) {
            const ul = document.createElement('ul');
            results.forEach(result => {
                const li = document.createElement('li');
                const linkIcon = document.createElement('i');
                linkIcon.classList.add('fa-solid', 'fa-grip-lines');
                const link = document.createElement('a');
                link.href = result.website;
                link.appendChild(linkIcon);
    
                const keywordsRegex = /\[(.*?)\]/g;
                const websiteWithoutKeywords = result.website.replace(keywordsRegex, '').trim();
                link.textContent = ' ' + websiteWithoutKeywords;
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const iframe = document.createElement('iframe');
                    iframe.src = result.website.replace(/\s*\[.*?\]\s*/g, ''); // Remove keywords from URL
                    iframe.frameBorder = '0';
                    iframe.allowFullscreen = true;
                    iframe.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999;';
                    document.body.appendChild(iframe);
                    const backButton = document.createElement('button');
                    backButton.classList.add('back-button');
                    backButton.textContent = 'Back';
                    backButton.addEventListener('click', function() {
                        iframe.remove();
                        backButton.remove();
                        searchResults.style.display = 'block';
                    });
                    document.body.appendChild(backButton);
                    searchResults.style.display = 'none';
                });
                
                li.appendChild(link);
    
                const matchScore = result.matchScore.toFixed(2);
                const matchScoreText = document.createElement('span');
                matchScoreText.classList.add('match-score');
                matchScoreText.textContent = ` (${matchScore}%)`;
                li.appendChild(matchScoreText);
    
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        } else {
            searchResults.textContent = 'No results found.';
        }
    }
     
    

    function animateSearchContainer() {
        container.style.animation = '';
        searchContainer.style.animation = '';

        void container.offsetWidth;

        container.style.animation = 'moveUp 0.5s ease';
        searchContainer.style.animation = 'moveUp 0.5s ease';
    }
});










const wuku = document.getElementById('wuku');
const letters = ['w', 'u', 'k', 'u', '´','s', ' ','s', 'e', 'a', 'r', 'c', 'h', ' ','p', 'r', 'o', 'x', 'y',];
let index = 0;
let isDeleting = false;

function animate() {
  const currentText = isDeleting ? letters.slice(0, index).join('') : letters.slice(0, index + 1).join('')+ "_";
  wuku.textContent = currentText;
  index = isDeleting ? index - 1 : index + 1;
  if (index === letters.length) {
    isDeleting = true;
  } else if (index === 0) {
    isDeleting = false;
  }
  const speed = isDeleting ? 350 : 600;
  setTimeout(animate, speed);
}

animate();