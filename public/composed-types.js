"use strict";
class DesktopDirectory3 {
    constructor() {
        this.config3 = {
            default: {
                encoding: 'utf-8',
                permissions: 'drw-rw-rw-',
            }
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop3 = new DesktopDirectory3();
console.log(Desktop3.config3);
