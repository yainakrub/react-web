var AWS = require('aws-sdk');

var s3  = new AWS.S3({
          accessKeyId: 'yainakrub2' ,
          secretAccessKey: 'yainakrub2' ,
          endpoint: 'http://192.168.10.19:9000' ,
          s3ForcePathStyle: 'true', // needed with minio?
          signatureVersion: 'v4'
 });

// putObject operation.

var params = {Bucket: 'yai', Key: 'testobject', Body: 'Hello from Minio!!'};

// s3.putObject(params, function(err, data) {
//       if (err)
//        console.log(err)
//       else   
//        console.log("Successfully uploaded data to testbucket/testobject");
// });

// getObject operation.

//var params = {Bucket: 'testbucket', Key: 'testobject'};

//var file = require('fs').createWriteStream('/tmp/mykey');

// s3.getObject(params).
// on('httpData', function(chunk) { file.write(chunk); }).
// on('httpDone', function() { file.end(); }).
// send();



// import React, { useEffect, useState } from "react";
// import "./styles.css";
//import * as minio from "minio";

// export default function App() {
//   const [buckets, setBuckets] = useState([]);
// //Minio
//         //{"url":"http://192.168.10.19:9000","accessKey":"o3MdVEc2spjgVOzIQ3or","secretKey":"0I75lc9649rvU7NOnek5UsPCCG4PxSIoPMYqnBxO","api":"s3v4","path":"auto"}
//   useEffect(() => {
//     const getBuckets = async () => {
//       // create the client
//       const mc = new minio.Client({
//         endPoint: "192.168.10.19",
//         port: 9000,
//         useSSL: true,
//         accessKey: "o3MdVEc2spjgVOzIQ3or",
//         secretKey: "0I75lc9649rvU7NOnek5UsPCCG4PxSIoPMYqnBxO"
//       });
//       // list buckets
//       const res = await mc.listBuckets();

//       setBuckets(res);
//     };
//     getBuckets();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Minio example</h1>

//       <ul>
//         {buckets.slice(0, 5).map((bucket, index) => (
//           <li key={index}>{bucket.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
