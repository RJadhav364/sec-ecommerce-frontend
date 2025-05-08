 const navbarDetails = [
    // {
    //   to: "/",
    //   pageName: "Home",
    //   key: 1,
    //   subNavbar: false
    // },
    {
      to: "/products",
      pageName: "Electronics",
      key: 2,
      subNavbar: true,
      subNavbarLink: [
        {
          subPageName: "Mobile",
          key: "mobile"
        },
        {
          subPageName: "TV",
          key: "tv",
        },
        {
          subPageName: "Laptop",
          key: "laptop",
        },
        {
          subPageName: "Camera",
          key: "camera",
        }
      ]
    },
    {
      to: "/products",
      pageName: "Kitchen",
      key: 3,
      subNavbar: false
    },
    {
      to: "/products",
      pageName: "Bicycles",
      key: 4,
      subNavbar: false
    },
    {
      to: "/products",
      pageName: "Bottle",
      key: 5,
      subNavbar: false
    },
    {
      to: "/products",
      pageName: "Fashion accessories",
      key: 6,
      subNavbar: false
    },
    {
      to: "/products",
      pageName: "Clothes",
      key: 7,
      subNavbar: true,
      subNavbarLink: [
        {
          subPageName: "Men",
          key: "men"
        },
        {
          subPageName: "Women",
          key: "women",
        },
        {
          subPageName: "Kids",
          key: "kids",
        },
      ]
    },
    {
      to: "/products",
      pageName: "Blankets",
      key: 8,
      subNavbar: false
    },
    {
      to: "/products",
      pageName: "Footwear",
      key: 9,
      subNavbar: false
    },
  ];

  export default navbarDetails;