const siteConfig = {
  name: "Bottles",
  description: "Bottles",
  pinata: {
    pinataJwt:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxZWRkNmJmMC05ZmYyLTQ3ZGQtYTBjZC0wZjhhNDI3YjU1MGIiLCJlbWFpbCI6ImFndXNzdWxpc3Rpb25vYTBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjIwNTg5YjljYzJmYzJhNjk0OTBjIiwic2NvcGVkS2V5U2VjcmV0IjoiYjM0MmVhZmJhMzk3OGE4ODZjYzAxYWJiOGViOGFiZDU5ZjA0Y2U3ODIzNmNmZGYzNTA1NmJlN2M0Nzk1NDEyZSIsImV4cCI6MTc5MTI5OTM4OX0.l_ApU2gOpRfGVCKiy0fXgAowqLwn2Z7DALGLHHC-IVM",
    pinataGateway:"https://scarlet-peaceful-buzzard-657.mypinata.cloud/ipfs/",
  },
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Bottles",
      href: "/bottles",
    },

    {
      label: "More",
      href: "/more",
    },
  ],
};


export default siteConfig;
export type SiteConfig = typeof siteConfig;
