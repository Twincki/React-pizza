import React from "react";

import Categories from "../components/Categories";

import Sort from "../components/Sort";

import PizzaBlock from "../components/PizzaBlock";

import Skeleton from "../components/PizzaBlock/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sort: "rating",
  }
  );



  React.useEffect(() => {
    setLoading(true)
    fetch(`https://6364d2377b209ece0f4f0cfb.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sort}&order=desc`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, [categoryId, sortType]);


  const onClickCategory = (index) => {
    setCategoryId(index)
  };

  const onChangeSort = (index) => {
    setSortType(index)
  };


  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort value={sortType} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};



export default Home;
