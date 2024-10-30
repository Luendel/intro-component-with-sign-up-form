import { isPlatformBrowser } from "@angular/common";
import { Component, OnInit, Inject, PLATFORM_ID } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms"

@Component({
    selector:"app-form",
    templateUrl:"./form.component.html",
    styleUrl:"./form.component.css"
})
export class FormComponent implements OnInit {
    document!: Document;

    public signUpForm:FormGroup = new FormGroup({
        firstName: new FormControl("",[Validators.minLength(2),Validators.required]),
        lastName: new FormControl("",[Validators.minLength(2),Validators.required]),
        email: new FormControl("",[Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required]),
        password: new FormControl("",[Validators.minLength(6),Validators.required])
    })

    constructor(@Inject(PLATFORM_ID) private platformID: Object){}

    ngOnInit(): void {
        if(isPlatformBrowser(this.platformID)){
            this.document = window.document
        }
    }

    handleFocus(inputName:string, firstName: HTMLElement, lastNname:HTMLElement, email:HTMLElement, paswword:HTMLElement){
        document.getElementsByName(inputName).item(0).style.borderColor = "hsl(246, 25%, 77%)"

        switch(inputName){
            case "firstName":
                firstName.style.display = "none"
                break
            case "lastName":
                lastNname.style.display = "none"
                break
            case "email":
                email.style.display = "none"
                break
            case "password":
                paswword.style.display = "none"
                break
            default:
                break
        }
    }

    handleSumbit(firstName: HTMLElement, lastNname:HTMLElement, email:HTMLElement, paswword:HTMLElement){
        firstName.style.display = "none"
        lastNname.style.display = "none"
        email.style.display = "none"
        paswword.style.display = "none"
        
        if(!this.signUpForm.valid){
            let fields = Object.keys(this.signUpForm.controls)

            fields.map(key => {
                if(!this.signUpForm.controls[key].valid){
                    console.log(`the field ${key} is invalid`)

                    switch(key){
                        case "firstName":
                            firstName.style.display = "block"
                            document.getElementsByName(key).item(0).style.borderColor = "hsl(0, 100%, 74%)"
                            break
                        case "lastName":
                            lastNname.style.display = "block"
                            document.getElementsByName(key).item(0).style.borderColor = "hsl(0, 100%, 74%)"
                            break
                        case "email":
                            email.style.display = "block"
                            document.getElementsByName(key).item(0).style.borderColor = "hsl(0, 100%, 74%)"
                            break
                        case "password":
                            paswword.style.display = "block"
                            document.getElementsByName(key).item(0).style.borderColor = "hsl(0, 100%, 74%)"
                            break
                        default:
                            break
                    }
                }
                
            })
        }

        else {
            alert("Success!")
        }
    }
}