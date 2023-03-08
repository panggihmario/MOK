type subPath = {
  label : string,
  path : string
}

export type item = {
  label : string,
  isOpen : boolean,
  icon : string,
  items : subPath[]
}



const Menu : item[] = [
  {
    label : 'Manage Account' ,
    isOpen  : false,
    icon : 'fa-solid fa-desktop',
    items : [
      {
        label : 'List Management',
        path : '/management'
      },
      {
        label : 'List User',
        path : '/user'
      }
    ]
  },
  {
    label : 'Manager Socmed',
    icon : 'fa-solid fa-user-gear',
    isOpen  : false,
    items : [
      {
        label : 'Trending Hashtag',
        path : '/trending-hashtag'
      },
      {
        label : 'Manage Hashtag',
        path : '/manage-hashtag'
      },
      {
        label : 'List Channel',
        path : '/channels'
      }
        
      // 'Trending Hashtag',
      // 'Manage Hashtag',
      // 'List Channel'
    ]
  },
  // {
  //   label : 'Konten Feed',
  //   isOpen  : false,
  //   icon : 'fa-solid fa-pen',
  //   items : [
  //     'Post Feed',
  //     'Semua Postingan User'
  //   ]
  // },
]
export default Menu