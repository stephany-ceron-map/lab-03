import { useEffect } from "react";
import * as database from './../../database';

export default function AppLoader({handleLoadTransactions, handleShowErrorMessage, handleSetLoadingData}) {

  useEffect(() => {

    (async () => {
      try {
        handleShowErrorMessage(false);
        const data = await database.load();
        handleLoadTransactions(data);
        handleSetLoadingData(false);
      }
      catch(e){
        handleShowErrorMessage(true);
        handleSetLoadingData(false);
      }

    })();
  }, []);
}