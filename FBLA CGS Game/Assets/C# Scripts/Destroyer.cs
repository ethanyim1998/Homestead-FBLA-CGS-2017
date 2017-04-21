using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroyer : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	
	
	void OnTriggerEnter(Collider other)
	{
		print("regular collide");
		Destroy(other.gameObject);
	}

	void OnTriggerEnter2D(Collider2D other) {
		print("2d collide");
		Destroy(other.gameObject);
	}
}
