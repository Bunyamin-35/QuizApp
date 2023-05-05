questions = [
    {
        questionNo:1,
        question:"Aşağıdaki şehirlerden hangisi Türkiye'nin başkentidir?",
        choicesA:"Ankara",
        choicesB:"İstanbul",
        choicesC:"Sivas",
        choicesD:"Erzurum",
        choicesE:"İzmir",
        correctanswer:"Ankara",
    },
    {
        questionNo:2,
        question:"Aşağıdaki sayılardan hangisi çift sayıdır?",
        choicesA:"3",
        choicesB:"11",
        choicesC:"43",
        choicesD:"42",
        choicesE:"53",
        correctanswer:"42",
    },
    {
        questionNo:3,
        question:"Aşağıdaki şehirlerden hangisinin kıyı şeridi bulunmaz?",
        choicesA:"İstanbul",
        choicesB:"Bursa",
        choicesC:"Mersin",
        choicesD:"Gümüşhane",
        choicesE:"Giresun",
        correctanswer:"Gümüşhane",
    },
    {
        questionNo:4,
        question:"Aşağıdaki şehirlerden hangisinin Karadenize kıyısı yoktur?",
        choicesA:"Zonguldak",
        choicesB:"Trabzon",
        choicesC:"Karabük",
        choicesD:"Bartın",
        choicesE:"Sinop",
        correctanswer:"Karabük",
    },
]


const contentDOM =document.querySelector(".content")

const resultDOM =document.querySelector(".result")
const tiksignDOM =document.querySelector("#tiksign")
const crosssignDOM =document.querySelector("#crosssign")

const startbtnDOM = document.querySelector("#startbtn")
const endbtnDOM = document.querySelector("#endbtn")

const questionNoDOM = document.querySelector(".questionNo")
const questionDOM = document.querySelector(".question")
const optionsDOM = document.querySelector(".options")
const choicesbtnDOM = document.querySelector(".choicesbtns")

let correctsDOM = document.querySelector("#corrects")
let mistakesDOM = document.querySelector("#mistakes")


let checklabel;

let questionNumber = 0;
const numberofquestion = questions.length
function increase(){
    questionNumber++;
}

