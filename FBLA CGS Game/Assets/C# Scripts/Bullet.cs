using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour
{

    public Rigidbody2D rb;
    public GameObject player;

    public float bulletSpeed = 1000;
    // Use this for initialization
    void Start()
    {
        rb = this.GetComponent<Rigidbody2D>();
        player = GameObject.FindGameObjectsWithTag("Player")[0];

        if (player.GetComponent<Rigidbody2D>().transform.localScale.x >= 0) {
            transform.localScale = new Vector3(-1 * transform.localScale.x, 1*transform.localScale.y, 1*transform.localScale.z);
            rb.velocity = new Vector2(bulletSpeed, 0);
        }
        else
            rb.velocity = new Vector2(-bulletSpeed, 0);

            
       
        

    }

    // Update is called once per frame
    void Update()
    {
          
    }

    void OnTriggerEnter2D(Collider2D other) {
        if (other.gameObject.tag.Equals("Barrel")) {
            print("Barrel Hit");
            Destroy(other.gameObject);
            Destroy(this.gameObject);
        } else if (other.gameObject.tag.Equals("Wall")) {
            print("wall hit");
            Destroy(this.gameObject);
        }
    }
}
