let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
let mn=document.querySelector("#mohan");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-US"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir,Welcome to Rajeev Institute of Technology")
    }
    else if(hours>=12 && hours <16){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognition =new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}
 btn.addEventListener("click",()=>{
                recognition.start()
                voice.style.display="block"
                btn.style.display="none"
            })
   function takeCommand(message){
   voice.style.display="none"
    btn.style.display="flex"
    if(message.includes("hello.  ")||message.includes("hi ")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")|| message.includes("what is your name")){
        speak("i'm Personal Assistent of RIT ");
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank");
    }
    else if(message.includes("open google")){
        speak("opening google...");
        window.open("https://google.com/","_blank")
    }else if(message.includes("open facebook")){
        speak("opening facebook...");
        window.open("https://facebook.com/","_blank");
    }else if(message.includes("open instagram")){
        speak("opening instagram...");
        window.open("https://instagram.com/","_blank");
    }else if(message.includes("open calculator")){
        speak("opening calculator..");
        window.open("calculator://");
    }else if(message.includes("open whatsapp")){
        speak("opening whatsapp..");
        window.open("whatsapp://");
    }else if(message.includes("what is the time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }else if(message.includes(" timetable")){
        speak("opening..");
        // window.open("https://vtu.ac.in/wp-content/uploads/2024/12/TimeTable-Dec.2024_Jan.25_I.pdf");
        window.open("https://github.com/shreekanth09/anolog_clock_using-css-html-js-/blob/main/VTU%20exam%20Timetable.pdf");
     }
    else if(message.includes("information")){
        // window.open("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Rajeev_Institute_of_Technology.JPG/330px-Rajeev_Institute_of_Technology.JPG");
        // window.open("https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRajeev_Institute_of_Technology&psig=AOvVaw3b8Jv1e_zEACoaHBsYYkgH&ust=1734622524807000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjtts7SsYoDFQAAAAAdAAAAABAE");

        window.open("https://en.wikipedia.org/wiki/Rajeev_Institute_of_Technology");
        speak(" it is a private technical co-educational engineering college located in Hassan, Karnataka. It is one of the renowned and reputed Institution among the four Engineering colleges in Hassan City");
    } else if(message.includes("what programs ")){
        speak("The CSE Department offers:Bachelor of Engineering (B.E.) in Computer Science and Engineering: Established in 2008 with an intake of 60 students, increased to 120 from the 2014-15 academic year.");
    }else if(message.includes("what facilities")){
        speak("The department provides:Well-equipped Laboratories: For various computing needs.Library Access: A spacious library with a seating capacity for 150 students, housing over 12,000 volumes and numerous national and international journals.Wi-Fi Enabled Campus: Ensuring internet access throughout.Separate Hostels: For boys and girls, with adequate capacity and facilities");
    }else if(message.includes("who is the founder")){
        speak("Dr. V. Rajeev from Hassan district, founded the Rajeev Institute of Technology (RIT) in 2008 under the Rajeev Education Trust");
    }else if((message.includes("principle"))||(message.includes("principal"))){
        speak("Dr. mahesh P K")
    }else if(message.includes("who is ")){
        window.open("https://rithassan.ac.in/?s=Arjun+sir");
       speak("Dr. Arjun B C serves as the Head of the Department (HOD) Computer Science and Engineering at Rajeev Institute of Technology (RIT), Hassan.")
    }else if((message.includes("locate"))||(message.includes("located"))){
        window.open("https://www.google.com/search?q=where%20is%20the%20rajeev%20institute%20of%20technology%20locate?")
        speak("Rajeev Institute of Technology is located in , Industrial Area, B-M Bypass Road, Hassan, Karnataka")
    }else if((message.includes("which companies visit"))||(message.includes("what company "))){
        window.open("https://www.google.com/search?sca_esv=233a6ef0dcf8d024&rlz=1C1JJTC_enIN1094IN1103&q=campus+companies&udm=2&fbs=AEQNm0Aa4sjWe7Rqy32pFwRj0UkWd8nbOJfsBGGB5IQQO6L3JxdWbs3CkcdlHyEbrNaWhousA6g1P-W7aLn7k_lr4XDtWs7W5tBNejPwIJwUJ16r3jzyqWhg1a39ls4ML3z8pj-Ufp_krMxaJJ4-Mn3vRNfm_coqdrdQ024V3JNK6dad_yTSycrdX1pp0iJH4mG2gyqg_RuszK4V-HMOSu1vGet8w8jt3Q&sa=X&ved=2ahUKEwjnmOCRhbOKAxXDwzgGHZugLkAQtKgLegQIFBAB&biw=1280&bih=585&dpr=1.5")
        speak("Companies like TCS, Wipro, Infosys, Cognizant, Capgemini, Mindtree, HCL, and Continental visit the campus for placements.")
    }else if((message.includes("faculty"))|| (message.includes("faculties"))){
        speak("here are the faculty members of cse department");
        open("/faculty.png");
    } else if(message.includes("can you")){
        speak("here is the information")
       open("/mohan.pdf");
    } else if(message.includes("show")){
        speak("here is the information")
        open("/hem.pdf");
    }else if((message.includes("language"))||(message.includes("languages"))){
        speak(" Students are trained in:Fundamental languages: C, C++, and Python.Advanced languages: Java, R, and Go.Web technologies: HTML, CSS, JavaScript, and React ");
    } else if(message.includes("affiliated ")){
        speak("Yes, RIT is affiliated with Visvesvaraya Technological University (VTU).")
    }

    else if(message.includes("what events ")){
        speak("the department organizes:Coding competitions and hackathonsGuest lectures by industry expertsWorkshops on emerging technologies like AI, ML, and cybersecurity")
     }else if(message.includes("college timings")){
        speak("its 9 AM to 5 P M");
     }else if((message.includes("semister"))|| (message.includes("sem"))){
        speak("here are the fifth sem current lecturers")
        open("/fifth.jpeg");
     }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }else{
        let finalText="this is what i found on internet regarding" + message.replace("","") || message.replace("","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("","")}`,"_blank")
    }

}