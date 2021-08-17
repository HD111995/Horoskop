//help functions
//get HTML Element ID ans Value
function getId(id){
    val = document.getElementById(id).value;
    return String(val);
}
//write to The Html Element
function print(iD,res){
    document.getElementById(iD).innerHTML = res;
}
//image Source changer
function src(source){
    let img = document.getElementById("img");
    img.src = source;
}
//Start Solution 
function show() {
    let inputVal = getId("month");
    document.getElementById("result").style.display = "block"
    switch (inputVal) {
        case "Mar":
            src("assets/img/aries.png");
            print("horo","your Horoskop is Aries")
            print("event","Today your patience might be tested when one or more of your projects gets put on hold by someone… ");
            break;
        case "Apr":
            src("assets/img/taurus.png");
            print("horo","your Horoskop is Taurus")
            print("event","Your intense energy makes you a great candidate for a leadership position right now, so if you are…");
            break;
        case "May":
            src("assets/img/icon_gemini.png");
            print("horo","your Horoskop is Gemini")
            print("event","If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…");
            break;
        case "Jun":
            src("assets/img/icon_cancer.png");
            print("horo","your Horoskop is Cancer")
            print("event","Too many different elements in your life are overlapping with each other right now—and it's your…");
            break;
        case "Jul":
            src("assets/img/icon_leo.png");
            print("horo","your Horoskop is Leo")
            print("event","The issues you'll be dealing with today are very complicated ones—you will have to navigate your…");
            break;
        case "Aug":
            src("assets/img/icon_virgo.png");
            print("horo","your Horoskop is Virgo")
            print("event","You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all… ");
            break; 
            case "Sep":
                src("assets/img/icon_libra.png");
                print("horo","your Horoskop is Libra")
                print("event","Pick a cultural event that's coming up and get some tickets for it today.");
                break;
            case "Oct":
                src("assets/img/icon_scorpio.png");
                print("horo","your Horoskop is Scorpio")
                print("event","Someone will challenge a belief that you've held for a very long time today—and they will say an…");
                break;
            case "Nov":
                src("assets/img/icon_sagittarius.png");
                print("horo","your Horoskop is Sagittarius")
                print("event","Someone in your life needs to step up and take on more responsibility—and you need to tell them to....");
                break;
            case "Dec":
                src("assets/img/icon_capricorn.png");
                print("horo","your Horoskop is Capricorn")
                print("event","Breaking the rules is not always a bad thing—especially if the rules limit your creativity. ");
                break;
            case "Jan":
                src("assets/img/icon_aquarius.png");
                print("horo","your Horoskop is Aquarius")
                print("event","Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great… ");
                break;
            case "Feb":
                src("assets/img/icon_pisces.png");
                print("horo","your Horoskop is Pisces")
                print("event","Communication is very important today—written, spoken, and even nonverbal body language will all…");
                break;
        default:
            print("horo","Please give a Month")
            break;
    }
}