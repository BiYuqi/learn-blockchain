import {useEffect, useState} from "react";
import {getStore} from "../utils/localStore";

export function useAddressStorage() {
  const [store, setStore] = useState(null)

  useEffect(() => {
    setStore(getStore('address'))
  }, [])

  return store
}
