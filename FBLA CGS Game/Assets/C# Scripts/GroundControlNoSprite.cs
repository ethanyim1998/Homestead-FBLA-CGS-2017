﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GroundControlNoSprite : MonoBehaviour {
	private PlayerNoSprite player;

	void Start()
	{
		player = gameObject.GetComponentInParent<PlayerNoSprite>();
	}

	/// <summary>
	/// Sent when another object enters a trigger collider attached to this
	/// object (2D physics only).
	/// </summary>
	/// <param name="other">The other Collider2D involved in this collision.</param>
	void OnTriggerEnter2D(Collider2D other)
	{
		player.grounded = true;
	}
	/// <summary>
	/// Sent each frame where another object is within a trigger collider
	/// attached to this object (2D physics only).
	/// </summary>
	/// <param name="other">The other Collider2D involved in this collision.</param>
	void OnTriggerStay2D(Collider2D other)
	{
		player.grounded = true;
	}

	void /// <summary>
	/// Sent when another object leaves a trigger collider attached to
	/// this object (2D physics only).
	/// </summary>
	/// <param name="other">The other Collider2D involved in this collision.</param>
	OnTriggerExit2D(Collider2D other)
	{
		player.grounded = false;
	}
	
}