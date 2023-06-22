import React from 'react'
import { MuiFileInput } from 'mui-file-input'
var AWS = require('aws-sdk');


export default function MyComponent () {
  
  const [file, setFile] = React.useState(null)
 
  const handleChange = (newFile) => {
   setFile(newFile)

    console.log(newFile.name)
    console.log(newFile.size)

    const s3  = new AWS.S3({
      accessKeyId: 'yainakrub2' ,
      secretAccessKey: 'yainakrub2' ,
      endpoint: 'http://192.168.10.19:9000' ,
      s3ForcePathStyle: 'true', // needed with minio?
      signatureVersion: 'v4'
    });

    const params = {Bucket: 'yai', Key: newFile.name, Body: newFile};
      s3.putObject(params, function(err, data) {
        if (err)
          console.log(err)
        else   
        console.log("Successfully uploaded data to testbucket/testobject");
        });

  }


  return (
    <MuiFileInput value={file} onChange={handleChange} />

  )

}
