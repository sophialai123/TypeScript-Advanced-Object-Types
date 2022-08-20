
//creating two new types: DefaultConfig and Config.
interface Directory {
  addFile: (name: string) => void;
  config3: Config
}

interface DefaultConfig {
  encoding: string;
  permissions: string;
}

interface Config {
  default: DefaultConfig
}


class DesktopDirectory3 implements Directory {
  config3 = {
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

const Desktop3 = new DesktopDirectory3();

console.log(Desktop3.config3);