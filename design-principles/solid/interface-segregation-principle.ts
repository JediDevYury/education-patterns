//clients mustn't depend on methods, which they don't use.

interface IFile {
  name: string
  size: number
}

interface IServer {
  host: string
  port: number
  region: string
}

interface CloudProvider {
  storeFile(): void
  getFile(name: string): IFile
  createServer(region: string): IServer
  listServers(): IServer[]
  getCDNAddress(): string
}

interface CloudHostingProvider {
  createServer(region: string): IServer,
  listServers(): IServer[]
}

interface CDNProvider {
  getCDNAddress(): string
}

interface CloudStorageProvider {
  storeFile(): void
  getFile(name: string): IFile
}

class AmazonService implements CloudHostingProvider, CDNProvider, CloudStorageProvider {
  storeFile(): void {
    console.log('Amazon stored');
  }
  getFile(name: string): IFile {
    return {
      name: 'test',
      size: 10
    }
  }

  createServer(region: string): IServer {
    return {
      region,
      host: "localhost",
      port: 3000
    }
  }

  getCDNAddress(): string {
    return 'Amazon CDN Address'
  }

  listServers(): IServer[] {
    return [{
      region: 'eu-west-1',
      host: "localhost",
      port: 3000
    }, {
      region: 'eu-west-2',
      host: "localhost",
      port: 5000
    }]
  }
}



class DropboxService implements CloudStorageProvider {
  storeFile(): void {
    console.log('Amazon stored');
  }
  getFile(name: string): IFile {
    return {
      name: 'test',
      size: 10
    }
  }

  // not implementation
  // createServer()
  // getCDNAddress()
}
