import { deleteFileByIdx } from '../models';

export const deleteFile = (req, res) => {
  const fileIdx = req.params.fileIdx;
  deleteFileByIdx(fileIdx, (err, result) => {
    if(err) res.status(500).send(err);
    else res.send({
      mseg : "File Delete OK"
    })
  });
}
