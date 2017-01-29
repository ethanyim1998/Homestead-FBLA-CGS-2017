#pragma strict

import UnityEngine.UI;

public var textBox : Text;
public var instructions: String[] = ["Level 2: Business Questions",
									 "You must answer the following three questions to advance onto the next level", 
									 "Go to a question mark to receive a question",
									 "Choose an answer by pressing A, B, C, or D on your keyboard",
									 "Once you correctly answer all three, the flag will appear"];
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
	yield WaitForSeconds(6);
	TimerStart();
}


function printInstructions()
{
	var message = instructions[instructionNum];
	textBox.text = message;
	instructionNum++;
	yield WaitForSeconds(4);
	textBox.text = " ";
	yield WaitForSeconds(2);
}

