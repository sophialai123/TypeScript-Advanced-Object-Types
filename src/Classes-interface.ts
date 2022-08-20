// Write an interface here
interface Directory {
  //addFile, whose type is a function with 
  //one parameter, name, of type string
  // and returns void.
  addFile: (name: string) => void

}

//Using the implements keyword, apply Directory
// to the DesktopDirectory class.
class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');