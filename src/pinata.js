
import axios from 'axios'
import { toast } from 'react-toastify'

// export const pinJSONToIPFS = async json => {
//   const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`
//   return axios
//     .post(url, json, {
//       headers: {
//         pinata_api_key: key,
//         pinata_secret_api_key: secret,
//       },
//     })
//     .then(function (response) {
//       return response.data.IpfsHash
//     })
//     .catch(function (error) {
//       console.log(error)
//     })
// }

export const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`

  let data = new FormData()

  data.append('file', file)

  return await toast.promise( axios.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      pinata_api_key: "cc167ce5fd7257efb670",
      pinata_secret_api_key:
        "381349dd4de85b6055baf1e1b8e1369141bd2cf2798491ea2d29b746a8192c04",
    },
  }),
  {
    pending: 'Uploading...',
    success: 'File uploaded 👌',
    error: 'Promise rejected 🤯'
  }
  );
}