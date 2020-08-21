$(".dragItem").hover(function(){
    $(this).css("border-width", "2px");
    }, function() {
        $(this).css("border-width", "1px");
    } 
);

// Append element
// $("#createNew").click(function(){
//     $(document).createElement()
// });


$(".dragItem").draggable();
