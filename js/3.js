function loadFile(input) {
    var file = input.files[0];

    var newImage = document.createElement("img");
    newImage.setAttribute("class",'img');

    newImage.src = URL.createObjectURL(file);

    newImage.style.width="70%";
    newImage.style.height="70%";
    newImage.style.objectFit = "contain";

    var container = document.getElementById("PosterContainer");
    container.appendChild(newImage);

};