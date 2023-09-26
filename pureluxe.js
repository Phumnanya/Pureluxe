document.getElementById('free').style.textAlign = 'center';


document.getElementById('paste').style.backgroundColor = 'forestgreen';
document.getElementById('paste').style.color = 'white';


document.getElementById('ordinary').style.backgroundColor = '#F4ABC4';
document.getElementById('sunscreen').style.backgroundColor = 'sandybrown';

document.getElementById('polish').style.backgroundColor = '#150050';
document.getElementById('polish').style.color = 'white';

document.getElementById('maskara').style.backgroundColor = '#F4ABC4';

document.getElementById('sunscreen2').style.backgroundColor = '#D2D2D2';

document.getElementById('lipstick').style.backgroundColor = '#D2D2D2';


document.getElementById('register').style.backgroundColor = 'gold';



function ddown() {
    popup.style.display = 'block';
    function ddtoggle() {
        popup.style.display = 'none';
    }
    dropdown.addEventListener("mouseout", ddtoggle);
}
dropdown.addEventListener("mouseover", ddown);