import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import { MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        MatIconButton,
        MatIcon,
        MatTooltip,
        NgOptimizedImage
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

    isDarkTheme: boolean;

    constructor(private appComponent: AppComponent) {
        this.isDarkTheme = this.appComponent.isDarkTheme;
    }

    toggleTheme() {
        this.isDarkTheme = this.appComponent.toggleTheme();
    }
}
