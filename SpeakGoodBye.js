// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (window) {    //IIFE OLUSUMU SPEAKGOODBYE.JS ICIN

    // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    // var byeSpeaker =
    var byeSpeaker = {};    //NESNE YARATILIYOR


    // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye"; //SELAMLAMA METNI ICIN DEGISKEN OLUSUMU


    // STEP 8: Rewrite the 'speak' function such that it is attached to the
    // byeSpeaker object instead of being a standalone function.
    // See Lecture 52, part 2
    /*function speak(name) {
        console.log(speakWord + " " + name);
    }*/
    byeSpeaker.sayBye = function speak(name) { //FONKSIYONU NESNEYE BAGLIYORUZ
        console.log(speakWord + " " + name);    //CONSOLA YAZI YAZIMI
    }


    // STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
    // 'byeSpeaker' on the global scope as well.
    // xxxx.xxxx = byeSpeaker;
    window.byeSpeaker = byeSpeaker;      //SCRIPT.JS'DEN SPEAKGOODBYE.JS ICERISINDEKI BYESPEAKER ADLI NESNEYE ERISIM ICIN GLOBAL SCOPE

})(window);