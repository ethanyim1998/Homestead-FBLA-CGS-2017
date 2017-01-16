#pragma strict

var rb: Rigidbody;
var forceLeft = -1;
var forceRight = 1;
var travelingLeft = true;
var travelingRight = false;

function Start () {
	rb = GetComponent.<Rigidbody>();
}


function FixedUpdate () {

	if (travelingLeft) {
		forceLeft--;
		rb.AddForce(forceLeft,0,0);
	}
	else if (travelingRight) {
		forceRight++;
		rb.AddForce(forceRight,0,0);
	}
}


function OnCollisionExit(col : Collision) 
{
	if (col.gameObject.tag == "Platform 1" || col.gameObject.tag == "Platform 3") {
		travelingLeft = false;
		travelingRight = true;
		forceRight = 1;

	}
	else if (col.gameObject.tag == "Platform 2") {
		travelingLeft = true;
		travelingRight = false;
		forceLeft = -1;
	}
	else if (col.gameObject.tag == "Platform 4") {
		Destroy(gameObject);
		Debug.Log("Destroyed");
	}

}