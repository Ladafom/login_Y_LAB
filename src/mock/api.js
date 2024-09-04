import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';

export async function useLogin(params){

  const encryptedPassword = Base64.stringify(hmacSHA512(params.password, 'privateKey 123'));
  const res = {
    accessToken: encryptedPassword,
    user: {
      email: params.email,
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res);
    }, 1000);
  });
}
