#pragma strict

var rb: Rigidbody2D;
var force = 30;

function Start () {
	rb = GetComponent.<Rigidbody2D>();
}


function FixedUpdate () {
	force += 15;
	rb.AddForce(Vector3.down * force);
}


function OnCollisionExit2D(col : Collision2D) 
{

	force = 30;
	if (col.gameObject.name == "Platform 4") {
		Destroy(gameObject);
	}
}