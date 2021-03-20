import { SideNavInterface } from "../../interfaces/side-nav.type";
export const ROUTES: SideNavInterface[] = [
  {
    path: "/pages/home",
    title: "Home",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "home",
    submenu: [],
  },
  {
    path: "/pages/history",
    title: "History",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "history",
    submenu: [],
  },
  {
    path: "/pages/setting",
    title: "Account",
    iconType: "nzIcon",
    iconTheme: "outline",
    icon: "user",
    submenu: [],
  },
  // {
  //     path: '',
  //     title: 'Multi Level Menu',
  //     iconType: 'nzIcon',
  //     iconTheme: 'outline',
  //     icon: 'appstore',
  //     submenu: [
  //         {
  //             path: '',
  //             title: 'Level 1',
  //             iconType: '',
  //             icon: '',
  //             iconTheme: '',
  //             submenu: [
  //                 {
  //                     path: '',
  //                     title: 'Level 2',
  //                     iconType: 'nzIcon',
  //                     iconTheme: 'outline',
  //                     icon: '',
  //                     submenu: []
  //                 }
  //             ]
  //         }
  //     ]
  // }
];
