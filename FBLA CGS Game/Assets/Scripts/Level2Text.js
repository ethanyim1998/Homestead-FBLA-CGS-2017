#pragma strict

import UnityEngine.UI;

public var textBox : Text;
public var instructions: String[] = ["Level 2: Business Questions",
									 "You must answer the following three questions to advance onto the next level", 
									 "Go to a question mark to receive a question",
									 "Choose an answer by pressing A, B, C, or D on your keyboard",
									 "Once you correctly answer all three, the flag will appear"];
public var questionAndAnswer: String[] = ["Which type of business is the hardest to start?" + System.Environment.NewLine + "A) Sole Proprietorship" + System.Environment.NewLine + "B) Partnership" + System.Environment.NewLine + "C) Corporation",
										  "Situation in which a firm legally cease to exist when an owner dies, quits, or a new owner is added is..." + System.Environment.NewLine + "A) Limited Life" + System.Environment.NewLine + "B) Unlimited Life" + System.Environment.NewLine + "C) Liquidity",
										  "Philosophy that goverment should not interfere with business activity is..." + System.Environment.NewLine + "A) Laissez-faire" + System.Environment.NewLine + "B) Law of Demand" + System.Environment.NewLine + "C) Lockout" ];
public var rb: Rigidbody2D;
private var instructionNum : int;
private var questionNum: int;


function Start() 
{
	rb = GetComponent.<Rigidbody2D>();
	instructionNum = 0;
	questionNum = 0;
	textBox.text = " ";
	yield WaitForSeconds(2);
	TimerStart();
}


function TimerStart() : IEnumerator
{
	if (instructionNum < instructions.Length){
		printInstructions();
		yield WaitForSeconds(6);
		TimerStart();
	}
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


function OnTriggerEnter2D(collision : Collider2D){
	var message;
	if (instructionNum == instructions.Length){
		if (collision.gameObject.name == "Question Mark 1"){
			message = questionAndAnswer[0];
			textBox.text = message;
		}
		else if (collision.gameObject.name == "Question Mark 2"){
			message = questionAndAnswer[1];
			textBox.text = message;
		}
		else if (collision.gameObject.name == "Question Mark 3"){
			message = questionAndAnswer[2];
			textBox.text = message;
		}
	}
}

