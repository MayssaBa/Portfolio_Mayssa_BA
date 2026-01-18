function Valider() {
        form=document.getElementById('quizForm');
        resultat=document.getElementById('resultat');

       
        if(form.q1.value=="" || form.q2.value=="" || form.q3.value=="" || form.q4.value=="" || form.q5.value=="" || form.q6.value=="" || form.q7.value=="" || form.q8.value=="" || form.q9.value=="" || form.q10.value=="" || form.q11.value=="" || form.q12.value=="")
        {   alert("Il faut répondre a tous les questions!!");
            return 0;
        }
        
        score=0;    
        if (form.q1.value === "3") 
        {   score++;
            correctRep("res1");
        }
        else{
            fauxRep("res1",0);
        }

        if (form.q2.value === "3") 
        {   score++;
            correctRep("res2");
        }
        else{
            fauxRep("res2",1);
        }

        if (form.q3.value === "1") 
        {   score++;
            correctRep("res3");
        }
        else{
            fauxRep("res3",2);
        }

        if (form.q4.value === "2") 
        {   score++;
            correctRep("res4");
        }
        else{
            fauxRep("res4",3);
        }

        if (form.q5.value === "1") 
        {   score++;
            correctRep("res5");
        }
        else{
            fauxRep("res5",4);
        }

        if (form.q6.value === "4") 
        {   score++;
            correctRep("res6");
        }
        else{
            fauxRep("res6",5);
        }
        if (form.q7.value === "2") 
        {   score++;
            correctRep("res7");
        }
        else{
            fauxRep("res7",6);
        }
        if (form.q8.value === "3")
        {   score++;
            correctRep("res8");
        }
        else{
            fauxRep("res8",7);
        }
        if (form.q9.value === "2")
        {   score++;
            correctRep("res9");
        }
        else{
            fauxRep("res9",8);
        }
        if (form.q10.value === "1") 
        {   score++;
            correctRep("res10");
        }
        else{
            fauxRep("res10",9);
        }
        if (form.q11.value === "1") 
        {   score++;
            correctRep("res11");
        }
        else{
            fauxRep("res11",10);
        }
        if (form.q12.value === "4") 
        {   score++;
            correctRep("res12");
        }
        else{
            fauxRep("res12",11);
        }
        document.getElementById("score").textContent="Votre score est "+score+" /12";
        
    }

repCorrect = [
            " JavaScript"," HyperText Markup Language"," React"," a",
            " Cascading Style Sheets"," MySQL"," Application Programming Interface",
            " HTML"," color"," src"," PHP"," Système d'exploitation"];

function correctRep(resi){
    document.getElementById(resi).textContent="Réponse correcte.";
    document.getElementById(resi).style.color="green";
    document.getElementById(resi).style.fontWeight="bold";
}
function fauxRep(resi,i){
    document.getElementById(resi).textContent="Réponse incorrecte. La réponse correcte est"+repCorrect[i];
    document.getElementById(resi).style.color="red";
    document.getElementById(resi).style.fontWeight="bold";

}

function envoyer(event) {
    nom=document.getElementById("nom");
    email=document.getElementById("email");
    suj=document.getElementById("sujet");
    msg=document.getElementById("message");

    emailjs.init("VUBx5tyvGR_IZdpFC"); 
    emailjs.send("service_53s7l1i","template_2ru5d4d",{
        from_name: nom.value,
        from_email: email.value,
        subject: suj.value,
        message: msg.value
    });
    nom.value="";
    email.value="";
    suj.value="";
    msg.value="";
    alert("Message envoyé avec succès !");
    
};

document.getElementById("form").addEventListener("submit",envoyer);