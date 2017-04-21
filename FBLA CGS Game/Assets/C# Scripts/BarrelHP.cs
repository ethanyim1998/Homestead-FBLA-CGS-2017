using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BarrelHP : MonoBehaviour {

    public float MaxHealth = 50f;

    //if we get more that this amount of damage we violently insta explode
    public float ExplodeDamageThreshold = 25f;
    Health health;




    void Awake() {
        health = GetComponent<Health>();
        //inject barrell health
        health.Value = MaxHealth;
        health.OnDamageReceived += ProcessDamage;

    }

    void ProcessDamage(float value) {
        float damage = Mathf.Abs(value);
        if(damage > ExplodeDamageThreshold) {
            //ViolentlyExplode();
            return;
        }
        if(health.Value <= 0) {
            Destroy(gameObject);
        }
    }

}
