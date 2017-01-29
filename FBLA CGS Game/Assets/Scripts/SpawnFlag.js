#pragma strict

public var level2TextScript : Level2Text;
public var flag : GameObject;
public var originalFlag : GameObject;
private var originalFlagPosition: Vector3;
private var rotation1 : Quaternion;


function Start () {
	rotation1 = Quaternion.identity;
	rotation1.eulerAngles = Vector3(0, 0, 0);
	originalFlagPosition = originalFlag.transform.position;
}

function Update () {
	if (level2TextScript.a1 && level2TextScript.a2 && level2TextScript.a3){
		createFlag();
	}
}

function createFlag(){

	var cBullet1 = Instantiate(flag, originalFlagPosition, rotation1); //Back wall

}
