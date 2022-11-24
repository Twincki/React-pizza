import React from "react";

import Categories from "../components/Categories";

import Sort from "../components/Sort";

import PizzaBlock from "../components/PizzaBlock";

import Skeleton from "../components/PizzaBlock/Skeleton";

import Pagination from "../components/Pagination";

import { SearchContext } from "../App";

const Home = () => {
  const { searchValue } = React.useContext(SearchContext)
  const [items, setItems] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sort: "rating",
  }
  );

  React.useEffect(() => {
    setLoading(true)
    fetch(`https://6364d2377b209ece0f4f0cfb.mockapi.io/items?page=${currentPage}&limit=8&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType.sort}&order=desc`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setLoading(false);
      });
  }, [categoryId, sortType, currentPage]);


  const onClickCategory = (index) => {
    setCategoryId(index)
  };

  const onChangeSort = (index) => {
    setSortType(index)
  };

  const pizzas = items.filter((obj) => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase()))
      return true
    else {
      return false
    }
  }).map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort value={sortType} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? skeletons
          : pizzas}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};



export default Home;
