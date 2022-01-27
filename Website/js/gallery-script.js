window.onload = function() {

    $("reset").onclick = function(){resetValues();}

    $("cuboid").onclick = function(){cuboidCalculation();}
    $("cylinder").onclick = function(){cylinderCalculation();}
    $("sphere").onclick = function(){sphereCalculation();}

    $("run").onclick = function(){runJavaExample();}
    $("clear").onclick = function(){clearWord();}
    $("enter").onclick = function(){enterWord();}
}

var $ = function(id) {
    
    return document.getElementById(id);
}


// Run Java Example Function
var runJavaExample = function() {
    
    var enteredWord = $("enteredWord").value;
    $("output").innerHTML = reverseWord(enteredWord);
}

function reverseWord(str) {
    var result = "";

    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

// Clear Java Example Function
var clearWord = function() {

    $("wordToReverse").innerHTML = '';
    $("enteredWord").value = '';
    $("output").innerHTML = '';
}

// Enter Word Example Function
var enterWord = function() {

    var enteredWord = $("enteredWord").value;
    $("wordToReverse").innerHTML = enteredWord;
}


// Reset Button Function
var resetValues = function() {

    var resetMessage = '<p style="text-align: left;">Reset Button Pressed.</p>';
    $("length").value = "";
    $("width").value = "";
    $("height").value = "";
    $("radius").value = "";

    $("cuboid").checked = false;
    $("cylinder").checked = false;
    $("sphere").checked = false;

    $("selected").innerHTML = '';
    $("formula").innerHTML = '';

    $("answer-title").innerHTML = '';
    $("answer").innerHTML = '';

    $("length").disabled = true;
    $("width").disabled = true;
    $("height").disabled = true;
    $("radius").disabled = true;

    $("message").innerHTML = resetMessage;
}

// Cuboid Function
var cuboidCalculation = function() {

    var cuboidSelected = 'Cuboid Selected';
    var cuboidFormula = 'Length (l) x Width (w) x Height (h)';

    $("formula").innerHTML = cuboidFormula;
    $("selected").innerHTML = cuboidSelected;

    $("cylinder").checked = false;
    $("sphere").checked = false;

    $("length").disabled = false;
    $("width").disabled = false;
    $("height").disabled = false;
    $("radius").disabled = true;

    // Calculations
    $("calculate").onclick = function() {

        var errorMessage = '<p style="color:red; text-align:left;">Error. The Values you entered were not numerical. Please try again.</p>';
        var calculatingMessage = '<p style="color:green; text-align:left;">Calculating....</p>';
        var answerTitle = 'The Volume of your Cuboid is:';

        var length = $("length").value;
        var width = $("width").value;
        var height = $("height").value;

        if (isNaN(length) || isNaN(width) || isNaN(height)) {
            $("message").innerHTML = errorMessage;
        }
        else {
            $("message").innerHTML = calculatingMessage;
            length = parseFloat(length);
            width = parseFloat(width);
            height = parseFloat(height);

            $("answer-title").innerHTML = answerTitle;

            var cuboidVolume = length * width * height;
            $("answer").innerHTML = (cuboidVolume).toFixed(2) + 'cm³';
        }
    }
}

// Cylinder Function
var cylinderCalculation = function() {

    var cylinderSelected = 'Cylinder Selected';
    var cylinderFormula = 'Pi (π) x Radius Squared (r²) x Height (h)';

    $("formula").innerHTML = cylinderFormula;
    $("selected").innerHTML = cylinderSelected;

    $("cuboid").checked = false;
    $("sphere").checked = false;

    $("length").disabled = true;
    $("width").disabled = true;
    $("height").disabled = false;
    $("radius").disabled = false;

    // Calculations
    $("calculate").onclick = function() {

        var errorMessage = '<p style="color:red; text-align:left;">Error. The Values you entered were not numerical. Please try again.</p>';
        var calculatingMessage = '<p style="color:green; text-align:left;">Calculating....</p>';
        var answerTitle = 'The Volume of your Cylinder is:';

        var radius = $("radius").value;
        var height = $("height").value;

        if (isNaN(radius) || isNaN(height)) {
            $("message").innerHTML = errorMessage;
        }
        else {
            $("message").innerHTML = calculatingMessage;
            radius = parseFloat(radius);
            height = parseFloat(height);

            $("answer-title").innerHTML = answerTitle;

            var cylinderVolume = Math.PI * (radius * radius) * height;
            $("answer").innerHTML = (cylinderVolume).toFixed(2) + 'cm³';
        }
    }
}


// Sphere Function
var sphereCalculation = function() {

    var sphereSelected = 'Sphere Selected';
    var sphereFormula = '4/3 x Pi (π) x Radius Cubed (r³)';

    $("formula").innerHTML = sphereFormula;
    $("selected").innerHTML = sphereSelected;

    $("cuboid").checked = false;
    $("cylinder").checked = false;

    $("length").disabled = true;
    $("width").disabled = true;
    $("height").disabled = true;
    $("radius").disabled = false;

    // Calculations
    $("calculate").onclick = function() {

        var errorMessage = '<p style="color:red; text-align:left;">Error. The Values you entered were not numerical. Please try again.</p>';
        var calculatingMessage = '<p style="color:green; text-align:left;">Calculating....</p>';
        var answerTitle = 'The Volume of your Cuboid is:';

        var radius = $("radius").value;

        if (isNaN(radius)) {
            $("message").innerHTML = errorMessage;
        }
        else {
            $("message").innerHTML = calculatingMessage;
            radius = parseFloat(radius);

            $("answer-title").innerHTML = answerTitle;

            var sphereVolume = (4/3) * Math.PI * (radius * radius * radius);
            $("answer").innerHTML = (sphereVolume).toFixed(2) + 'cm³';
        }
    }
}