startbtnDOM.addEventListener("click",() =>{
    if(questionNumber<numberofquestion){
        increase()
    }
    startbtnDOM.innerHTML ="Next Question"
    startbtnDOM.setAttribute("disabled","disabled")
    
    console.log(`start butonuna ${questionNumber} kez tıklandı`);

    questionNoDOM.innerHTML =`<h3>Question - ${questions[questionNumber-1].questionNo}</h3>`

    questionDOM.innerHTML = questions[questionNumber-1].question

    optionsDOM.innerHTML = `<li>A. ${questions[questionNumber-1].choicesA}</li>
                            <li>B. ${questions[questionNumber-1].choicesB}</li>
                            <li>C. ${questions[questionNumber-1].choicesC}</li>
                            <li>D. ${questions[questionNumber-1].choicesD}</li>
                            <li>E. ${questions[questionNumber-1].choicesE}</li>`

    choicesbtnDOM.innerHTML =  `<button id="btnA">A</button>
                                <button id="btnB">B</button>
                                <button id="btnC">C</button>
                                <button id="btnD">D</button>
                                <button id="btnE">E</button>`

    const choiceA = document.querySelector("#btnA")
    const choiceB = document.querySelector("#btnB")
    const choiceC = document.querySelector("#btnC")
    const choiceD = document.querySelector("#btnD")
    const choiceE = document.querySelector("#btnE")

    

    /** Button-A **/

    choiceA.addEventListener("click",()=>{

        choiceA.setAttribute("disabled","disabled")
        choiceB.setAttribute("disabled","disabled")
        choiceC.setAttribute("disabled","disabled")
        choiceD.setAttribute("disabled","disabled")
        choiceE.setAttribute("disabled","disabled")

        startbtnDOM.removeAttribute("disabled","disabled")

        choiceA.style.pointerEvents = "none"; 
        choiceB.style.pointerEvents = "none"; 
        choiceC.style.pointerEvents = "none"; 
        choiceD.style.pointerEvents = "none"; 
        choiceE.style.pointerEvents = "none";


        checklabel=questions[questionNumber-1].choicesA


        if(checklabel === questions[questionNumber-1].correctanswer){
            console.log("correct");
            correctsDOM.innerHTML++;
        }               
        else {
            console.log("mistake");
            mistakesDOM.innerHTML++;
        }

        if(questionNumber == (numberofquestion)){
            startbtnDOM.setAttribute("disabled","disabled")
        }
    })

    /** Button-A **/

    /** Button-B **/

    choiceB.addEventListener("click",()=>{
        choiceA.setAttribute("disabled","disabled")
        choiceB.setAttribute("disabled","disabled")
        choiceC.setAttribute("disabled","disabled")
        choiceD.setAttribute("disabled","disabled")
        choiceE.setAttribute("disabled","disabled")

        startbtnDOM.removeAttribute("disabled","disabled")

        choiceA.style.pointerEvents = "none"; 
        choiceB.style.pointerEvents = "none"; 
        choiceC.style.pointerEvents = "none"; 
        choiceD.style.pointerEvents = "none"; 
        choiceE.style.pointerEvents = "none";

        checklabel=questions[questionNumber-1].choicesB

  

        if(checklabel === questions[questionNumber-1].correctanswer){
            console.log("correct");
            correctsDOM.innerHTML++;
        }               
        else {
            console.log("mistake");
            mistakesDOM.innerHTML++;
        }
        if(questionNumber == (numberofquestion)){
            startbtnDOM.setAttribute("disabled","disabled")
        }
    })

    /** Button-B **/

    /** Button-C **/

    choiceC.addEventListener("click",()=>{
        choiceA.setAttribute("disabled","disabled")
        choiceB.setAttribute("disabled","disabled")
        choiceC.setAttribute("disabled","disabled")
        choiceD.setAttribute("disabled","disabled")
        choiceE.setAttribute("disabled","disabled")

        startbtnDOM.removeAttribute("disabled","disabled")

        choiceA.style.pointerEvents = "none"; 
        choiceB.style.pointerEvents = "none"; 
        choiceC.style.pointerEvents = "none"; 
        choiceD.style.pointerEvents = "none"; 
        choiceE.style.pointerEvents = "none";

        checklabel=questions[questionNumber-1].choicesC

    
        if(checklabel === questions[questionNumber-1].correctanswer){
            console.log("correct");
            correctsDOM.innerHTML++;
        }               
        else {
            console.log("mistake");
            mistakesDOM.innerHTML++;
        }
        if(questionNumber == (numberofquestion)){
            startbtnDOM.setAttribute("disabled","disabled")
        }
    })

    /** Button-C **/

    /** Button-D **/

    choiceD.addEventListener("click",()=>{
        choiceA.setAttribute("disabled","disabled")
        choiceB.setAttribute("disabled","disabled")
        choiceC.setAttribute("disabled","disabled")
        choiceD.setAttribute("disabled","disabled")
        choiceE.setAttribute("disabled","disabled")

        startbtnDOM.removeAttribute("disabled","disabled")

        choiceA.style.pointerEvents = "none"; 
        choiceB.style.pointerEvents = "none"; 
        choiceC.style.pointerEvents = "none"; 
        choiceD.style.pointerEvents = "none"; 
        choiceE.style.pointerEvents = "none";

        checklabel=questions[questionNumber-1].choicesD


        if(checklabel === questions[questionNumber-1].correctanswer){
            console.log("correct");
            correctsDOM.innerHTML++;
        }               
        else {
            console.log("mistake");
            mistakesDOM.innerHTML++;
        }
        if(questionNumber == (numberofquestion)){
            startbtnDOM.setAttribute("disabled","disabled")
        }
    })

    /** Button-D **/

    /** Button-E **/
    choiceE.addEventListener("click",()=>{
        choiceA.setAttribute("disabled","disabled")
        choiceB.setAttribute("disabled","disabled")
        choiceC.setAttribute("disabled","disabled")
        choiceD.setAttribute("disabled","disabled")
        choiceE.setAttribute("disabled","disabled")

        startbtnDOM.removeAttribute("disabled","disabled")

        choiceA.style.pointerEvents = "none"; 
        choiceB.style.pointerEvents = "none"; 
        choiceC.style.pointerEvents = "none"; 
        choiceD.style.pointerEvents = "none"; 
        choiceE.style.pointerEvents = "none";

        checklabel=questions[questionNumber-1].choicesE

        if(checklabel === questions[questionNumber-1].correctanswer){
            correctsDOM.innerHTML++;
        }               
        else {
            mistakesDOM.innerHTML++;
        }
        if(questionNumber == (numberofquestion)){
            startbtnDOM.setAttribute("disabled","disabled")
        }
    })  

    /** Button-E **/

    console.log("questionNumber:",questionNumber);
    let currentnofq = questionNumber-1
    currentnofq++;
    console.log("currentnofq",currentnofq);
    if(questionNumber ==(numberofquestion-1)){
        startbtnDOM.innerHTML="Last Question"
    }
    if(questionNumber == (numberofquestion)){
        startbtnDOM.innerHTML  ="Quiz is over!"
        startbtnDOM.style = "background:red"
        startbtnDOM.setAttribute("disabled","disabled")
        endbtnDOM.style = "display:block"
        endbtnDOM.innerHTML = "Show result!"
    }

})


endbtnDOM.addEventListener("click",()=>{
    contentDOM.style = "display:none"
    console.log("correct nu:",correctsDOM)
    console.log("mistakes nu:",mistakesDOM)
    if(correctsDOM.innerHTML>mistakesDOM.innerHTML){
        tiksignDOM.style = "display:block"
    }else{
        crosssignDOM.style ="display:block"
    }
})






