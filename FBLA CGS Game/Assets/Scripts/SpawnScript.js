#pragma strict

public var originalBarrel: GameObject;
public var barrel : GameObject;
private var originalBarrelPosition: Vector3;
private var nextFire : float;
private var rotation1 : Quaternion;
public var bScript : BulletScript;


function Start(){

	nextFire = 3.0;

	rotation1 = Quaternion.identity;
	rotation1.eulerAngles = Vector3(0, 0, 0);

	originalBarrelPosition = originalBarrel.transform.position;
}


function Update () {
	createBarrel();
}


function createBarrel(){
	if(Time.timeSinceLevelLoad > nextFire){
		nextFire = Time.timeSinceLevelLoad + Random.Range(3, 6);

		//Part below for creating barrels
		var cBullet1 = Instantiate(barrel, originalBarrelPosition, rotation1); //Back wall

	}
}