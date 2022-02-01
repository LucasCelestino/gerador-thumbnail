function showThumb()
{
    let thumb = document.querySelector("#img").files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(thumb);
    img.width = 700;
    img.height = 394;

    document.querySelector(".thumbnail").innerHTML = '';

    document.querySelector(".thumbnail").appendChild(img);
}