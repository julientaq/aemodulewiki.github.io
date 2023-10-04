// listing of the available entries

let cards = document.querySelectorAll(".catalog-entry");

function liveSearch() {
  let search_query = document.querySelector("#searchbox").value;

  //Use innerText if all contents are visible
  //Use textContent for including hidden elements
  for (var i = 0; i < cards.length; i++) {
    if (
      cards[i].textContent.toLowerCase().includes(search_query.toLowerCase())
    ) {
      cards[i].classList.remove("found");
    } else {
      cards[i].classList.add("found");
    }
  }
}

// search box
//A little delay
let typingTimer;
let typeInterval = 100;
let searchInput = document.querySelector("#searchbox");

searchInput.addEventListener("keyup", () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(liveSearch, typeInterval);
});

// show the activated module
let contents = document.querySelectorAll(".catalog-entry-content");

// list all filters
const filters = document.querySelectorAll(".filter-checkbox");

// Function to update the displayed items based on selected filters
function updateFilteredItems() {
  // all the checked checkboxes
  const selectedFilters = Array.from(
    document.querySelectorAll(".filter-checkbox:checked")
  ).map((checkbox) => checkbox.value);

  //all the available items
  const listItems = document.querySelectorAll(".catalog-entry");

  // check if any filter is there
  console.log(selectedFilters.length)
  if (selectedFilters.length < 1) {
    listItems.forEach((el) => {
      el.classList.add("is-selected");
    });
    return
  }


  // for each entry
  listItems.forEach((item) => {
    //item is not visible unless
    let isVisible = false;

    // split the filters from the item
    const itemFilters = item.dataset.filters.split(",");

    /* selected filters */
    /* check if the filters of the item contains any of the selected list */
    selectedFilters.forEach((filter) => {
      if (itemFilters.includes(filter.trim())) {
        isVisible = true;
      }
    });

    if (!isVisible) item.classList.remove("is-selected");
    else item.classList.add("is-selected");
  });
}

// Attach event listeners to filter checkboxes
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");

filterCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFilteredItems);
});

// Initial update when the page loads
updateFilteredItems();
