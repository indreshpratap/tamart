import { FormControl } from "@angular/forms";

export function digit4Only(control: FormControl) {
    if (!control.value) { return null; }
    
    if (/^\d{1,4}$/.test(control.value)) {
        return null;
    } else {
        return { "digit4only": true };
    }
}

export function pincode(control: FormControl) {
    if (!control.value) { return null; }
    if (/^\d{4}$/.test(control.value)) {
        return null;
    } else {
        return { "pincode": true };
    }
}