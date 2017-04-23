#pragma strict

public var parentPortal : GameObject;
private var onPortal : boolean = false;
private var portal: GameObject;
private var teleLocX : float;
private var teleLocY : float;
public var isHit : boolean = false;
public var rb: Rigidbody2D;
public var loadingImage: Image;
private var transparentColor : Color;
private var originalColor: Color;
public static var loadedLevelName : String;


function Start(){
	//Part below is initialized in the start() method because the Rigidbody 
	//does not exist before the game is running.
	rb = GetComponent.<Rigidbody2D>();
	originalColor = loadingImage.color;
	loadingImage.color.a = 0;
}


function FixedUpdate(){
	teleport();
	loadedLevelName = Application.loadedLevelName;
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
		if (loadedLevelName == "Scene 2")
			loadingImage.color.a = originalColor.a;
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
	if (loadedLevelName == "Scene 1" || loadedLevelName == "Scene 2")
		SceneManager.LoadScene("Loading");
	else
		SceneManager.LoadScene("Scoreboard");

}

