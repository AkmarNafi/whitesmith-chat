<template>
  <div class="user-widget">
    <div class="columns m-0 p-0 is-mobile is-vcentered">
      <div class="avatar-container">
        <img
          v-if="userData.picture"
          class="avatar"
          :src="userData.picture"
          alt=""
        />
        <div v-else class="avatar-placeholder orange-combo">
          {{ getNameLetters }}
        </div>
        <div v-if="userData.status" class="status-text">
          <div class="tag">{{ userData.status }}</div>
        </div>

        <div v-if="userData.isOnline" class="online-pin"></div>
      </div>

      <div v-if="!collapse" class="column details">
        <div class="name">
          {{ userData.name }}
          <span class="tag outline ml-1">{{ userData.department }}</span>
        </div>
        <div class="location">{{ userData.location }}</div>
      </div>

      <b-button v-if="!collapse" class="message-button">
        <img
          src="@/assets/icons/message.svg"
          alt=""
          :class="{ greyscale: !userData.isOnline }"
        />
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      default: undefined,
    },

    collapse: Boolean,
  },
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
  
      reduce: false,
    }
  },
  computed: {
    // return first letters on name | John Doe => JD
    getNameLetters() {
      const words = this.userData.name?.split(' ')

      if (words.length > 1) {
        return `${words[0][0]}${words[1][0]}`
      } else {
        return `${words[0][0]}`
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.user-widget {
  padding-bottom: 40px;

  .message-button {
    height: 45px;
    width: 45px;
    padding: 0;
    border-color: $grey-dark;
    border-radius: 20%;
    img {
      position: relative;
      top: 2px;
      width: 18px;
      height: 18px;
    }
  }

  .avatar-container {
    margin: auto;
    position: relative;
    width: 67px;

    .avatar {
      width: 65px;
      height: 65px;
      border-radius: 17px;
    }

    .avatar-placeholder {
      width: 65px;
      height: 65px;
      border-radius: 17px;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 27px;
      text-align: center;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .status-text {
      position: absolute;
      bottom: -8px;
      left: 50%;

      transform: translateX(-50%);

      .tag {
        background: rgba(245, 245, 245, 0.8);
        backdrop-filter: blur(7px);

        border-radius: 51px;
        color: $secondary-text;
        display: block;

        text-align: center;
        font-size: 12px;
        display: block;
        padding: 3px 10px;
      }
    }
    .online-pin {
      z-index: 10;
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: $green-dark;
      top: -3px;
      right: -3px;
      border-radius: 100%;
    }
  }

  .details {
    padding: 5px 15px;

    .name {
      font-weight: 500;
      font-size: 15px;
      color: $primary-text;
      text-transform: capitalize;
    }

    .location {
      font-weight: normal;
      font-size: 14px;
      color: $secondary-text;
      text-transform: capitalize;
    }
  }
}
</style>
