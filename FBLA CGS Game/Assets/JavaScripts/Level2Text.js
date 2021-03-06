﻿#pragma strict

import UnityEngine.UI;

public var textBox : Text;
public var instructions: String[] = ["Level 2: Business Questions",
									 "Using your keybaord, answer the following three questions to advance onto the next level"];
public var questionAndAnswer: String[] = ["Which type of business is the hardest to start?" + System.Environment.NewLine + "A) Sole Proprietorship" + System.Environment.NewLine + "B) Partnership" + System.Environment.NewLine + "C) Corporation",
										  "Situation in which a firm legally cease to exist when an owner dies, quits, or a new owner is added is..." + System.Environment.NewLine + "A) Limited Life" + System.Environment.NewLine + "B) Unlimited Life" + System.Environment.NewLine + "C) Liquidity",
										  "Philosophy that goverment should not interfere with business activity is..." + System.Environment.NewLine + "A) Laissez-faire" + System.Environment.NewLine + "B) Law of Demand" + System.Environment.NewLine + "C) Lockout" ];
public var rb: Rigidbody2D;
private var instructionNum : int;
private var questionNum: int;
private var message: String;
private var onQuestionMark : boolean;
private var q1 : boolean;
private var q2 : boolean;
private var q3 : boolean;
public var a1 : boolean;
public var a2 : boolean;
public var a3 : boolean;


function Start() 
{
	rb = GetComponent.<Rigidbody2D>();
	instructionNum = 0;
	questionNum = 0;
	textBox.text = " ";
	onQuestionMark = false;
	q1 = false;
	q2 = false;
	q3 = false;
	a1 = false;
	a2 = false;
	a3 = false;
	yield WaitForSeconds(2);
	TimerStart();
}


function Update()
{
	if (onQuestionMark == true){
		if (q1 == true && a1 == false){
			var e : Event = Event.current;
			if(Input.GetKeyDown(KeyCode.C)){
				message = "Correct!";
				a1 = true;
			}
			else if (Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.B)) {
				message = "Incorrect!";
			}

		}
		else if (q2 == true && a2 == false){
			if(Input.GetKeyDown(KeyCode.A)){
				message = "Correct!";
				a2 = true;
			}
			else if (Input.GetKeyDown(KeyCode.B) || Input.GetKeyDown(KeyCode.C)) {
				message = "Incorrect!";
			}

		}
		else if (q3 == true && a3 == false){
			if(Input.GetKeyDown(KeyCode.A)){
				message = "Correct!";
				a3 = true;
			}
			else if (Input.GetKeyDown(KeyCode.B) || Input.GetKeyDown(KeyCode.C)) {
				message = "Incorrect!";
			}
		}
		textBox.text = message;
	}

}


function TimerStart() : IEnumerator
{
	if (instructionNum < instructions.Length){
		printInstructions();
		yield WaitForSeconds(4);
		TimerStart();
	}
}


function printInstructions()
{
	message = instructions[instructionNum];
	textBox.text = message;
	instructionNum++;
	yield WaitForSeconds(3);
	message = " ";
	textBox.text = message;
	yield WaitForSeconds(1);
}


function OnTriggerEnter2D(collision : Collider2D){
	if (instructionNum == instructions.Length){
		if (collision.gameObject.name == "Question Mark 1" && a1 == false){
			message = questionAndAnswer[0];
			textBox.text = message;
			onQuestionMark = true;
			q1 = true;
		}
		else if (collision.gameObject.name == "Question Mark 2" && a2 == false){
			message = questionAndAnswer[1];
			textBox.text = message;
			onQuestionMark = true;
			q2 = true;

		}
		else if (collision.gameObject.name == "Question Mark 3" && a3 == false){
			message = questionAndAnswer[2];
			textBox.text = message;
			onQuestionMark = true;
			q3 = true;

		}
	}
}


function OnTriggerExit2D(collision : Collider2D){
	if (collision.gameObject.tag == "Question"){
		message = " ";
		textBox.text = message;
		q1 = false;
		q2 = false;
		q3 = false;
		onQuestionMark = false;
		if (collision.gameObject.name == "Question Mark 1" && a1)
			Destroy(collision.gameObject);
		else if (collision.gameObject.name == "Question Mark 2" && a2)
			Destroy(collision.gameObject);
		else if (collision.gameObject.name == "Question Mark 3" && a3)
			Destroy(collision.gameObject);
	}

}
