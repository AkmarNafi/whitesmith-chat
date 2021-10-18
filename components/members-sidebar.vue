<template>
  <b-sidebar
    position="static"
    :mobile="mobile"
    :reduce="isSidebarReduced"
    open
    :fullheight="true"
  >
    <div class="sidebar-layout">
      <div class="action-title">
        <b-button
          type="is-custom-blue"
          class="toggle-button"
          @click="isSidebarReduced = !isSidebarReduced"
        >
          <span class="back-icon">
            <img
              src="@/assets/icons/back-icon.svg"
              alt=""
              :class="{ rotated: !isSidebarReduced }"
            />
          </span>
          {{ $t('members') }}
        </b-button>
      </div>
      <div class="member-sections-container">
        <div
          v-for="(role, index1) in Object.keys(usersByGroups)"
          :key="index1"
          class="member-sections"
        >
          <div class="role">
            {{ $t(role)
            }}<span class="team-count">{{ usersByGroups[role].length }}</span>
          </div>
          <user-widget
            v-for="(userData, index2) in usersByGroups[role]"
            :key="index2"
            :user-data="userData"
            :collapse="isSidebarReduced"
          ></user-widget>
        </div>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
import { mapGetters } from 'vuex'
import userWidget from './members-sidebar-member.vue'

export default {
  components: {
    userWidget,
  },
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: 'reduce',
      isSidebarReduced: true,
    }
  },
  computed: {
    ...mapGetters(['usersByGroups']),
  },
}
</script>

<style lang="scss" scoped>
.sidebar-layout {
  .action-title {
    .toggle-button {
      text-transform: capitalize;
      .back-icon {
        position: relative;
        top: 4px;
        right: 4px;
      }

      width: 100%;
      border: none;
      border-radius: 0;
      height: 50px;
    }
  }

  .member-sections-container {
    height: calc(100vh - 100px);

    overflow: auto;
    padding: 10px 40px;

    .member-sections {
      border-bottom: 1px solid $border-color;

      .role {
        text-transform: capitalize;
        font-weight: 500;
        font-size: 14px;
        color: $secondary-text;

        text-align: center;
        margin-bottom: 20px;
        margin-top: 20px;

        .team-count {
          background: $grey-dark;
          color: white;
          font-size: 13px;
          font-weight: 600;

          padding: 5px;
          text-align: center;
          border-radius: 10px;
          padding: 1px 8px;

          margin-left: 5px;
        }
      }
    }
  }
}
</style>
