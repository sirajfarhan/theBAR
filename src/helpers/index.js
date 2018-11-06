import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

export const getCurrentUserInfo = () => {
  return new Promise((resolve, reject) => {
      const infoRequest = new GraphRequest('/me',
      { parameters:
        {
          fields: {
            string: 'email,name,first_name,last_name,picture.type(large)'
          }
        }
      }, ((error, result) => {
        if (error) return reject(error)
        return resolve(result)
      }))
      new GraphRequestManager().addRequest(infoRequest).start();
    })
}

export const logout = (accessToken) => {
  return new Promise((resolve, reject) => {
      const logoutRequest = new GraphRequest('me/permissions',
      {
        accessToken: accessToken,
        httpMethod: 'DELETE'
      }, ((error, result) => {
        if (error) return reject(error)
        return resolve(result)
      }))
      new GraphRequestManager().addRequest(logoutRequest).start();
    })
}
