export const state = () => ({
  users: [
    {
      name: 'Bessie Cooper',
      role: 'team leader',
      location: 'home',
      department: 'd4',
      status: 'On break',
      picture: require('@/assets/images/user1.png'),
      isOnline: true,
    },
    {
      name: 'Darrell Steward',
      role: 'agent',
      location: 'office',
      department: 'd3',
      status: 'In a meeting',
      picture: require('@/assets/images/user2.png'),
    },
    {
      name: 'Jerry Nelson',
      role: 'agent',
      location: 'office',
      department: 'd2',
      status: 'Troubleshooting',
    },
    {
      name: 'Jenny Wilson',
      role: 'agent',
      location: 'home',
      department: 'd2',
      status: null,
      picture: require('@/assets/images/user3.png'),
      isOnline: true,
    },
    {
      name: 'Arlene McCoy',
      role: 'manager',
      location: 'office',
      department: 'd1',
      status: 'In a meeting',
      picture: require('@/assets/images/user4.png'),
    },
    {
      name: 'Theresa Webb',
      role: 'IT',
      location: 'home',
      department: 'd1',
      status: null,
    },
    {
      name: 'John Doe',
      role: 'IT',
      location: 'home',
      department: 'd1',
      status: null,
    },
    {
      name: 'akmar nafi',
      role: 'IT',
      location: 'office',
      department: 'd1',
      status: null,
      isOnline: true,
    },
  ],
})

export const getters = {
  // Converts users array to groups based on the role.
  usersByGroups: (state) => {
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
