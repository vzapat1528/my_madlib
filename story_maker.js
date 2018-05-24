function makeStory() {

    alert("It works!");

    // get form values
    var funnyWord = document.getElementById('funnyWord').value.bold();
    var adjective1 = document.getElementById('adjective1').value.bold();
    var adjective2 = document.getElementById('adjective2').value.bold();
    var adjective3 = document.getElementById('adjective3').value.bold();
    var animal = document.getElementById('animal').value.bold();
    var noun1 = document.getElementById('noun1').value.bold();
    var noun2 = document.getElementById('noun2').value.bold();
    var noun3 = document.getElementById('noun3').value.bold();
    var noun4 = document.getElementById('noun4').value.bold();
    var noun5 = document.getElementById('noun5').value.bold();
    var noun6 = document.getElementById('noun6').value.bold();
    var noun7 = document.getElementById('noun7').value.bold();
    var pluralNoun = document.getElementById('pluralNoun').value.bold();
    var TypeOfLiquid1 = document.getElementById('TypeOfLiquid1').value.bold();
    var TypeOfLiquid2 = document.getElementById('TypeOfLiquid2').value.bold();


    // Set title of story.
    var title = "The Amazing Randy";


    // Build story.
    var paragraph1 = "Recently on TV, I saw an amazing magician and escape artist. Both of";
    var paragraph2 = " his " + pluralNoun + " were laced up in a straitjacket, and he was";
    var paragraph3 = " suspended by a " + noun1 + " 60 feet in the air over a busy ";
    var paragraph4 = noun2 + " and he escaped! A man who can do that must be a real " + noun3 + ".";
    var paragraph5 = " I saw a magician once who put a(an) " + animal + " in a ";
    var paragraph6 = noun4 + " and then waved his magic " + noun5 + " and";
    var paragraph7 = " made it disappear. I saw another " + adjective1 + " magician who sawed";
    var paragraph8 = " a beautiful " + noun6 + " in half right on stage. If you practice hard,";
    var paragraph9 = " there are several " + adjective2 + " magic tricks you can learn to do. For";
    var paragraph10 = " instance, you can learn how to take a glass of " + TypeOfLiquid1 + " and";
    var paragraph11 = " turn it into " + TypeOfLiquid2 + ". Or you can wave a  " + adjective3 + " wand in the air and make it turn into a red ";
    var paragraph12 =  noun7 + ". All you have to do is memorize the secret magic word, " + funnyWord + ".";

    // Display story.

    document.getElementById('title').innerHTML = title
    document.getElementById('paragraph1').innerHTML = paragraph1;
    document.getElementById('paragraph2').innerHTML = paragraph2;
    document.getElementById('paragraph3').innerHTML = paragraph3;
    document.getElementById('paragraph4').innerHTML = paragraph4
    document.getElementById('paragraph5').innerHTML = paragraph5
    document.getElementById('paragraph6').innerHTML = paragraph6
    document.getElementById('paragraph7').innerHTML = paragraph7
    document.getElementById('paragraph8').innerHTML = paragraph8
    document.getElementById('paragraph9').innerHTML = paragraph9
    document.getElementById('paragraph10').innerHTML = paragraph10
    document.getElementById('paragraph11').innerHTML = paragraph11
    document.getElementById('paragraph12').innerHTML = paragraph12
    document.getElementById('img').style.display = "block";




}
