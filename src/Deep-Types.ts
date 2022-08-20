interface Directory2 {
  addFile: (name: string) => void;
  // Define a config type member here
  //write a type that has a nested default object.
  config2: {
    default: {
      encoding: string;
      permissions: string;
    }

  }

}

class DesktopDirectory2 implements Directory2 {

  //add config property
  config2 = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop2 = new DesktopDirectory2();

console.log(Desktop2.config2);