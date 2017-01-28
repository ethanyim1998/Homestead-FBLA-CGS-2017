﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerNoSprite : MonoBehaviour {

	public float speed = 50f;
	public float maxSpeed = 4;
	public float jumpPower = 500f;
	public bool grounded;

	public Rigidbody2D rb;
	//private Animator anim;

	// Use this for initialization
	void Start () {
		
		rb = gameObject.GetComponent<Rigidbody2D>();
		//anim = gameObject.GetComponent<Animator>();
		
	}
	
	// Update is called once per frame
	void Update () {
		//anim.SetBool("Grounded", grounded);
		//anim.SetFloat("Speed", Mathf.Abs(Input.GetAxis("Horizontal")));

		
	}


	void /// <summary>
	/// This function is called every fixed framerate frame, if the MonoBehaviour is enabled.
	/// </summary>
	FixedUpdate()
	{
		float horiz = Input.GetAxis("Horizontal");
		float vert = Input.GetAxis("Vertical");

		if (grounded && vert > 0) {
			rb.AddForce(Vector2.up * jumpPower);
		}

		rb.AddForce(Vector2.right * horiz * speed);
		if (rb.velocity.x >= maxSpeed) {
			rb.velocity = new Vector2(maxSpeed, rb.velocity.y);
		}
		else if (rb.velocity.x <= -maxSpeed) {
			rb.velocity = new Vector2(-maxSpeed, rb.velocity.y);
		}
	}
}