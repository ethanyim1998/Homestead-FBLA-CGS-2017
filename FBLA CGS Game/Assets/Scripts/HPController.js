#pragma strict

import UnityEngine.UI;
import UnityEngine.SceneManagement;

public var health : Text;
public var maxHP : int;
public var currentHP : int;
//public var DeathSound : AudioClip;
//public var DeathAudioSource : AudioSource;
public var DamageImage : Image;
public var player : PlayerController;

private var time : float; 
public var DeathSoundPlayed : boolean = false;
private var RestartTimer : float;
private var HitImage : boolean=false; 
private var EmptyColor : Color;

function Start () {
	//Kevin = gameObject.GetComponent(Text) as Text; 

	currentHP = maxHP; 
	health.text = currentHP.ToString();
	time= Time.time;
	EmptyColor = DamageImage.color;
	EmptyColor.a = 0;
}

function Update () {
	
	HitTest();
	health.text = currentHP.ToString();

	if(currentHP<=0)
	{
		RestartTimer+=Time.deltaTime;
	}
	/*
	if(currentHP<=0 && DeathSoundPlayed==false)
	{
		DeathSoundPlayed=true;
	}
	*/
	if(RestartTimer>=0.6)
	{
		//To change into the game over screen.
		SceneManager.LoadScene("GameOver");
	}
}


function HitTest() {
	if(player.isHit)
	{
		Debug.Log("Player Got Hit");
		HitImage = true;
	}

	if(HitImage)
	{
		if (currentHP >=  0){
			currentHP--;
			health.text = currentHP.ToString();
			Debug.Log(Time.timeSinceLevelLoad);
			DamageImage.color.a = 255;
			HitImage=false;
			player.isHit=false;
		}

	}
	else
	{
		DamageImage.color = Color.Lerp (DamageImage.color, EmptyColor, 10.0 * Time.deltaTime);
	}
}