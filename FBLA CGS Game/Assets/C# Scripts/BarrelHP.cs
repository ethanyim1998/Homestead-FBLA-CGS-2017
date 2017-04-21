using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BarrelHP : MonoBehaviour {

    public float MaxHealth = 20f;

    public float ExplodeDamageThreshold = 25f;
    Health health;
    public GameObject hitText;
    void Awake() {
        health = GetComponent<Health>();
        //inject barrell health
        MaxHealth += Random.Range(-5f, 5f);
        health.currentHP = MaxHealth;
        health.OnDamageReceived += ProcessDamage;

    }

    void ProcessDamage(float value) {
        float damage = Mathf.Abs(value);
        if(damage > ExplodeDamageThreshold) {
            //possible features
            return;
        }
        if(health.currentHP <= 0) {
            Destroy(gameObject);
        }

        GameObject dmgDisplay = (GameObject) Instantiate (hitText, this.transform.position, hitText.transform.rotation);

        dmgDisplay.GetComponent<TextMesh>().text = "- " + damage;
//Maybe set up extra logic the script on the text mesh you just created, or maybe your logic for handling crits, misses, etc
    }


    
    void OnCollisionExit2D(Collision2D other)
    {
        if (other.gameObject.name.Equals("Platform 4")) {
		Destroy(this.gameObject);
	}
    }

}
