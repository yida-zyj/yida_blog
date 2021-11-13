

module.exports = [
  //Home
  { text: "主页", link: "/", icon: "reco-home" }, 
  //TimeLine
  { text: "时间轴", link: "/timeline/", icon: "reco-date" }, 
  //About
  { text: "关于我", link: "/about/", icon: "reco-account" }, 
  //Contact
  {
    text: "联系我", 
    icon: "reco-message",
    items: [
      {
        text: "GitHub",
        link: "https://github.com/yida-zyj",
        icon: "reco-github",
      }
    ],
  },
];
