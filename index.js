function dogShow(dogPhotos) {
  dogPhotos.message.forEach(function (element, index) {
    $("section").append(`<img src="${element}" alt="dog photo #${index}">`);
  });
}

function handleForm() {
  $("form").submit(function (e) {
    e.preventDefault();

    const numDogsForm = $("#numDogs").val();
    let numDogs = 3;

    if (numDogsForm > 0 && numDogsForm < 51) {
      numDogs = numDogsForm;
    }

    fetch("https://dog.ceo/api/breeds/image/random/" + numDogs)
      .then((Response) => Response.json())
      .then((ResponseJson) => dogShow(ResponseJson));
  });
}

$(handleForm());
