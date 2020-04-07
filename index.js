$("#js-shopping-list-form").on('submit', function(e){
    
    var item = $("#shopping-list-entry").val();
    if(item.length> 0){
    $('.shopping-list').append('<li>'+ '<span class="shopping-item">' + item + '</span>' +'<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>' + ' <button class="shopping-item-delete"><span class="button-label">delete</span></button></div>' + '</li>');
    e.preventDefault();
    }
    else {
        return;
    }
});
   
$('ul').on("click", ".shopping-item-toggle", function(){
    $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");

});

$('ul').on("click", ".shopping-item-delete", function(){
    $(this).closest("li").remove();

});
