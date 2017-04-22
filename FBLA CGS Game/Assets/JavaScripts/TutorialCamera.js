#pragma strict

private var playerObject : GameObject;
private var playerTransform : Transform;
private var cameraShiftX: float = 6;
private var cameraShiftY: float = 5;
private var playerX: double;

function Start () {
	playerObject = GameObject.FindWithTag("Player");
	playerTransform = playerObject.transform;
}

function Update () {
	//if (playerTransform.position.x > -210 && playerTransform.position.x < -50)
		playerX = playerTransform.position.x;
	var playerY = playerTransform.position.y;
	transform.position = new Vector3(playerX + cameraShiftX, playerY + cameraShiftY, transform.position.z);
}