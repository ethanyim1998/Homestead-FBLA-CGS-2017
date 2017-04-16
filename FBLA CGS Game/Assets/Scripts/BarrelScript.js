#pragma strict

var rb: Rigidbody2D;
var force = 40;

function Start () {
	rb = GetComponent.<Rigidbody2D>();
}


function FixedUpdate () {
	force += 30;
	rb.AddForce(Vector3.down * force);
}


function OnCollisionExit2D(col : Collision2D) 
{

	force = 40;
	if (col.gameObject.name == "Platform 4") {
		Destroy(gameObject);
	}
}