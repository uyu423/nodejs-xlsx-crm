import { selectDatas, selectDataWhereOrdername,
  selectDataWhereOrdercall, selectDataWhereOrderphone,
  selectDataWhereAddress, selectDataByIdx } from '../models';

export const getDatas = (req, res) => {
  selectDatas(req.params.date, req.params.page, (err, result) => {
    if(err) res.status(500).send(err);
    else {
      res.send({
        mesg : "Get Data List OK",
        rows : result
      });
    }
  });
};

//Callback Hell. rnlcksgek..
export const getDataDetail = (req, res) => {
  let resultArray = {
    'default' : [],
    'orderName' : [],
    'orderCall' : [],
    'orderPhone' : [],
    'address' : []
  };
  selectDataByIdx(req.params.idx, (err, result) => {
    if(err) { res.status(500).send(err); }
    else {
      resultArray.default = result[0];
      selectDataWhereOrdername(result[0].order_name, (err2, result2) => {
        if(err2) { res.status(500).send(err); }
        else {
          resultArray.orderName = result2;
          selectDataWhereOrdercall(result[0].order_call, (err3, result3) => {
            if(err3) { res.status(500).send(err3); }
            else {
              resultArray.orderCall = result3;
              selectDataWhereOrderphone(result[0].order_phone, (err4, result4) => {
                if(err4) { res.status(500).send(err4); }
                else {
                  resultArray.orderPhone = result4;
                  selectDataWhereAddress(result[0].address, (err5, result5) => {
                    if(err5) { res.status(500).send(err5); }
                    else {
                      resultArray.address = result5;
                      res.send({
                        mseg : "You Escape Callback Hell!",
                        results : resultArray
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
