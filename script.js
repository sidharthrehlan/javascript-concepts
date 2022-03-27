class RestaurantApp {
  constructor(mainNode) {
    this.restaurantList = [];
    this.mainNode = mainNode;

    this.fetchData = async function (url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          this.restaurantList = data;
        }
        return data;
      } catch (e) {
        console.log('something wnt wrong!');
      }
    };

    this.generateList = function (filteredData) {
      const restorantData = filteredData ? filteredData : this.restaurantList;

      if (Array.isArray(restorantData) && restorantData.length > 0) {
        const cardsArr = restorantData.map((item) => {
          return this.getCard(item);
        });

        const cardsHtml = `<div class='cards-list'>
            ${cardsArr.join('')}
        </div>`;

        return cardsHtml;
      }
    };

    this.getCard = ({ name, id, rating, distance, image }) => {
      const cardHtml = `<div class='card' id=${id}>
            <div class="card-name">${name}</div>
            <img class="card-image" src="./images/dominos_social_logo.jpeg">
        </div>`;

      return cardHtml;
    };

    this.searchByName = (name) => {
      let filteredData = this.restaurantList.filter(
        (item) => item.name === name
      );
      this.fillMainBlock(filteredData);
    };

    this.fillMainBlock = (filteredData) => {
      let restaurantContent = this.generateList(filteredData);
      this.mainNode.innerHTML = restaurantContent;
    };

    this.reset = () => {
      this.fillMainBlock();
    };
  }
}

let mainContentNode = document.getElementById('main-content');
let restapp = new RestaurantApp(mainContentNode);

let responseData = restapp.fetchData('http://localhost:3000/restaurant');
responseData.then(() => {
  restapp.fillMainBlock();
});

let searchBox = document.getElementById('search-box');
let seachButton = document.getElementById('search-btn');
let resetButton = document.getElementById('reset-btn');
seachButton.addEventListener('click', function () {
  let searchValue = searchBox.value;
  if (searchValue !== '') {
    restapp.searchByName(searchValue);
  }
});

resetButton.addEventListener('click', () => {
  restapp.reset();
  searchBox.value = '';
});
