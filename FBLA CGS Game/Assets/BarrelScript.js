#pragma strict

var thrust : float;
var rb : Rigidbody;
var rollingRight;

function Start () {
	rb = GetComponent.<Rigidbody>();
	rollingRight = false;

}

function Update () {
	if (!rollingRight)
		rb.AddForce(Vector3(-30, -0, 0));
	else
		rb.AddForce(Vector3(30, -0, 0));
}

function OnCollisionStay (col : Collision){
    if(col.gameObject.tag == "Platform 1" || col.gameObject.tag == "Platform 3")
        rollingRight = false;
    else if (col.gameObject.tag == "Platform 2" || col.gameObject.tag == "Platform 4")
    	rollingRight = true;

    Debug.Log("Hit");
}
   