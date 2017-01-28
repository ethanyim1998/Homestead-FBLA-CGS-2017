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
/*
	if (col.gameObject.tag == "Platform 1" || col.gameObject.tag == "Platform 3") {
		force = 30;

	}
	else if (col.gameObject.tag == "Platform 2") {
		force = 30;
	}
	*/
	force = 30;
	if (col.gameObject.tag == "Platform 4") {
		Destroy(gameObject);
		Debug.Log("Destroyed");
	}

}