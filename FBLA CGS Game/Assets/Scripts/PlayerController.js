#pragma strict

public var parentPortal : GameObject;
private var onPortal : boolean = false;
private var portal: GameObject;
private var teleLocX : float;
private var teleLocY : float;
public var isHit : boolean = false;

var rb: Rigidbody2D;


function Start(){
	//Part below is initialized in the start() method because the Rigidbody 
	//does not exist before the game is running.
	rb = GetComponent.<Rigidbody2D>();
}


function FixedUpdate(){
	teleport();
}


function OnCollisionEnter(collision: Collision){
	if (collision.gameObject.tag == "Barrel"){
		isHit = true;
		Destroy(collision.gameObject);
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

