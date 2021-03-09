<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>

    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>

    <!-- 4个推荐 -->
    <home-recommend :recommends="recommend"></home-recommend>

    <!-- 本周流行 -->
    <home-feature></home-feature>

    <!-- 流行、新款、精选 tab-control -->
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>

    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      <li>item5</li>
      <li>item6</li>
      <li>item7</li>
      <li>item8</li>
      <li>item9</li>
      <li>item10</li>
      <li>item11</li>
      <li>item12</li>
      <li>item13</li>
      <li>item14</li>
      <li>item15</li>
      <li>item16</li>
      <li>item17</li>
      <li>item18</li>
      <li>item19</li>
      <li>item20</li>
      <li>item21</li>
      <li>item22</li>
      <li>item23</li>
      <li>item24</li>
      <li>item25</li>
      <li>item26</li>
      <li>item27</li>
      <li>item28</li>
      <li>item29</li>
      <li>item30</li>
      <li>item31</li>
      <li>item32</li>
      <li>item33</li>
      <li>item34</li>
      <li>item35</li>
      <li>item36</li>
      <li>item37</li>
      <li>item38</li>
      <li>item39</li>
      <li>item40</li>
      <li>item41</li>
      <li>item42</li>
      <li>item43</li>
      <li>item44</li>
      <li>item45</li>
      <li>item46</li>
      <li>item47</li>
      <li>item48</li>
      <li>item49</li>
      <li>item50</li>
      <li>item51</li>
      <li>item52</li>
      <li>item53</li>
      <li>item54</li>
      <li>item55</li>
      <li>item56</li>
      <li>item57</li>
      <li>item58</li>
      <li>item59</li>
      <li>item60</li>
      <li>item61</li>
      <li>item62</li>
      <li>item63</li>
      <li>item64</li>
      <li>item65</li>
      <li>item66</li>
      <li>item67</li>
      <li>item68</li>
      <li>item69</li>
      <li>item70</li>
      <li>item71</li>
      <li>item72</li>
      <li>item73</li>
      <li>item74</li>
      <li>item75</li>
      <li>item76</li>
      <li>item77</li>
      <li>item78</li>
      <li>item79</li>
      <li>item80</li>
      <li>item81</li>
      <li>item82</li>
      <li>item83</li>
      <li>item84</li>
      <li>item85</li>
      <li>item86</li>
      <li>item87</li>
      <li>item88</li>
      <li>item89</li>
      <li>item90</li>
      <li>item91</li>
      <li>item92</li>
      <li>item93</li>
      <li>item94</li>
      <li>item95</li>
      <li>item96</li>
      <li>item97</li>
      <li>item98</li>
      <li>item99</li>
      <li>item100</li>
    </ul>

  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import {getHomeDatas} from 'network/home';

export default {
  name: 'Home',
  data() {
    return {
      banners: null,
      recommend: null,
    }
  },
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    NavBar,
    TabControl
  },
  created() {
    getHomeDatas().then(res => {
      this.banners = res.data.data.banner.list,
      this.recommend = res.data.data.recommend.list
    })
  }
}
</script>

<style scoped>

  #home {
    padding-top: 44px;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

</style>