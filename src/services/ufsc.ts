import https from 'https'
import axios from 'axios'
import ssl from 'ssl-root-cas/latest'

https.globalAgent.options.ca = ssl

export const baseURL = 'https://classificados.inf.ufsc.br/'

class UfscSercice {
  path: string = 'index.php?catid=72'

  public getAll() {
    return axios.get(this.path, {
      baseURL
    })
  }
}

export default UfscSercice
