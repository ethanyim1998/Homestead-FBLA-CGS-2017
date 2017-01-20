#pragma strict


public var moveSpeed : float = 30;
public var jumpVelocity : int = 30;
public var artificialGravity : int = -15000;
public var parentPortal : GameObject;
private var isFalling : boolean = false;
private var onPortal : boolean = false;
private var portal: GameObject;
private var teleLocX : int;
private var teleLocY : int;

private var rb : Rigidbody;


function Start(){
	//Part below is initialized in the start() method because the Rigidbody 
	//does not exist before the game is running.
	rb = GetComponent.<Rigidbody>();
}


function FixedUpdate(){
	moveHorizontal();
	jump();
	teleport();
}


function OnCollisionEnter(collision: Collision){
/*
	if(collision.gameObject.tag == "Platform 5"){
		isFalling = false;
	}
*/
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

function OnTriggerEnter(collision : Collider){
	if(collision.gameObject.tag == "Portal"){
			onPortal = true;
	}
}

function OnTriggerExit(collision: Collider){
	if(collision.gameObject.tag == "Portal"){
		onPortal = false;
		Debug.Log("Portal Collision Stopped");

	}
}

function moveHorizontal(){
	var move = Vector3(Input.GetAxis("Horizontal"), 0, 0);
	transform.position += move * moveSpeed * Time.deltaTime;
}


function jump(){

    if((Input.GetKeyDown(KeyCode.UpArrow)) && !isFalling){
        rb.velocity = Vector3(0,jumpVelocity,0);
    }

}

function applyArtificialGravity(){
	yield WaitForSeconds(.3);
	rb.AddForce(0,artificialGravity,0);
}

function teleport(){
	if (onPortal && Input.GetKeyDown(KeyCode.UpArrow)){
		Debug.Log("TELEPORT WORKING");
		var randomIndex = Random.Range(0, parentPortal.transform.childCount);
		portal = parentPortal.transform.GetChild(randomIndex).gameObject;
		teleLocX = portal.transform.position.x;
		teleLocY = portal.transform.position.y;
		this.gameObject.transform.position = Vector3(teleLocX, teleLocY, 0);
	}
		
}

