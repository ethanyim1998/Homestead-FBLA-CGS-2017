#pragma strict

import UnityEngine.UI;

public var textBox : Text;
public var instructions: String[] = ["Survive"];
private var instructionNum : int;


function Start() 
{
	instructionNum = 0;
	textBox.text = " ";
	yield WaitForSeconds(1);
	TimerStart();
}


function TimerStart() : IEnumerator
{
	printInstructions();
	yield WaitForSeconds(4);
	TimerStart();
}


function printInstructions()
{	if (instructionNum < instructions.Length){
		var message = instructions[instructionNum];
		textBox.text = message;
		instructionNum++;
	}
	yield WaitForSeconds(3);
	textBox.text = " ";
	yield WaitForSeconds(1);
}

