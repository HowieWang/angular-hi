import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'child',
    templateUrl: './child.component.html'
})

export class ChildComponent implements OnInit {
    @Input() private message: string;
    @Output() private outer = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    sendToDaddy() {
        this.outer.emit('msg from child...')
    }
}