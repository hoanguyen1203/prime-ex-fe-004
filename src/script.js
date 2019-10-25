// class SpeedTest {
//     constructor() {
//         this.testWrapper = document.querySelector(".test-wrapper")
//         this.testArea = document.querySelector("#test-area")
//         this.originText = document.querySelector("#origin-text p").innerHTML
//         this.resetButton = document.querySelector("#reset")
//         this.theTimer = document.querySelector(".timer")

//         this.minute = 0
//         this.second = 0
//         this.hundredths = 0

//         this.startTime = null
//     }
//     init() {
//         // Click button Start over
//         this.resetButton.addEventListener("click", () => {
//             this.reset()
//         })

//         // Typing text
//         this.testArea.addEventListener("input", () => {
//             if(!this.startTime) {
//                 this.startTime = setInterval(() => {
//                     this.start()
//                 }, 10)
//             }
//             this.testWrapper.style.border = "10px solid red"
            
//             if (this.checkText(this.testArea.value)) {
//                 this.testWrapper.style.border = "10px solid green"
//                 clearInterval(this.startTime)
//             }
//         })
//     }
//     start() {
//         if(this.hundredths === 99) {
//             this.second++
//             this.hundredths = 0
//         }
//         if(this.second === 59) {
//             this.minute++
//             this.second = 0
//         }
//         this.hundredths++
        
//         this.theTimer.innerHTML = `${this.addLeadingZero(this.minute)}:${this.addLeadingZero(this.second)}:${this.addLeadingZero(this.hundredths)}`
//     }
//     reset() {
//         this.minute = 0
//         this.second = 0
//         this.hundredths = 0

//         this.theTimer.innerHTML = `${this.addLeadingZero(this.minute)}:${this.addLeadingZero(this.second)}:${this.addLeadingZero(this.hundredths)}`
    
//         clearInterval(this.startTime)
//         this.startTime = null
    
//         this.testArea.value = ""
//         this.testWrapper.style.border = "10px solid grey"
//     }
//     addLeadingZero(number) {
//         var string = number.toString()
//         let length = string.length
//         if ( length === 1) {
//             string = "0" + string
//         }
//         return string
//     }
//     checkText(text) {
//         if(text === this.originText) {
//             return true
//         }
//         return false
//     }
// }

// let test = new SpeedTest()
// test.init()

$(document).ready(function(){
    let widthScreen = $( window ).width();
    let widthItem = (widthScreen - 40) / 6 ;

    // let positionFirstItem = $(".gridBox__item:first-child").position();
    // console.log("Top: " + positionFirstItem.top + " Left : " + positionFirstItem.left);

    // let countGridBoxItem = $(".gridBox__item").length;

    let sumWidth  = 0;
    let row = 0;
    let col = 0;
    let top;
    let left;
    $(".gridBox__item").each(function(index){
        let i = index + 1;
        
        if((sumWidth + 40) >= widthScreen - 1) {
            row++;
            sumWidth = 0;
        }

        top = row * 150;
        
        $(".gridBox__item:nth-child("+i+")").css({left: sumWidth, top: top});

        $(this).addClass("item__"+i);
        sumWidth += $(this).width();
        
    });
});