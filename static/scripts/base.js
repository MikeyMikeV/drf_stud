let titleInput = document.getElementsByName('title')[0]
let posterInput = document.getElementsByName('poster')[0]
let releaseDateInput = document.getElementsByName('release_date')[0]
let durationsInput = document.getElementsByName('durations')[0]
let descInput = document.getElementsByName('desc')[0]
let ratingInput = document.getElementsByName('rating')[0]
let studioInput = document.getElementsByName('studio')[0]
let saveButton = document.getElementsByName('save')[0]
base64File = null

function file_base64_converter(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = function (params) {
            base64File = params.target.result
            console.log(base64File)
        }
        reader.readAsDataURL(input.files[0])
    }
}

saveButton.onclick = function () {
    const url = "http://127.0.0.1:8000/rest/films/"
    const data = {
        "title": titleInput.value,
        "poster": base64File,
        'release_date': releaseDateInput.value,
        'durations': durationsInput.value,
        'desc': descInput.value,
        'rating': ratingInput.value,
        'studio': studioInput.value,
    }

    const response = fetch(
        url,
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)
        }    
    )
}