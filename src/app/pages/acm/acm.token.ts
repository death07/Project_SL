import { InjectionToken } from "@angular/core";
import { Reloadable } from "./reloadable";

export const RELOADABLE_CONTENT = new InjectionToken<Reloadable>(
    'reloadable-content'
)