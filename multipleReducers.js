const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
// action creater
function buyCake() {
  return {
    type: BUY_CAKE, //action
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM, //action
    info: "First redux action",
  };
}

//(previousState, action) => newState
//Multiple Reducers

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

const cakereducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state, //To make copt of state
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamreducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state, //To make copt of state
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//Since store takes only one reducer we use combinereducer to combine them
const rootReducer = combineReducers({
  cake: cakereducer,
  iceCream: iceCreamreducer,
});
const store = createStore(rootReducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Update state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
