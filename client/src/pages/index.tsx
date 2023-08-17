
import { useEffect, useState } from "react";
import Header from "../component/header";
import List from "../component/list";
import { getProductList } from "../config/auth";

const Index = () => {

  const [list, setList] = useState([])
 
  useEffect(() => {
    getProductList().then((res) => {
      console.log("getTable", res);
      setList(res);
    }).catch((error) => { console.log(error); });
  }, [])


  return (
    <>
      <Header />
      <List list={list}/>
    </>
  )
};

export default Index;
