import "./scss/app.scss";

import Header from "./components/Header";

import Categories from "./components/Categories";

import Sort from "./components/Sort";

import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div classNameName="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              <PizzaBlock title="Мексиканская" price="370" />
              <PizzaBlock title="Италия" price="400" />
              <PizzaBlock title="Острый Цыпленок" price="330" />
              <PizzaBlock title="Маргарита" price="299" />
              <PizzaBlock title="Цыпленок карри" price="439" />
              <PizzaBlock title="Пицца из половинок" price="570" />
              <PizzaBlock title="Пепперони фреш" price="299" />
              <PizzaBlock title="Домашняя" price="439" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
