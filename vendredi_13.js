exports.action = function(data){
var moment = require('moment');moment.locale('fr'); 
    	
JarvisAskMe('Okay... mais pour quelle année...',function(result){
    console.log("Recherche les vendredi 13 de : "+result.trim())
        var result=result

    var mois = new Array("Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre");
    var nbr = new Array("1", "2", "3")

    function vendredi (result) {

        vdd = 0; 
        cetteannee = result; 
        annee = new Date(+result, 0); 
        auj = new Date(); 

        rep = "";  
        s = "";   
        x = "";    
        temps = ""; 

        for (i = 0; i < 12; i++) { annee.setMonth(i, 13);
            if (annee.getDay() == 5) { 
                rep = rep + " le vendredi 13 "+mois[i]+",";
                vdd = vdd + 1; }
                 }
        
        if (vdd != 1) { s = "s"; x = "x"; }

        if (annee.getFullYear() < auj.getFullYear()) { temps = "a eu"; }
        if (annee.getFullYear() > auj.getFullYear()) { temps = "aura"; }
        if (annee.getFullYear() == auj.getFullYear()) { temps = "a"; }

        vdd = nbr[vdd - 1];

        rep = "En " + cetteannee + ", il y en " + temps + " " + vdd + ":" + rep;
       console.log(rep);
        JarvisIASpeech(rep);
    }


vendredi(result);
})//fin ask
}
