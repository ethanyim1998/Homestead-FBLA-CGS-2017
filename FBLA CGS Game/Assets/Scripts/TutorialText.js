#pragma strict

import UnityEngine.UI;

public var textBox : Text;
public var instructions: String[] = ["Level 1: Tutorial",
									 "Use the left and right arrows to move", 
									 "Use the up arrow to jump",
									 "When you reach a portal, press the space bar to teleport between portals",
									 "When you reach the flag, you will be able to move onto the next level"];
private var instructionNum : int;


function Start() 
{
	instructionNum = 0;
	textBox.text = " ";
	yield WaitForSeconds(2);
	TimerStart();
}


function TimerStart() : IEnumerator
{
	printInstructions();
	yield WaitForSeconds(8);
	TimerStart();
}


function printInstructions()
{
	var message = instructions[instructionNum];
	textBox.text = message;
	instructionNum++;
	yield WaitForSeconds(5);
	textBox.text = " ";
	yield WaitForSeconds(3);
}

