jQuery(document).ready(function () {
    jQuery('h1').click(function () {
        alert('This is a heading tag!')
    });
    // jQuery('p').click(function () {
    //     alert('This is a paragraph!')
    // });
    // jQuery('img').click(function () {
    //     alert('This is an image')
    // });

    $('.clickable').click(function () {
        $('#img-showing').toggle();
        $('#img-hidden').toggle();
    })


});


// let items = document.getElementById('item')
// let button = document.getElementById('btn')


// let groceries = [];

// button.addEventListener('click', inputElements);

// function