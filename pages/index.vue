<template>
  <div class="body">
    <div class="columns m-0 p-0" style="height:100%">
      <div class="groups"></div>
      <div class="column m-0 p-0">
       
      </div>
      <div class="members">
        <members-sidebar></members-sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import membersSidebar from "~/components/members-sidebar";

export default {
  name: "HomePage",
  components: {
    membersSidebar
  },
  data() {
    return {};
  },

  computed: {},
  mounted() {},

  methods: {
    // insertAbove(evt, toColumnID, insertAboveID) {
    //   const itemID = evt.dataTransfer.getData("itemID");
    //   this.$store.dispatch("moveKanbanItem", {
    //     itemID,
    //     toColumnID,
    //     insertAboveID
    //   });
    // }
  }
};
</script>

<style scoped lang="scss">
.body {
  height: 100%;
}
.groups {
  width: 400px;
  border-right: 1px solid $border-color;
  background: $secondary-bg;
  height: 100%;
}

.members {
  width: auto;
  border-left: 1px solid $border-color;
  background: $secondary-bg;
}
</style>
