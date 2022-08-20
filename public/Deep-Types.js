"use strict";
class DesktopDirectory2 {
    constructor() {
        //add config property
        this.config2 = {
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
const Desktop2 = new DesktopDirectory2();
console.log(Desktop2.config2);
