'use strict';

var _create = require('./../common/create.js');

var ITEM_HEIGHT = 44;

(0, _create.create)({
  props: {
    items: {
      type: Array,
      observer: function observer() {
        this.updateSubItems();
        this.updateMainHeight();
      }
    },
    mainActiveIndex: {
      type: Number,
      value: 0,
      observer: 'updateSubItems'
    },
    activeId: {
      type: Number,
      value: 0
    },
    maxHeight: {
      type: Number,
      value: 300,
      observer: function observer() {
        this.updateItemHeight();
        this.updateMainHeight();
      }
    }
  },

  data: {
    subItems: [],
    mainHeight: 0,
    itemHeight: 0
  },

  methods: {
    // 当一个子项被选择时
    onSelectItem: function onSelectItem(event) {
      this.$emit('click-item', event.currentTarget.dataset.item);
    },


    // 当一个导航被点击时
    onClickNav: function onClickNav(event) {
      var index = event.currentTarget.dataset.index;

      this.$emit('click-nav', { index: index });
    },


    // 更新子项列表
    updateSubItems: function updateSubItems() {
      var selectedItem = this.data.items[this.data.mainActiveIndex] || {};

      this.setData({ subItems: selectedItem.children || [] });

      this.updateItemHeight();
    },


    // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
    updateMainHeight: function updateMainHeight() {
      var maxHeight = Math.max(this.data.items.length * ITEM_HEIGHT, this.data.subItems.length * ITEM_HEIGHT);

      this.setData({ mainHeight: Math.min(maxHeight, this.data.maxHeight) });
    },


    // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
    updateItemHeight: function updateItemHeight() {
      this.setData({ itemHeight: Math.min(this.data.subItems.length * ITEM_HEIGHT, this.data.maxHeight) });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIklURU1fSEVJR0hUIiwicHJvcHMiLCJpdGVtcyIsInR5cGUiLCJBcnJheSIsIm9ic2VydmVyIiwidXBkYXRlU3ViSXRlbXMiLCJ1cGRhdGVNYWluSGVpZ2h0IiwibWFpbkFjdGl2ZUluZGV4IiwiTnVtYmVyIiwidmFsdWUiLCJhY3RpdmVJZCIsIm1heEhlaWdodCIsInVwZGF0ZUl0ZW1IZWlnaHQiLCJkYXRhIiwic3ViSXRlbXMiLCJtYWluSGVpZ2h0IiwiaXRlbUhlaWdodCIsIm1ldGhvZHMiLCJvblNlbGVjdEl0ZW0iLCJldmVudCIsIiRlbWl0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwib25DbGlja05hdiIsImluZGV4Iiwic2VsZWN0ZWRJdGVtIiwic2V0RGF0YSIsImNoaWxkcmVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxjQUFjLEVBQXBCOztBQUVBLG9CQUFPO0FBQ0xDLFNBQU87QUFDTEMsV0FBTztBQUNMQyxZQUFNQyxLQUREO0FBRUxDLGNBRkssc0JBRU07QUFDVCxhQUFLQyxjQUFMO0FBQ0EsYUFBS0MsZ0JBQUw7QUFDRDtBQUxJLEtBREY7QUFRTEMscUJBQWlCO0FBQ2ZMLFlBQU1NLE1BRFM7QUFFZkMsYUFBTyxDQUZRO0FBR2ZMLGdCQUFVO0FBSEssS0FSWjtBQWFMTSxjQUFVO0FBQ1JSLFlBQU1NLE1BREU7QUFFUkMsYUFBTztBQUZDLEtBYkw7QUFpQkxFLGVBQVc7QUFDVFQsWUFBTU0sTUFERztBQUVUQyxhQUFPLEdBRkU7QUFHVEwsY0FIUyxzQkFHRTtBQUNULGFBQUtRLGdCQUFMO0FBQ0EsYUFBS04sZ0JBQUw7QUFDRDtBQU5RO0FBakJOLEdBREY7O0FBNEJMTyxRQUFNO0FBQ0pDLGNBQVUsRUFETjtBQUVKQyxnQkFBWSxDQUZSO0FBR0pDLGdCQUFZO0FBSFIsR0E1QkQ7O0FBa0NMQyxXQUFTO0FBQ1A7QUFDQUMsZ0JBRk8sd0JBRU1DLEtBRk4sRUFFYTtBQUNsQixXQUFLQyxLQUFMLENBQVcsWUFBWCxFQUF5QkQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJDLElBQXJEO0FBQ0QsS0FKTTs7O0FBTVA7QUFDQUMsY0FQTyxzQkFPSUwsS0FQSixFQU9XO0FBQUEsVUFDUk0sS0FEUSxHQUNFTixNQUFNRSxhQUFOLENBQW9CQyxPQUR0QixDQUNSRyxLQURROztBQUVoQixXQUFLTCxLQUFMLENBQVcsV0FBWCxFQUF3QixFQUFFSyxZQUFGLEVBQXhCO0FBQ0QsS0FWTTs7O0FBWVA7QUFDQXBCLGtCQWJPLDRCQWFVO0FBQ2YsVUFBTXFCLGVBQWUsS0FBS2IsSUFBTCxDQUFVWixLQUFWLENBQWdCLEtBQUtZLElBQUwsQ0FBVU4sZUFBMUIsS0FBOEMsRUFBbkU7O0FBRUEsV0FBS29CLE9BQUwsQ0FBYSxFQUFFYixVQUFVWSxhQUFhRSxRQUFiLElBQXlCLEVBQXJDLEVBQWI7O0FBRUEsV0FBS2hCLGdCQUFMO0FBQ0QsS0FuQk07OztBQXFCUDtBQUNBTixvQkF0Qk8sOEJBc0JZO0FBQ2pCLFVBQU1LLFlBQVlrQixLQUFLQyxHQUFMLENBQVMsS0FBS2pCLElBQUwsQ0FBVVosS0FBVixDQUFnQjhCLE1BQWhCLEdBQXlCaEMsV0FBbEMsRUFBK0MsS0FBS2MsSUFBTCxDQUFVQyxRQUFWLENBQW1CaUIsTUFBbkIsR0FBNEJoQyxXQUEzRSxDQUFsQjs7QUFFQSxXQUFLNEIsT0FBTCxDQUFhLEVBQUVaLFlBQVljLEtBQUtHLEdBQUwsQ0FBU3JCLFNBQVQsRUFBb0IsS0FBS0UsSUFBTCxDQUFVRixTQUE5QixDQUFkLEVBQWI7QUFDRCxLQTFCTTs7O0FBNEJQO0FBQ0FDLG9CQTdCTyw4QkE2Qlk7QUFDakIsV0FBS2UsT0FBTCxDQUFhLEVBQUVYLFlBQVlhLEtBQUtHLEdBQUwsQ0FBUyxLQUFLbkIsSUFBTCxDQUFVQyxRQUFWLENBQW1CaUIsTUFBbkIsR0FBNEJoQyxXQUFyQyxFQUFrRCxLQUFLYyxJQUFMLENBQVVGLFNBQTVELENBQWQsRUFBYjtBQUNEO0FBL0JNO0FBbENKLENBQVAiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICcuLi9jb21tb24vY3JlYXRlJztcblxuY29uc3QgSVRFTV9IRUlHSFQgPSA0NDtcblxuY3JlYXRlKHtcbiAgcHJvcHM6IHtcbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBvYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdWJJdGVtcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1haW5IZWlnaHQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1haW5BY3RpdmVJbmRleDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICBvYnNlcnZlcjogJ3VwZGF0ZVN1Ykl0ZW1zJ1xuICAgIH0sXG4gICAgYWN0aXZlSWQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwXG4gICAgfSxcbiAgICBtYXhIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAzMDAsXG4gICAgICBvYnNlcnZlcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtSGVpZ2h0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlTWFpbkhlaWdodCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkYXRhOiB7XG4gICAgc3ViSXRlbXM6IFtdLFxuICAgIG1haW5IZWlnaHQ6IDAsXG4gICAgaXRlbUhlaWdodDogMFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICAvLyDlvZPkuIDkuKrlrZDpobnooqvpgInmi6nml7ZcbiAgICBvblNlbGVjdEl0ZW0oZXZlbnQpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWl0ZW0nLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSk7XG4gICAgfSxcblxuICAgIC8vIOW9k+S4gOS4quWvvOiIquiiq+eCueWHu+aXtlxuICAgIG9uQ2xpY2tOYXYoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgaW5kZXggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLW5hdicsIHsgaW5kZXggfSk7XG4gICAgfSxcblxuICAgIC8vIOabtOaWsOWtkOmhueWIl+ihqFxuICAgIHVwZGF0ZVN1Ykl0ZW1zKCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5kYXRhLml0ZW1zW3RoaXMuZGF0YS5tYWluQWN0aXZlSW5kZXhdIHx8IHt9O1xuXG4gICAgICB0aGlzLnNldERhdGEoeyBzdWJJdGVtczogc2VsZWN0ZWRJdGVtLmNoaWxkcmVuIHx8IFtdIH0pO1xuXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1IZWlnaHQoKTtcbiAgICB9LFxuXG4gICAgLy8g5pu05paw57uE5Lu25pW05L2T6auY5bqm77yM5qC55o2u5pyA5aSn6auY5bqm5ZKM5b2T5YmN57uE5Lu26ZyA6KaB5bGV56S655qE6auY5bqm5p2l5Yaz5a6aXG4gICAgdXBkYXRlTWFpbkhlaWdodCgpIHtcbiAgICAgIGNvbnN0IG1heEhlaWdodCA9IE1hdGgubWF4KHRoaXMuZGF0YS5pdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCwgdGhpcy5kYXRhLnN1Ykl0ZW1zLmxlbmd0aCAqIElURU1fSEVJR0hUKTtcblxuICAgICAgdGhpcy5zZXREYXRhKHsgbWFpbkhlaWdodDogTWF0aC5taW4obWF4SGVpZ2h0LCB0aGlzLmRhdGEubWF4SGVpZ2h0KSB9KTtcbiAgICB9LFxuXG4gICAgLy8g5pu05paw5a2Q6aG55YiX6KGo6auY5bqm77yM5qC55o2u5Y+v5bGV56S655qE5pyA5aSn6auY5bqm5ZKM5b2T5YmN5a2Q6aG55YiX6KGo55qE6auY5bqm5Yaz5a6aXG4gICAgdXBkYXRlSXRlbUhlaWdodCgpIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGl0ZW1IZWlnaHQ6IE1hdGgubWluKHRoaXMuZGF0YS5zdWJJdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCwgdGhpcy5kYXRhLm1heEhlaWdodCkgfSk7XG4gICAgfVxuICB9XG59KTtcbiJdfQ==