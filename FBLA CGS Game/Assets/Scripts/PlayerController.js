#pragma strict

public var parentPortal : GameObject;
private var onPortal : boolean = false;
private var portal: GameObject;
private var teleLocX : float;
private var teleLocY : float;
public var isHit : boolean = false;
public var rb: Rigidbody2D;


function Start(){
	//Part below is initialized in the start() method because the Rigidbody 
	//does not exist before the game is running.
	rb = GetComponent.<Rigidbody2D>();
}


function FixedUpdate(){
	teleport();
}


function OnCollisionEnter2D(collision: Collision2D){
	if (collision.gameObject.tag == "Barrel"){
		isHit = true;
		Destroy(collision.gameObject);
	}
}

function OnTriggerStay2D(collision : Collider2D){
	if(collision.gameObject.tag == "Portal"){
		onPortal = true;
		portal = collision.gameObject;
	}
}

function OnTriggerEnter2D(collision : Collider2D){
	if (collision.gameObject.tag == "Flag"){
		changeScene();
	}
}


function OnTriggerExit2D(collision: Collider2D){
	if(collision.gameObject.tag == "Portal"){
		onPortal = false;
	}
}


function teleport(){
	if (onPortal && Input.GetKeyDown(KeyCode.Space)){
		var randomIndex = Random.Range(0, parentPortal.transform.childCount);
		var portalSub = parentPortal.transform.GetChild(randomIndex).gameObject;
		while (portal == portalSub){
			randomIndex = Random.Range(0, parentPortal.transform.childCount);
			portalSub = parentPortal.transform.GetChild(randomIndex).gameObject;
		}
		teleLocX = portalSub.transform.position.x;
		teleLocY = portalSub.transform.position.y;
		this.gameObject.transform.position = Vector3(teleLocX, teleLocY, 0);
	}
}

function changeScene(){
	if (Application.loadedLevelName == "Scene 1")
		SceneManager.LoadScene("Scene 2");
	else if (Application.loadedLevelName == "Scene 2")
		SceneManager.LoadScene("Scene 3");
	else if (Application.loadedLevelName == "Scene 3")
		SceneManager.LoadScene("Scoreboard");

}

