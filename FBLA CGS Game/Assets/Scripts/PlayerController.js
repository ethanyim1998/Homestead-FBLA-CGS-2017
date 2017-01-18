#pragma strict


public var moveSpeed : float = 30;
public var jumpVelocity : int = 30;
private var isFalling : boolean = false;
private var rb : Rigidbody;


function Start(){
	//Part below is initialized in the start() method because the Rigidbody 
	//does not exist before the game is running.
	rb = GetComponent.<Rigidbody>();
}


function FixedUpdate(){
	moveHorizontal();
	jump();
}


function OnCollisionEnter(collision: Collision){
	if(collision.gameObject.tag == "Platform 5"){
		isFalling = false;
	}
}


function OnCollisionExit(collision: Collision){
	if(collision.gameObject.tag == "Platform 5"){
		isFalling = true;
		applyArtificialGravity();
	}
}


function moveHorizontal(){
	var move = Vector3(Input.GetAxis("Horizontal"), 0, 0);
	transform.position += move * moveSpeed * Time.deltaTime;
}


function jump(){

    if((Input.GetKeyDown(KeyCode.UpArrow) || Input.GetKeyDown(KeyCode.Space)) && !isFalling){
        rb.velocity = Vector3(0,jumpVelocity,0);
    }

}

function applyArtificialGravity(){
	yield WaitForSeconds(.3);
	rb.AddForce(0,-15000,0);
}

