using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour {

	public float speed = 50f;
	public float jumpPower = 150f;
	public bool grounded;

	private RigidBody2D rb;

	// Use this for initialization
	void Start () {
		
		rb = gameObject.GetComponent<RigidBody2D>();
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
