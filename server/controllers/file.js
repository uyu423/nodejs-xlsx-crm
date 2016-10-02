import { deleteFileByIdx, selectFiles } from '../models';

export const getFiles = (req, res) => {
  selectFiles((err, result) => {
    if(err) res.status(500).send(err);
    else res.send({
      mesg : "Get File List OK",
      list : result
    });
  });
};

export const deleteFile = (req, res) => {
  const fileIdx = req.params.fileIdx;
  deleteFileByIdx(fileIdx, (err, result) => {
    if(err) res.status(500).send(err);
    else res.send({
      mseg : "File Delete OK"
    });
  });
};
