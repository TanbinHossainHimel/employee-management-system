import {Injectable} from '@angular/core';
import CryptoJS from 'crypto-js';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  constructor() {

  }

  encryptWithAES256(value: object | string) {
    const {key, config} = this.getEncryptDecryptInfo();
    return CryptoJS.AES.encrypt(JSON.stringify(value), key, config).toString();
  }


  decryptWithAES256(cipherText: string) {
    const {key, config} = this.getEncryptDecryptInfo();
    return CryptoJS.AES.decrypt(cipherText, key, config).toString(CryptoJS.enc.Utf8);
  }


  private getEncryptDecryptInfo(): EncryptDecryptInfo {
    const key = CryptoJS.enc.Utf8.parse(environment.encryptDecryptKey);
    const initializeVector = CryptoJS.enc.Utf8.parse(environment.encryptDecryptInitializeVector);

    return {
      key: key,
      config: {
        iv: initializeVector,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
        keySize: 32
      }
    }
  }
}

interface EncryptDecryptInfo {
  key: CryptoJS.lib.WordArray,
  config: EncryptDecryptConfig
}

interface EncryptDecryptConfig {
  iv: CryptoJS.lib.WordArray,
  mode: any,
  padding: any,
  keySize: number
}
