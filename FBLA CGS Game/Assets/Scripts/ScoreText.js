#pragma strict

import UnityEngine.UI;

public var textBox : Text;

function Start() 
{
	textBox.text = "YOUR SCORE: " + getScore();
}


function getScore()
{
	return Random.Range(8000, 12000);
}

