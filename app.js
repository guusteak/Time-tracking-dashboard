window.onload = function(){
    let ok =fetch("data.json", {cache: "no-cache"}).then(response => response.json()).then( data => dataReady(data));
    console.log(ok);
    //Refractoring    
    function dataReady(data){
        function setTime(occurenceNumber, dateNumber, times){
            switch(occurenceNumber){
                case 0:
                case 3:
                case 6:
                case 9:
                case 12:
                case 15:
                    if(times == "current"){
                        document.getElementsByClassName("element__hours")[occurenceNumber].innerHTML = data[dateNumber].timeframes.weekly.current + "hrs";
                        break;
                    }
                    else if(times == "previous"){
                        document.getElementsByClassName("element__past")[occurenceNumber].innerHTML = "Last week - " + data[dateNumber].timeframes.weekly.previous + "hrs";
                        break;
                    }
                    
                
                case 1:
                case 4:
                case 7:
                case 10:
                case 13:
                case 16:
                    if(times == "current"){
                        document.getElementsByClassName("element__hours")[occurenceNumber].innerHTML = data[dateNumber].timeframes.monthly.current + "hrs";
                        break;
                    }
                    if(times == "previous"){
                        document.getElementsByClassName("element__past")[occurenceNumber].innerHTML = "Last week - " + data[dateNumber].timeframes.monthly.previous + "hrs";
                        break;
                    }
                case 2:
                case 5:
                case 8:
                case 11:
                case 14:
                case 17:
                    if(times == "current"){
                        document.getElementsByClassName("element__hours")[occurenceNumber].innerHTML = data[dateNumber].timeframes.daily.current + "hrs";
                        break;
                    }
                    else if(times == "previous"){
                        document.getElementsByClassName("element__past")[occurenceNumber].innerHTML = "Last week - " + data[dateNumber].timeframes.daily.previous + "hrs";
                        break;
                    }
                        

        }}
        console.log(data[2]);
        console.log(data[5].title);
        console.log(data[2].timeframes);
        console.log(data[2].timeframes.daily.current);
        console.log(data[2].timeframes.daily.previous)
        for(let i=0;i<=5; i++){
            switch (data[i].title){
                //TODO: Refractoring to change that shit into function
                case "Work":
                    console.log(data[i].timeframes.weekly.previous)
                    /*document.getElementsByClassName("element__hours")[0].innerHTML = data[i].timeframes.weekly.current + "hrs";
                    document.getElementsByClassName("element__past")[0].innerHTML = "Last week - "+data[i].timeframes.weekly.previous +"hrs"
                    document.getElementsByClassName("element__hours")[1].innerHTML = data[i].timeframes.monthly.current + "hrs";
                    document.getElementsByClassName("element__past")[1].innerHTML = "Last month - "+data[i].timeframes.monthly.previous +"hrs";
                    document.getElementsByClassName("element__hours")[2].innerHTML = data[i].timeframes.daily.current + "hrs";
                    document.getElementsByClassName("element__past")[2].innerHTML = "Last day - " + data[i].timeframes.daily.previous + "hrs";
                    */
                    setTime(0, i, "current");
                    setTime(0, i, "previous");
                    setTime(1, i, "current");
                    setTime(1, i, "previous");
                    setTime(2, i, "current");
                    setTime(2, i, "previous");
                    break;
                case "Play":
                    console.log(data[i].timeframes.weekly.previous)
                    setTime(3, i, "current");
                    setTime(3, i, "previous");
                    setTime(4, i, "current");
                    setTime(4, i, "previous");
                    setTime(5, i, "current");
                    setTime(5, i, "previous");
                    break;
                case "Study":
                    console.log(data[i].timeframes.weekly.previous)
                    setTime(6, i, "current");
                    setTime(6, i, "previous");
                    setTime(7, i, "current");
                    setTime(7, i, "previous");
                    setTime(8, i, "current");
                    setTime(8, i, "previous");
                    break;
                case "Exercise":
                    console.log(data[i].timeframes.weekly.previous)
                    setTime(9, i, "current");
                    setTime(9, i, "previous");
                    setTime(10, i, "current");
                    setTime(10, i, "previous");
                    setTime(11, i, "current");
                    setTime(11, i, "previous");
                    break;
                case "Social":
                    console.log(data[i].timeframes.weekly.previous)
                    setTime(12, i, "current");
                    setTime(12, i, "previous");
                    setTime(13, i, "current");
                    setTime(13, i, "previous");
                    setTime(14, i, "current");
                    setTime(14, i, "previous");
                    break;
                case "Self Care":
                    console.log(data[i].timeframes.weekly.previous)
                    setTime(15, i, "current");
                    setTime(15, i, "previous");
                    setTime(16, i, "current");
                    setTime(16, i, "previous");
                    setTime(17, i, "current");
                    setTime(17, i, "previous");
                    break;
            }
        }
    }
    
    for(let i=1;i<=3;i++){
        let display = () =>{
            let passedargument = i;
            view(passedargument);
        }
        document.getElementsByClassName("container__"+i)[0].addEventListener("click", display)
    }
    

    function view(param){
        switch(param){
             case 1:
                //there refractoring will be needed too.
                console.log("day");
                let arr = document.getElementsByClassName("element__weekly");
                let arr2 = document.getElementsByClassName("element__monthly");
                let arr3 = document.getElementsByClassName("element__daily");
                for(let i=0; i<arr.length; i++){
                    arr[i].classList.add("element__time--none");
                    arr2[i].classList.add("element__time--none");
                    arr3[i].classList.remove("element__time--none");
                }
                for(let j=1;j<=3;j++){
                    document.getElementsByClassName("container__"+j)[0].classList.remove("container__bottom--active");
                }
                document.getElementsByClassName("container__1")[0].classList.add("container__bottom--active");
                break;
            case 2:
                console.log("week");
                let arr4 = document.getElementsByClassName("element__weekly");
                let arr5 = document.getElementsByClassName("element__monthly");
                let arr6 = document.getElementsByClassName("element__daily");
                for(let i=0; i<arr4.length; i++){
                    arr4[i].classList.remove("element__time--none");
                    arr5[i].classList.add("element__time--none");
                    arr6[i].classList.add("element__time--none");
                }
                for(let j=1;j<=3;j++){
                    document.getElementsByClassName("container__"+j)[0].classList.remove("container__bottom--active");
                }
                document.getElementsByClassName("container__2")[0].classList.add("container__bottom--active");
                break;
            case 3:
                console.log("month");
                let arr7 = document.getElementsByClassName("element__weekly");
                let arr8 = document.getElementsByClassName("element__monthly");
                let arr9 = document.getElementsByClassName("element__daily");
                for(let i=0; i<arr7.length; i++){
                    arr7[i].classList.add("element__time--none");
                    arr8[i].classList.remove("element__time--none");
                    arr9[i].classList.add("element__time--none");
                }
                for(let j=1;j<=3;j++){
                    document.getElementsByClassName("container__"+j)[0].classList.remove("container__bottom--active");
                }
                document.getElementsByClassName("container__3")[0].classList.add("container__bottom--active");
                break;
            default:
                console.log("something went wrong");
                break;
        }
    }
}


