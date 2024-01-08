const title1 = $('#title1')
const title2 = $('#title2')

title1.css('font-size', '60px')
title2.css('font-size', '60px')

title1.click(function() {
    $(this).css({'color':'red','background': 'blue', 'font-family': 'Times New Roman', 'font-size': '10px'});
})

title2.click(function() {
    $(this).css({'color':'green','background': 'red', 'font-family': 'Arial',  'font-size': '10px' });
})