using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Health : MonoBehaviour {

    /// <summary>
    /// Let your barrell set this value on initialization, since only barrell knows what it's max hp should be
    /// </summary>
    public float Value = 100f;

    public event System.Action<float> OnDamageReceived = delegate { };
    public event System.Action<float> OnHealingReceived = delegate { };

    public void ModifyHealth(float val) {
        Value += val;
        if (val < 0f) {
            OnDamageReceived(val);
        }
        else
            OnHealingReceived(val);
    }
}