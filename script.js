var input = document.getElementById("doorinput");
var button = document.getElementById("enterbutton")

function inputValue() {
	return input.value;
}

function inputLength() {
	return input.value.length;
}

function openDoorAfterClick() {
	if (inputLength() > 0) {
		openDoor();
	}
}
function openDoorAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		openDoor();
	}
}

// function openPage() {
//     alert("Which door do you choose to open... One, two, three, or four?")
//     alert("Enter your choice below... if you dare!!!1!1!")
// }

function openDoor() {
    var whatsBehindDoor;
    switch (inputValue()) {
        // Open door one
        case "one":
            whatsBehindDoor = "Behind the door is... A breifcase with 1 trillion dollars...!" 
            + " that causes your limbs to fall of when you spend it.";
            break;
        case "1":
            whatsBehindDoor = "Behind the door is... A breifcase with 1 trillion dollars...!" 
            + " that causes your limbs to fall of when you spend it.";
            break;
        // Open door two
        case "two":
            whatsBehindDoor = "Behind the door is... The person of your dreams...! "
            + " but they sell Mary Kay products.";
            break;
		case "2":
            whatsBehindDoor = "Behind the door is... The person of your dreams...! "
            + " but they sell Mary Kay products.";
            break;
        // Open door three
        case "three":
            whatsBehindDoor = "Behind the door is... The gift of flight...! but you can only "
            + " fly three feet off of the ground.";
            break;
        case "3":
            whatsBehindDoor = "Behind the door is... The gift of flight...! but you can only "
            + " fly three feet off of the ground.";
            break;
        // Open door three
        case "four":
            whatsBehindDoor = "Behind the door is... The gift of acceptance...!"
            break;
        case "4":
            whatsBehindDoor = "Behind the door is... The gift of acceptance...!"
            break;
        default:
            whatsBehindDoor = "Which door do you choose to open... One, two, three, or four?"
    }
    return alert(whatsBehindDoor);
}

// addEventListener("load", openPage);
input.addEventListener("keypress", openDoorAfterKeypress);
button.addEventListener("click", openDoorAfterClick);