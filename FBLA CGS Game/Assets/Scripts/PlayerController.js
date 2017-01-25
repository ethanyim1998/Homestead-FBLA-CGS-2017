#pragma strict


public var moveSpeed : float = 30;
public var jumpVelocity : int = 30;
public var artificialGravity : int = -15000;
public var parentPortal : GameObject;
private var isFalling : boolean = false;
private var onPortal : boolean = false;
private var portal: GameObject;
private var teleLocX : float;
private var teleLocY : float;
public var isHit : boolean = false;

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
	if(collision.gameObject.tag == "Platform 5" || collision.gameObject.tag == "Platform 4" || collision.gameObject.tag == "Platform 3" ||
	   collision.gameObject.tag == "Platform 2" || collision.gameObject.tag == "Platform 1" ){
		isFalling = false;
	}
	if (collision.gameObject.tag == "Barrel"){
		isHit = true;
		Destroy(collision.gameObject);
	}
}


function OnCollisionExit(collision: Collision){
	if(collision.gameObject.tag == "Platform 5" || collision.gameObject.tag == "Platform 4" || collision.gameObject.tag == "Platform 3" ||
	   collision.gameObject.tag == "Platform 2" || collision.gameObject.tag == "Platform 1" ){
		isFalling = true;
		applyArtificialGravity();
	}
}

function OnTriggerEnter(collision : Collider){
	if(collision.gameObject.tag == "Portal"){
			onPortal = true;
			portal = collision.gameObject;
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
    if((Input.GetKeyDown(KeyCode.UpArrow)) && !isFalling && !onPortal){
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
		var portalSub = parentPortal.transform.GetChild(randomIndex).gameObject;
		while (portal == portalSub){
			randomIndex = Random.Range(0, parentPortal.transform.childCount);
			portalSub = parentPortal.transform.GetChild(randomIndex).gameObject;
		}
		teleLocX = portalSub.transform.position.x;
		teleLocY = portalSub.transform.position.y -2;
		this.gameObject.transform.position = Vector3(teleLocX, teleLocY, 0);
	}
}

