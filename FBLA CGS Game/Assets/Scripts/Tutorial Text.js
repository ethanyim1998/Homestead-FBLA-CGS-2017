#pragma strict

import UnityEngine.UI;

public var textBox : Text;
public var instructions: String[] = ["Welcome to Level 1. This is a tutorial level to learn the basic controls and functionality of the game", 
											 "Use the left and right arrows to move", 
											 "Use the up arrow to jump",
											 "When you reach a portal, press the up arrow to teleport between portals",
											 "When you reach the flag, you will be able to move onto the next level"];
public var player : GameObject;
private var instructionNum : int;
private var leftRightKeyPressed : boolean;
private var upKeyPressed : boolean;
private var firstInstructionDone : boolean;
private var onPortal : boolean;

function Start() 
{
	instructionNum = 0;
	leftRightKeyPressed = false;
	upKeyPressed = false;
	firstInstructionDone = false;
	onPortal = false;
	textBox.text = " ";
	TimerStart();
}


function Update () {
	if ((Input.GetAxis("Horizontal") < -0.1f || Input.GetAxis ("Horizontal") > 0.1f) && firstInstructionDone) 
		leftRightKeyPressed = true;
	else if (leftRightKeyPressed && Input.GetAxis("Vertical") > 0.1f)
		upKeyPressed = true;
}


function TimerStart() : IEnumerator
{
	yield WaitForSeconds(2);
	while(textBox.text != " "){
		yield WaitForSeconds(1);
	}
	printInstructions();
	TimerStart();
}

function OnCollisionEnter(collision: Collision){
	if (collision.gameObject.tag == "Portal"){
		onPortal = true;
	}
}
		



function printInstructions()
{
		var message = instructions[instructionNum];
		if (instructionNum == 0){
			textBox.text = message;
			instructionNum++;
			yield WaitForSeconds(5);
		}
		else if (instructionNum == 1){
			if (leftRightKeyPressed == true){
				textBox.text = message;
				instructionNum++;
				yield WaitForSeconds(5);
			}
		}
		else if (instructionNum == 2){
			if (upKeyPressed == true){
				textBox.text = message;
				instructionNum++;
				yield WaitForSeconds(5);
			}
		}
		else{
			textBox.text = message;
			yield WaitForSeconds(5);
		}

		firstInstructionDone = true;
		textBox.text = " ";
}

