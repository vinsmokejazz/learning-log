let currentClock;
function searchBackend() {
  console.log("request sent to backend");
}

function debounceSearch() {
  clearTimeout(currentClock);
  currentClock = setTimeout(searchBackend, 30);
}

debounceSearch();
debounceSearch();