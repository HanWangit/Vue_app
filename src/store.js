// 注册 vuex
import Vuex from 'vuex'
import Vue from 'Vue'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]');

export default new Vuex.Store({
  state: {
    car:car //储存在数组中
    // 数据设计: { id: 商品的id, count: 要购买的数量, price: 商品的单价，selected: false }
  },
  mutations: {
      addToCar(state, goodsinfo) {
        // 假设 在购物车中，没有找到对应的商品
        var infoFlag = false;
        state.car.some(item => {
            if (item.id === goodsinfo.id) {
                  item.count += goodsinfo.count;
                  infoFlag = true;
                  return true;
            }
        })
          if (!infoFlag) {
              state.car.push(goodsinfo);
          }
          localStorage.setItem('car', JSON.stringify(state.car));
    }
  },
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count
            })
            return c
        }
  }
});

