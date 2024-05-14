import React from "react";
import Card from "../Card/Card";

const List = () => {
  const Data = [
    {
      id: 1,
      img: queen09,
      img2: queen10,
      title: "Queen's Yellow Ankara Dress",
      isNew: true,
      oldPrice: 40,
      price: 35,
    },
    {
      id: 2,
      img: king04,
      img2: king02,
      title: "King's Kaftan Black and White",
      isNew: true,
      oldPrice: 42,
      price: 37,
    },
    {
      id: 3,
      img: accessories04,
      img2: queen11,
      title: "Queen's Headwrap",
      isNew: true,
      oldPrice: 24,
      price: 17,
    },
    {
      id: 4,
      img: kids06,
      img2: kids05,
      title: "Toto's Dashiki Shirt and Tights",
      isNew: true,
      oldPrice: 38,
      price: 33,
    },
  ];
  return (
    <div className="list">
      {data?.map(item=>(
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
