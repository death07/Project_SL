import { Directive, Input } from "@angular/core";

@Directive()
export class Acm {
    @Input() title: string = "";
}
