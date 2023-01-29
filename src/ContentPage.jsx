import React, { useState } from 'react'
import { useUploader } from '@w3ui/react-uploader'
import { withIdentity } from './Components/Authenticator'
import './spinner.css'
import {abi} from './config';
import { Contract, ethers } from 'ethers';
import './style.css'

export function ContentPage () {
  const [{ storedDAGShards }, uploader] = useUploader()
  const [file, setFile] = useState(null)
  const [dataCid, setDataCid] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState(null)

  // For smart Contract
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  console.log(signer);
  const contractAddress ='0xD082e7057C9531A13AddCe15436E833917Cd8D77';
const contractABI = abi;
const filfy =new Contract(
    contractAddress,
    contractABI,
    signer
);

  //fuction to add CID in contract
  async function addCID(){
    console.log("IN Func");
    var newCid;
    error ? console.log(error) : newCid = await filfy.addSongs(dataCid);
    await newCid.wait()
    console.log(newCid.hash)
  }

  if (!uploader) return null

  const handleUploadSubmit = async e => {
    e.preventDefault()
    try {
      setStatus('uploading')
      const cid = await uploader.uploadFile(file)
      setDataCid(cid)
    } catch (err) {
      console.error(err)
      setError(err)
    } finally {
      setStatus('done')
    }
  }

  if (status === 'uploading') {
    return <Uploading file={file} storedDAGShards={storedDAGShards} />
  }

  if (status === 'done') {
    addCID(); // SOLVE THIS ISSUE calling twice
    return error ? <Errored error={error} /> : <Done file={file} dataCid={dataCid} storedDAGShards={storedDAGShards} />
  }

  return (
    <form onSubmit={handleUploadSubmit} className=''>
      <div className='db mb3'>
        <label for="images" class="drop-container">
            <span class="drop-title">Drop mp3 file here</span>
            <input id='file' className='db pa2 w-100 ba br2' type='file' onChange={e => setFile(e.target.files[0])} required />
            <button type='submit' className='ph3 pv2' style={{"background":"blue", "color":"white", "padding":"20px", "width":"300px"}}>Upload</button>
        </label>        
      </div>
    </form>
  )
}

const Uploading = ({ file, storedDAGShards }) => (
  <div className='flex items-center' >
    <div className='loader mr3 flex-none' />
  </div>
)

const Errored = ({ error }) => (
  <div>
    <h1 className='near-white'>⚠️ Error: failed to upload file: {error.message}</h1>
    <p>Check the browser console for details.</p>
  </div>
)

const Done = ({ file, dataCid, storedDAGShards }) => (
  <div style={{"background":"black", "marginBottom": "-50px", "marginTop": "-50px", "display":"flex", "justifyContent":"center", "alignItems":"center"}}>
    <h1 className='near-white'>✅</h1>
  </div>
)

export default withIdentity(ContentPage)