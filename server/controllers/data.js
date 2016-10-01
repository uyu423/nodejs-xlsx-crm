import { selectDatas } from '../models';

export const getDatas = (req, res) => {
  console.log
  selectDatas(req.params.page, (err, result) => {
    if(err) res.status(500).send(err);
    else {
      res.send({
        mesg : "Get Data List OK",
        rows : result
      });
    }
  });
};
