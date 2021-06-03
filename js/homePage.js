function flip() {
    $('.card').toggleClass('flipped');
}
delete
function emptyDisplay() {
    var img1 = "https://i.postimg.cc/BvYngtmb/F-character2-1.png";
    var img2 = "https://i.postimg.cc/7L6xfwqk/Personage10-Copy.png";

    var imgElement = document.getElementById('emptyDisplay');

    imgElement.src = (imgElement.src === img1) ? img2 : img1;
}


function displayImage(clicked_idx) {
    var item = window.api.itemData[clicked_idx];
    if(item == null)
    {
        console.error("How the flipping heck");
        return;
    }
    window.api.selectedItem = clicked_idx;
    document.getElementById("emptyDisplay").src = item.images.transparent;
}

function acceptButton() {
    if(window.api.selectedItem === -1)
    {
        alert("Please select an item!");
        return;
    }
    if(jQuery.inArray(window.api.selectedItem, window.api.selectedItems) != -1)
    {
        alert("Dont pick the same avatar/item twice");
        return;
    }
    window.api.selectedItems.push(window.api.selectedItem);
    document.getElementById("rszQuestionmark" + window.store.questionIdx).src = window.api.itemData[window.api.selectedItem].images.transparent;
    window.store.questionIdx++;
    clearChoice();
}

function clearChoice() {
    window.api.selectedItem = -1;
    var x = document.getElementById("emptyDisplay");
    x.src = "https://i.postimg.cc/2y3kf4P0/black-Questionmark.png"
}

function clearBanner1() {
    window.store.questionIdx = 1;
    var x = document.getElementById("rszQuestionmark1");
    x.src = "https://i.postimg.cc/Y2ygL8qq/rsz-black-Questionmark.png"
}

function clearBanner2() {
    if(window.store.questionIdx != 1){
        window.store.questionIdx = 2;
    }
    var y = document.getElementById("rszQuestionmark2");
    y.src = "https://i.postimg.cc/Y2ygL8qq/rsz-black-Questionmark.png"
}

function clearBanner3() {
    if(window.store.questionIdx != 1 && window.store.questionIdx != 2){
        window.store.questionIdx = 3;
    }
    var z = document.getElementById("rszQuestionmark3");
    z.src = "https://i.postimg.cc/Y2ygL8qq/rsz-black-Questionmark.png"
}

function openEndPage() {
    window.open("http://localhost:3001/endpage");
  }

// MOTIVATION LOCAL STORAGE

function handleSubmit() {
    const motivation = document.getElementById('motivation').value;
    localStorage.setItem("MOTIVATION", motivation);
    return;
}