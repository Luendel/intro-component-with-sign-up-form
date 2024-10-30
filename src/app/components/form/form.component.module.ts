import { NgModule } from "@angular/core"
import { FormComponent } from "./form.component";
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
    declarations:[FormComponent],
    imports:[ReactiveFormsModule],
    exports:[FormComponent]
})
export class FormComponentModuule {
    
}