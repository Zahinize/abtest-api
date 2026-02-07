const POLICIES = {
  A: {
    variant: "clean_ux",
    policies: {
      global: {
        timeOnPage: 120,
        thirdPartyRefresh: true,
        refresh: 30,
      },
      stickyFooter: {
        devices: ["desktop", "tablet"],
        sizes: [[728, 90]],
      },
      incontent: {
        devices: ["desktop", "mobile", "tablet"],
        sizes: [
          [300, 250],
          [250, 250],
          [320, 100],
          [320, 50],
        ],
      },
      atf_sidebar: {
        devices: ["desktop", "tablet"],
        sizes: [
          [300, 250],
          [250, 250],
          [320, 100],
          [320, 50],
        ],
      },
      rewarded: {
        coolDown: 21600000,
        scrollDepth: 30,
        timeOnPage: 20,
      },
    },
  },
  B: {
    variant: "revenue_optimized",
    policies: {
      global: {
        timeOnPage: 90,
        thirdPartyRefresh: false,
        refresh: 25,
      },
      stickyFooter: {
        devices: ["desktop", "tablet"],
        sizes: [
          [728, 90],
          [970, 90],
        ],
      },
      incontent: {
        devices: ["desktop", "mobile", "tablet"],
        sizes: [
          [336, 280],
          [300, 250],
          [250, 250],
          [320, 100],
          [468, 60],
          [320, 50],
          [300, 50],
        ],
      },
      atf_sidebar: {
        devices: ["desktop", "tablet"],
        sizes: [
          [336, 280],
          [300, 250],
          [250, 250],
          [320, 100],
          [320, 50],
          [300, 50],
        ],
      },
      rewarded: {
        coolDown: 10800000,
        scrollDepth: 20,
        timeOnPage: 10,
      },
    },
  },
};

const EXPERIMENT = "ab_test_v1";

export { POLICIES, EXPERIMENT };
