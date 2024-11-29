const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
  keyFilename: path.join(__dirname, '../service-account-key.json'),
});

const bucketName = 'your-bucket-name';
const bucket = storage.bucket(bucketName);

const getFileMetadata = async (fileName) => {
  const file = bucket.file(fileName);
  const [exists] = await file.exists();
  return exists;
};

const getFile = (fileName) => bucket.file(fileName);

module.exports = { getFileMetadata, getFile };
