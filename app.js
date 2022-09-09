window.onload = function(){
    let ok =fetch("data.json", {cache: "no-cache"}).then(response => response.json()).then( data => dataReady(data));
    console.log(ok);
    function dataReady(data){
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
                    document.getElementsByClassName("element__hours")[0].innerHTML = data[i].timeframes.weekly.current + "hrs";
                    document.getElementsByClassName("element__past")[0].innerHTML = "Last week - "+data[i].timeframes.weekly.previous +"hrs"
                    document.getElementsByClassName("element__hours")[1].innerHTML = data[i].timeframes.monthly.current + "hrs";
                    document.getElementsByClassName("element__past")[1].innerHTML = "Last month - "+data[i].timeframes.monthly.previous +"hrs";
                    document.getElementsByClassName("element__hours")[2].innerHTML = data[i].timeframes.daily.current + "hrs";
                    document.getElementsByClassName("element__past")[2].innerHTML = "Last day - " + data[i].timeframes.daily.previous + "hrs";
                    break;
                case "Play":
                    console.log(data[i].timeframes.weekly.previous)
                    document.getElementsByClassName("element__hours")[3].innerHTML = data[i].timeframes.weekly.current + "hrs";
                    document.getElementsByClassName("element__past")[3].innerHTML = "Last week - "+data[i].timeframes.weekly.previous +"hrs"
                    document.getElementsByClassName("element__hours")[4].innerHTML = data[i].timeframes.monthly.current + "hrs";
                    document.getElementsByClassName("element__past")[4].innerHTML = "Last month - "+data[i].timeframes.monthly.previous +"hrs";
                    document.getElementsByClassName("element__hours")[5].innerHTML = data[i].timeframes.daily.current + "hrs";
                    document.getElementsByClassName("element__past")[5].innerHTML = "Last day - " + data[i].timeframes.daily.previous + "hrs";
                    break;
                case "Study":
                    console.log(data[i].timeframes.weekly.previous)
                    document.getElementsByClassName("element__hours")[6].innerHTML = data[i].timeframes.weekly.current + "hrs";
                    document.getElementsByClassName("element__past")[6].innerHTML = "Last week - "+data[i].timeframes.weekly.previous +"hrs"
                    document.getElementsByClassName("element__hours")[7].innerHTML = data[i].timeframes.monthly.current + "hrs";
                    document.getElementsByClassName("element__past")[7].innerHTML = "Last month - "+data[i].timeframes.monthly.previous +"hrs";
                    document.getElementsByClassName("element__hours")[8].innerHTML = data[i].timeframes.daily.current + "hrs";
                    document.getElementsByClassName("element__past")[8].innerHTML = "Last day - " + data[i].timeframes.daily.previous + "hrs";
                    break;
                case "Exercise":
                    console.log(data[i].timeframes.weekly.previous)
                    document.getElementsByClassName("element__hours")[9].innerHTML = data[i].timeframes.weekly.current + "hrs";
                    document.getElementsByClassName("element__past")[9].innerHTML = "Last week - "+data[i].timeframes.weekly.previous +"hrs"
                    document.getElementsByClassName("element__hours")[10].innerHTML = data[i].timeframes.monthly.current + "hrs";
                    document.getElementsByClassName("element__past")[10].innerHTML = "Last month - "+data[i].timeframes.monthly.previous +"hrs";
                    document.getElementsByClassName("element__hours")[11].innerHTML = data[i].timeframes.daily.current + "hrs";
                    document.getElementsByClassName("element__past")[11].innerHTML = "Last day - " + data[i].timeframes.daily.previous + "hrs";
                    break;
                case "Social":
                    console.log(data[i].timeframes.weekly.previous)
                    document.getElementsByClassName("element__hours")[12].innerHTML = data[i].timeframes.weekly.current + "hrs";
                    document.getElementsByClassName("element__past")[12].innerHTML = "Last week - "+data[i].timeframes.weekly.previous +"hrs"
                    document.getElementsByClassName("element__hours")[13].innerHTML = data[i].timeframes.monthly.current + "hrs";
                    document.getElementsByClassName("element__past")[13].innerHTML = "Last month - "+data[i].timeframes.monthly.previous +"hrs";
                    document.getElementsByClassName("element__hours")[14].innerHTML = data[i].timeframes.daily.current + "hrs";
                    document.getElementsByClassName("element__past")[14].innerHTML = "Last day - " + data[i].timeframes.daily.previous + "hrs";
                    break;
                case "Self Care":
                    console.log(data[i].timeframes.weekly.previous)
                    document.getElementsByClassName("element__hours")[15].innerHTML = data[i].timeframes.weekly.current + "hrs";
                    document.getElementsByClassName("element__past")[15].innerHTML = "Last week - "+data[i].timeframes.weekly.previous +"hrs"
                    document.getElementsByClassName("element__hours")[16].innerHTML = data[i].timeframes.monthly.current + "hrs";
                    document.getElementsByClassName("element__past")[16].innerHTML = "Last month - "+data[i].timeframes.monthly.previous +"hrs";
                    document.getElementsByClassName("element__hours")[17].innerHTML = data[i].timeframes.daily.current + "hrs";
                    document.getElementsByClassName("element__past")[17].innerHTML = "Last day - " + data[i].timeframes.daily.previous + "hrs";
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


