#pragma strict
import UnityEngine.UI;

public var Ishil : HPController;
public static var currentTime : float;
public var text : Text;

function Start () {
	currentTime = 0;
}

function Update () {
	if(Ishil.DeathSoundPlayed==false){
		currentTime += Time.deltaTime;
		currentTime = Mathf.Round(currentTime * 100)/100;
	}
	text.text = "Time: " + currentTime.ToString() + " seconds";	
}

function getFinal(){
	return currentTime;
}