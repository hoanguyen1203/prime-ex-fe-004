$(document).ready(function(){
    let widthScreen = $( window ).width();
    let widthItem = Math.ceil((widthScreen - 40) / 6);
    // console.log(widthItem);

    // const gridBoxItem = document.querySelectorAll(".gridBox__item");
	


    // let positionFirstItem = $(".gridBox__item:first-child").position();
    // console.log("Top: " + positionFirstItem.top + " Left : " + positionFirstItem.left);

    // let countGridBoxItem = $(".gridBox__item").length;

    // let sumWidth  = 0;
    // let row = 0;
    // let col = 0;
    // let top;
    // let left;
    // $(".gridBox__item").each(function(index){
    //     // debugger;
    //     let i = index + 1;
        
    //     if((sumWidth + 40) >= widthScreen - 1) {
    //         row++;
    //         sumWidth = 0;
    //     }

    //     top = row * 150;
    //     $(this).css({left: Math.ceil(sumWidth), top: Math.ceil(top)});
        
    //     // $(this).addClass("item__"+i);
        
    //     for (var j = 0; j < index; j++) {
    //         if(gridBoxItem[j].style.left === gridBoxItem[index].style.left) {
    //             var bottom = gridBoxItem[j].clientTop + gridBoxItem[j].offsetHeight;
    //             if ((bottom.toString() + "px") >  gridBoxItem[index].style.top) {
    //                 sumWidth += gridBoxItem[j].offsetWidth;
    //                 $(this).css({left: sumWidth});
    //             }
                
    //         }
    //         //console.log(gridBoxItem[j].style.left);
    //     }
    //     //$(this).css({left: sumWidth, top: top});


    //     sumWidth += $(this).width();
        
    // });
    
    let isDown = false;

    // $(".gridBox__inner").sortable();

    $(".gridBox__item").mousedown(function() {
        isDown = true;
        $(this).addClass("is-move");
    });

    document.addEventListener('mouseup', () => {
        isDown = false;
        $(".gridBox__item").removeClass("is-move");
    });

    $(".gridBox__inner").on("mousemove", (event) => {
        event.preventDefault();
        if(isDown) {
            let x = event.clientX;
            let y = event.clientY;
            let element = $(".is-move");
            let newPosX = x - (element.width()/2);
            let newPosY = y - element.height();
            let modX = Math.ceil(newPosX / widthItem);
            let modY = Math.ceil(newPosY / 150);
            
            element.css("left", modX * widthItem);
            element.css("top", modY * 150);
        }
    });

    //$(".gridBox__inner").sortable();
    
});