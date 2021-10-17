export const state = () => ({
  users: [
    {
      name: 'Bessie Cooper',
      role: 'team leader',
      location: 'home',
      department: 'd4',
      status: 'On break',
      picture: require('@/assets/images/avatar.png'),
      isOnline: true,
    },
    {
      name: 'Darrell Steward',
      role: 'agent',
      location: 'office',
      department: 'd3',
      status: 'In a meeting',
    },
    {
      name: 'Jerry Nelson',
      role: 'agent',
      location: 'office',
      department: 'd2',
      status: 'Troubleshooting',
      picture: require('@/assets/images/avatar.png'),
    },
    {
      name: 'Jenny Wilson',
      role: 'agent',
      location: 'home',
      department: 'd2',
      status: null,
      isOnline: true,
    },
    {
      name: 'Arlene McCoy',
      role: 'manager',
      location: 'office',
      department: 'd1',
      status: 'In a meeting',
      picture: require('@/assets/images/avatar.png'),
    },
    {
      name: 'Theresa Webb',
      role: 'IT',
      location: 'home',
      department: 'd1',
      status: null,
    },

    {
      name: 'Theresa Webb',
      role: 'IT',
      location: 'home',
      department: 'd1',
      status: null,
    },

    {
      name: 'Theresa Webb',
      role: 'IT',
      location: 'home',
      department: 'd1',
      status: null,
    },
  ],
})

export const getters = {
  users: (state) => {
    const userList = {}

    for (let i = 0; i < state.users.length; i++) {
      const user = state.users[i]
      const role = user.role

      if (userList[role] === undefined) {
        userList[role] = [user]
      } else {
        userList[role].push(user)
      }
    }
    return userList
  },
}

export const mutations = {}

export const actions = {}
