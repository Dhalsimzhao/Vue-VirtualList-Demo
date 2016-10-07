<template>
  <div class="list-container">
    <div class="virtual-box" v-bind:style="virtualboxStyle">
      <template v-for="(index, item) in viewportItems">
        <div class="list-item" v-bind:style="{ top: item.index * itemHeight + 'px' }">{{ item.text }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      items: this.getItems(),
      itemHeight: '',
      startIndex: 0,
      endIndex: 0
    }
  },

  computed: {
    viewportItems: function () {
      return this.items.slice(this.startIndex, this.endIndex)
    },

    virtualboxStyle: function () {
      return {
        height: this.items.length * this.getItemHeight() + 'px'
      }
    }
  },

  comliled: function () {

  },

  ready: function () {
    // debugger
    var self = this
    $(this.$el).scroll(function () {
      self.onScoll()
    })
    this.getItemHeight()
    this._calIndex()
  },

  methods: {
    getItems: function () {
      // debugger
      if (!this.items) {
        console.log('create items')
        // debugger
        this.items = this.createItems()
      } else {
        console.log('use cache items')
      }
      return this.items
    },

    createItems: function () {
      var data = []
      var num = 1000
      while (num--) {
        // data.push('list item ' + num)
        data.push({
          text: 'list item ' + data.length,
          index: data.length
        })
      }
      return data
    },

    onScoll: function () {
      this._calIndex()
    },

    getItemHeight: function () {
      if (!this.itemHeight) {
        this._createTypicalItem();
      }
      return this.itemHeight
    },

    _createTypicalItem: function () {
      var itemTemplate = '<div class="list-item">typical</div>'
      var $item = $(itemTemplate)
      $(this.$el).find('.virtual-box').prepend($item);
      this.itemHeight = $item.outerHeight()
      $item.remove()
    },

    _calIndex: function () {
      var $el = $(this.$el),
          scrollOffset = $el.scrollTop(), startIndex, endIndex,
          viewportHeight = $el.height(), listItemHeight = 40,
          viewportListLength = Math.floor(viewportHeight / listItemHeight) + 1

      startIndex = Math.floor(scrollOffset / listItemHeight)
      if ((startIndex + viewportListLength) > this.items.length) {
          startIndex = Math.max((this.items.length - viewportListLength), 0)
      }
      endIndex = startIndex + viewportListLength

      this.startIndex = startIndex
      this.endIndex = endIndex
    }
  }
}
</script>

<style type="text/css">
.counter {
  position: fixed;
  right: 0;
}
.list-container {
  /*text-align: center;*/ 
  /*padding: 10px;*/
  overflow: auto;
  height: 100%;

}
.list-container .virtual-box {
  position: relative;
}
.list-item {
  width: 100%;
  /*display: inline-block;*/
  /*margin: 3px 10px;*/
  border: 1px solid #ccc;
  /*border-top: none;*/
  height: 40px;
  line-height: 40px;
  padding: 0 .5em;
  position: absolute;

  left: 0;
}
.list-item:first-child {
  /*border-top: 1px solid #ccc;*/
}
</style>